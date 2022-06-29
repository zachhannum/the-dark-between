import styled, { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "../styles";

const StyledApp = styled.div`
  min-height: 100vh;
  width: 100vw;
  max-width: 800px;
  padding: 20px;
  display: flex;
  margin: auto;
  flex-direction: column;
  font-family: "Poppins", sans-serif;
`;

type PageProps = {
  children: React.ReactNode;
};
const Page = ({ children }: PageProps) => {
  return (
    <ThemeProvider theme={theme}>
      <StyledApp>
        <GlobalStyle />
        {children}
      </StyledApp>
    </ThemeProvider>
  );
};
export default Page;
