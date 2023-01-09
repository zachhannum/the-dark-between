import React, { useEffect } from "react";
import { useState } from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import { useFlexSearch } from "react-use-flexsearch";
import { Search } from "@styled-icons/evaicons-solid/Search";
import styled, { css } from "styled-components";
import { Image, Map, Center, Audio } from "../components";
import { usePlatform } from "../hooks";

type Result = {
  id: string;
  title: string;
  excerpt: string;
  path: string;
};

type StyledSearchModalProps = {
  show: boolean;
};

const StyledSearchModal = styled.div<StyledSearchModalProps>`
  display: flex;
  margin-top: 15vh;
  flex-direction: column;
  max-width: 700px;
  max-height: 60vh;
  width: 90%;
  justify-content: center;
  align-content: center;
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
  border-radius: 10px;
  box-shadow: 0 0 40px 20px rgba(0, 0, 0, 0.3);
  background-color: ${(p) => p.theme.bg[0]};
`;

const SearchResults = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;
  overflow-x: hidden;
  width: 100%;
`;

const SearchResult = styled.div`
  all: unset;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
  transition: background-color 0.2s ease-in-out;
`;

const SearchResultTitle = styled.div`
  font-size: 1.4em;
  padding-bottom: 10px;
  font-weight: 600;
  color: ${(p) => p.theme.fg[1]};
`;

const SearchResultDescription = styled.div`
  font-size: 0.9em;
  color: ${(p) => p.theme.fg[3]};
`;

type StyledBackgroundBlurProps = {
  show: boolean;
};
const StyledBackgroundBlur = styled.div<StyledBackgroundBlurProps>`
  position: fixed;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  background-color: rgba(0, 0, 0, 0.1);
  visibility: ${(p) => (p.show ? "visible" : "hidden")};
`;

type StyledSearchModalInputProps = {
  hasResults: boolean;
};

const StyledSearchModalInput = styled.input<StyledSearchModalInputProps>`
  all: unset;
  box-sizing: border-box;
  cursor: text;
  width: 100%;
  padding: 20px;
  font-family: inherit;
  color: ${(p) => p.theme.fg[1]};
  font-size: 1.2em;
  background-color: rgba(0, 0, 0, 0.2);
  ${(p) =>
    p.hasResults
      ? css`
          border-radius: 10px 10px 0px 0px;
        `
      : css`
          border-radius: 10px;
        `}
`;

const SearchIconContainer = styled.div`
  display: flex;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 12px;
  padding: 4px;
  border: 1px solid ${(p) => p.theme.fg[3]};
  position: absolute;
  top: 14px;
  right: 60px;
  font-size: 0.7em;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${(p) => p.theme.fg[3]};
  &:hover {
    background-color: ${(p) => p.theme.bg[1]};
    border-color: ${(p) => p.theme.fg[1]};
  }
  transition: background-color 0.2s ease-in-out;
`;

const SearchKeybinding = styled.span`
  padding: 3px;
  border-radius: 7px;
  /* font-size: 0.6em; */
  border: 1px solid ${(p) => p.theme.fg[3]};
  line-height: 100%;

`;

const SearchIcon = styled(Search)`
  color: ${(p) => p.theme.fg[1]};
  height: 20px;
  cursor: pointer;
`;

export const SearchModal = () => {
  const { localSearchPages } = useStaticQuery(graphql`
    query {
      localSearchPages {
        index
        store
      }
    }
  `);
  const [query, setQuery] = useState<string | null>(null);
  const results = useFlexSearch(
    query,
    localSearchPages.index,
    localSearchPages.store
  );
  const [show, setShow] = useState(false);
  const modalRef = React.useRef<HTMLDivElement>(null);
  const inputRef = React.useRef<HTMLInputElement>(null);
  const platform = usePlatform();

  // create useEffect on mount to listen for the keybinding Ctrl+S to open the search
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      let useMetaKey = false;
      if (platform.toLowerCase().includes("mac")) {
        useMetaKey = true;
      }
      const modKeyPressed = useMetaKey ? event.metaKey : event.ctrlKey;
      if (modKeyPressed && event.key === "k") {
        event.preventDefault();
        setShow(true);
      }
      if (event.key === "Escape") {
        setShow(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Focus the input when show is true
  useEffect(() => {
    if (show) {
      inputRef.current?.focus();
    } else {
      // set input value to empty string when the modal is closed
      inputRef.current!.value = "";
      setQuery("");
    }
  }, [show]);

  return (
    <>
      <SearchIconContainer
        onClick={() => {
          console.log("clicked");
          setShow(true);
        }}
      >
        <SearchIcon />
        <span>Search...</span>
          {platform.toLowerCase().includes("mac") ? (
            <SearchKeybinding>⌘K</SearchKeybinding>
          ) : (
            <SearchKeybinding>
              Ctrl+K
            </SearchKeybinding>
          )}
      </SearchIconContainer>
      <StyledBackgroundBlur
        show={show}
        onClick={() => {
          if (show) setShow(false);
        }}
      >
        <StyledSearchModal show={show} ref={modalRef}>
          <StyledSearchModalInput
            placeholder="Search..."
            ref={inputRef}
            // on change, set the value of the query to the value of the input
            onChange={(e) => setQuery(e.target.value)}
            hasResults={results.length > 0}
          />
          <SearchResults>
            {results.map((result: Result) => (
              <SearchResult key={result.id}>
                <Link
                  /* Kinda hacky but works */
                  to={`/${result.title.replaceAll(" ", "%20")}`}
                  onClick={() => {
                    setShow(false);
                  }}
                >
                  <SearchResultTitle>{result.title}</SearchResultTitle>
                  <SearchResultDescription>
                    {result.excerpt.split("!hidden")[0]}
                  </SearchResultDescription>
                </Link>
              </SearchResult>
            ))}
          </SearchResults>
        </StyledSearchModal>
      </StyledBackgroundBlur>
    </>
  );
};
