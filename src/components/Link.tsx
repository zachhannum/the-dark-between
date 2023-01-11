import React, { useEffect, useRef, useState } from "react";
import { useStaticQuery, graphql } from "gatsby";
import styled from "styled-components";
import { fixExcerpt } from "../utils/utils";

const StyledLink = styled.a`
  position: relative;
`;

type StyledLinkTooltipProps = {
  show: boolean;
  visible: boolean;
};

const StyledLinkTooltip = styled.div<StyledLinkTooltipProps>`
  position: absolute;
  padding: 10px;
  background-color: ${(p) => p.theme.bg[1]};
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  opacity: ${(p) => (p.show ? 1 : 0)};
  visibility: ${(p) => (p.visible ? "visible" : "hidden")};
  width: 300px;
  transition: opacity 0.2s ease-in-out;
  z-index: 10;
`;

const StyledTooltipTitle = styled.div`
  font-size: 1.1em;
  padding-bottom: 5px;
`;

const StyledTooltipText = styled.div`
  font-size: 0.7em;
`;

type LinkProps = {
  href: string;
  title: string;
  children: React.ReactNode;
};

export const Link = ({ href, title, children }: LinkProps) => {
  const tooltipRef = useRef<HTMLDivElement>(null);
  const linkRef = useRef<HTMLAnchorElement>(null);
  const [showTooltip, setShowTooltip] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [tooltipTitle, setTooltipTitle] = useState("");
  const [tooltipText, setTooltipText] = useState("");
  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          excerpt(pruneLength: 140)
          frontmatter {
            title
          }
        }
      }
    }
  `);
  useEffect(() => {
    if (data) {
      const nodes = data.allMdx.nodes;
      nodes.filter((node) => {
        if (node.frontmatter.title === title) {
          setTooltipTitle(node.frontmatter.title);
          const text = fixExcerpt(node.excerpt);
          setTooltipText(text);
        }
      });
    }
  }, [data]);
  useEffect(() => {
    const tooltip = tooltipRef.current;
    if (tooltip) {
      //position tooltip above the link using the tooltip's height and link position
      const tooltipHeight = tooltip.getBoundingClientRect().height;
      tooltip.style.top = `${0 - tooltipHeight - 5}px`;
      tooltip.style.left = `0px`;
      //position tooltip below the link if it would be off the screen
      const link = linkRef.current;
      if (link) {
        const linkRect = link.getBoundingClientRect();
        const tooltipRect = tooltip.getBoundingClientRect();
        if (linkRect.top - tooltipRect.height < 0) {
          tooltip.style.top = `${linkRect.height + 5}px`;
        }
        //position tooltip to the left of the link if it would be off the screen
        if (tooltipRect.right > window.innerWidth) {
          tooltip.style.left = `${linkRect.width - tooltipRect.width}px`;
        }
      }
    }
  }, [tooltipText, tooltipTitle, showTooltip]);

  useEffect(() => {
    // Set showTooltip on mouse hover over link
    const link = linkRef.current;
    if (link) {
      const handleMouseEnter = () => {
        setShowTooltip(true);
        setTooltipVisible(true);
      };
      const handleMouseLeave = () => {
        setShowTooltip(false);
        setTimeout(() => {
          setTooltipVisible(false);
        }, 200);
      };
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
      return () => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return (
    <StyledLink href={href} title={title} ref={linkRef}>
      <>
        {children}
        <StyledLinkTooltip
          ref={tooltipRef}
          show={showTooltip && tooltipText != ""}
          visible={tooltipVisible && tooltipText != ""}
        >
          <StyledTooltipTitle>{tooltipTitle}</StyledTooltipTitle>
          <StyledTooltipText>{tooltipText}</StyledTooltipText>
        </StyledLinkTooltip>
      </>
    </StyledLink>
  );
};
