import { CopyBlock, vs2015 } from "react-code-blocks";

const code = `
  function test( a, b ) {
    return a + b;
  };
`;

function MyCodeComponent( props ) {
  return (
    <CopyBlock { ...props } />
  );
};

export default function App() {
  return (
    <MyCodeComponent
      text={ code }
      language={ "javascript" }
      showLineNumbers={ true }
      wrapLines={ true }
      theme={ vs2015 }
      codeBlock={ true }
    />
  )
};