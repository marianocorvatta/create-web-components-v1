'use client'

import Editor from '@monaco-editor/react';

const DEFAULT_COMPONENT = `
function MiComponente(props) {
  return (
    <div>
      <h1>Hola, crea tu componente de React aqui</h1>
    </div>
  );
}

export default MiComponente;
`;

const CodeEditor = () => {
  return (
    <Editor height="100vh" defaultLanguage="javascript" defaultValue={DEFAULT_COMPONENT} />
  )
}

export default CodeEditor;