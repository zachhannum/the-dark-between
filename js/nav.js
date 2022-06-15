var enableScrollListener = true;

const toc = document.getElementById("toc-list");
const headings = [].slice.call(document.body.querySelectorAll('h1, h2, h3, h4'));
const sidenav = document.getElementById('sidenav');
const icon = document.getElementById('sidenav-icon');
const button = document.getElementById('sidenav-button');
const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
const maxAutoCollapseWidth = 1575;

function toggleSidenav() {
    sidenav.classList.toggle('sidenav-collapse');
    icon.classList.toggle('fa-angle-right');
    icon.classList.toggle('fa-angle-left');
}

button.onclick = function () {
    toggleSidenav();
    if (!sidenav.classList.contains("sidenav-collapse")) {
        setTimeout(function () { highlightTocHeading(); }, 300);
    }
};

function clearActiveToc() {
    var lastActive = document.getElementsByClassName('toc-active');
    Array.from(lastActive).forEach((el) => {
        el.classList.remove("toc-active");
    });
}

if (vw >= maxAutoCollapseWidth) {
    toggleSidenav();
}

headings.forEach(function (heading, index) {
    var ref = "toc" + index;
    if (heading.hasAttribute("id"))
        ref = heading.getAttribute("id");
    else
        heading.setAttribute("id", ref);

    var link = document.createElement("a");
    link.setAttribute("data-destination", ref);
    link.setAttribute("class", "toc-link");
    link.setAttribute("id", "link" + ref);
    link.textContent = heading.textContent;
    link.onclick = function () {
        clearActiveToc();
        var destinationElement = document.getElementById(link.dataset.destination);
        enableScrollListener = false;
        destinationElement.scrollIntoView({ behavior: "smooth", block: "start" });
        if (vw < maxAutoCollapseWidth) {
            toggleSidenav();
        }
    }

    var div = document.createElement("div");
    div.setAttribute("class", heading.tagName.toLowerCase());
    div.appendChild(link);
    toc.appendChild(div);
});

var scrollTimeout;
document.addEventListener('scroll', function (e) {
    if (enableScrollListener) {
        highlightTocHeading();
    } else {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(function () {
            highlightTocHeading();
        }, 50);
    }
});

function highlightTocHeading() {
    if (sidenav.classList.contains("sidenav-collapse")) { return; }
    clearActiveToc();
    headings.every(heading => {
        const rect = heading.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)) {
            var el = document.getElementById("link" + heading.id);
            el.classList.toggle('toc-active');
            el.scrollIntoView({
                behavior: "smooth",
                block: "center"
            })
            return false;
        }
        return true;
    });
}
