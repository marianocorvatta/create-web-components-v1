'use client'

import { useState } from 'react';
import Editor from '@monaco-editor/react';
import styles from './CodeEditor.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons'

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

const FILES = {
	'Component.jsx': {
	  name: 'Component.jsx',
	  language: 'javascript',
	  value: DEFAULT_COMPONENT,
	},
	'style.css': {
	  name: 'style.css',
	  language: 'css',
	  value: "someCSSCodeExample",
	},
	'index.html': {
	  name: 'index.html',
	  language: 'html',
	  value: "someHTMLCodeExample",
	},
  } as const;

export type FileList = keyof typeof FILES

const CodeEditor = () => {
	const [fileName, setFileName] = useState('Component.jsx');
	const file = FILES[fileName as FileList];

  return (
    <>
    <div className={styles.topBar}>
    <button className={styles.htmlButton} disabled={fileName === 'index.html'} onClick={() => setFileName('index.html')}>
      <div><FontAwesomeIcon icon={faHtml5} /></div>index.html
      </button>
      <button className={styles.cssButton} disabled={fileName === 'style.css'} onClick={() => setFileName('style.css')}>
      <div><FontAwesomeIcon icon={faCss3} /></div>style.css
      </button>
      <button className={styles.jsButton} disabled={fileName === 'Component.jsx'} onClick={() => setFileName('script.js')}>
      <div><FontAwesomeIcon  icon={faJs} /></div> Component.jsx
      </button>
    </div>
    <Editor
      height="100vh"
      theme="vs-dark"
      path={file.name}
      defaultLanguage={file.language}
      defaultValue={file.value}
    />
  </>
	)
}

export default CodeEditor;