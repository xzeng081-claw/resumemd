'use client';

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import './editor.css';

// 动态导入 Monaco Editor，避免 SSR 问题
const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { 
  ssr: false,
  loading: () => <div className="editor-loading">Editor loading...</div>
});

interface EditorProps {
  initialValue?: string;
  onChange?: (value: string) => void;
}

const Editor: React.FC<EditorProps> = ({ 
  initialValue = '# Welcome\n\nStart writing your resume...', 
  onChange 
}) => {
  const [value, setValue] = useState<string>(initialValue);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleEditorChange = (newValue: string | undefined) => {
    const val = newValue || '';
    setValue(val);
    if (onChange) {
      onChange(val);
    }
  };

  return (
    <div className="editor-container">
      <div className="editor-layout">
        <div className="editor-panel">
          <div className="editor-header">
            <h3>Markdown Editor</h3>
          </div>
          <div className="editor-body">
            {isClient ? (
              <MonacoEditor
                height="100%"
                language="markdown"
                value={value}
                onChange={handleEditorChange}
                theme="vs-light"
                options={{
                  minimap: { enabled: false },
                  fontSize: 14,
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  tabSize: 2,
                  wordWrap: 'on',
                }}
              />
            ) : (
              <div className="editor-placeholder">Loading editor...</div>
            )}
          </div>
        </div>
        
        <div className="preview-panel">
          <div className="preview-header">
            <h3>Preview</h3>
          </div>
          <div className="preview-body">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              rehypePlugins={[rehypeHighlight]}
              components={{
                h1: ({ node, ...props }) => <h1 className="preview-h1" {...props} />,
                h2: ({ node, ...props }) => <h2 className="preview-h2" {...props} />,
                h3: ({ node, ...props }) => <h3 className="preview-h3" {...props} />,
                p: ({ node, ...props }) => <p className="preview-paragraph" {...props} />,
                ul: ({ node, ...props }) => <ul className="preview-ul" {...props} />,
                ol: ({ node, ...props }) => <ol className="preview-ol" {...props} />,
                li: ({ node, ...props }) => <li className="preview-li" {...props} />,
                table: ({ node, ...props }) => <table className="preview-table" {...props} />,
                th: ({ node, ...props }) => <th className="preview-th" {...props} />,
                td: ({ node, ...props }) => <td className="preview-td" {...props} />,
                pre: ({ node, ...props }) => <pre className="preview-pre" {...props} />,
                code: ({ node, inline, ...props }) => {
                  if (inline) {
                    return <code className="preview-code-inline" {...props} />;
                  }
                  return <code className="preview-code-block" {...props} />;
                },
                a: ({ node, ...props }) => <a className="preview-link" target="_blank" rel="noopener noreferrer" {...props} />,
              }}
            >
              {value}
            </ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Editor;
