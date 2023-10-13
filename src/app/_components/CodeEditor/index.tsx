'use client'

import { useState } from 'react'
import Editor from '@monaco-editor/react'
import styles from './CodeEditor.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHtml5, faCss3, faJs } from '@fortawesome/free-brands-svg-icons'

const DEFAULT_COMPONENT = `import styles from './MyComponent.module.css';

function MyComponent(props) {
  return (
    <div className={styles.container}>
      <h1>Hi! Create your React component here</h1>
    </div>
  );
}

export default MyComponent;
`

const DEFAULT_CSS = `.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
}
`

const FILES = {
  'Component.jsx': {
    name: 'Component.jsx',
    language: 'javascript',
    value: DEFAULT_COMPONENT,
  },
  'style.css': {
    name: 'style.css',
    language: 'css',
    value: DEFAULT_CSS,
  },
} as const

export type FileList = keyof typeof FILES

const CodeEditor = () => {
  const [fileName, setFileName] = useState('Component.jsx')
  const file = FILES[fileName as FileList]

  return (
    <>
      <div className={styles.topBar}>
        <button
          className={styles.cssButton}
          disabled={fileName === 'style.css'}
          onClick={() => setFileName('style.css')}
        >
          <div>
            <FontAwesomeIcon icon={faCss3} />
          </div>
          style.css
        </button>
        <button
          className={styles.jsButton}
          disabled={fileName === 'Component.jsx'}
          onClick={() => setFileName('Component.jsx')}
        >
          <div>
            <FontAwesomeIcon icon={faJs} />
          </div>{' '}
          Component.jsx
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

export default CodeEditor
