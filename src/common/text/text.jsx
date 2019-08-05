import React, { Fragment, useEffect, useMemo } from 'react';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js';

let Text = (props) => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  });

  let md = useMemo(() => (
    require(`../../asset${props.path}`).default
  ), [props.path]);

  return (
    <Fragment>
      <Markdown>
        {md}
      </Markdown>
    </Fragment>
  );
};

export default Text;