import React from 'react';
import { marked } from 'marked';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import WindowBox from './components';
import './App.css';

function App() {
  const [markdown, setMarkdown] = React.useState('');

  return (
    <main id="markdown-app">
      <WindowBox title="Editor" icon={<FontAwesomeIcon icon={faEdit} />}>
        <textarea id="editor" className="editor" value={markdown} onChange={(e) => setMarkdown(e.target.value)} />
      </WindowBox>
      <WindowBox title="Preview" width={1000} icon={<FontAwesomeIcon icon={faEdit} />}>
        <div id="preview" dangerouslySetInnerHTML={{ __html: marked(markdown) }} /> {/* eslint-disable-line react/no-danger */}
      </WindowBox>
    </main>
  );
}
export default App;
