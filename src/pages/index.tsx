import Link from "next/link";
import { Page } from "../templates";
import { Heading1 } from "../typography";

const App = () => {
  return (
    <Page>
      <Heading1>Hello World!</Heading1>
      <Link href='/places/Aljieudum'><a>Aljieudum</a></Link>
    </Page>
  );
};

export default App;
