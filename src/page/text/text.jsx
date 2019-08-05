import React, { Fragment, useEffect, useMemo } from 'react';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js';
import textMd from '../../asset/files/text.md';

let Text = () => {
  
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  });

  const md = useMemo(() => {
    return textMd
  }, []);

  return (
    <Fragment>
      <div style={{ color: 'red' }}>{'md'}</div>
      <Markdown>
        {md}
      </Markdown>
    </Fragment>
  );
};

export default Text;