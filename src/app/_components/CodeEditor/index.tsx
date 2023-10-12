'use client'

import { useRef, useState, useEffect } from 'react';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api';
import styles from './CodeEditor.module.css';

export const CodeEditor = () => {
	const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor | null>(null);
	const monacoEl = useRef(null);

	useEffect(() => {
		if (monacoEl) {
			setEditor((editor) => {
				if (editor) return editor;

				return monaco.editor.create(monacoEl.current!, {
					value: ['const Component = () => {', '\tconsole.log("Hello world!");', '}'].join('\n'),
					language: 'typescript'
				});
			});
		}

		return () => editor?.dispose();
	}, [monacoEl.current]);

	return <div className={styles.editor} ref={monacoEl}></div>;
};