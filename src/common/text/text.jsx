import React, { Fragment, useEffect, useMemo } from 'react';
import Markdown from 'markdown-to-jsx';
import hljs from 'highlight.js';

let Text = (props) => {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightBlock(block);
    });
  });
  console.log(props, '-------------->12345');
  let md = useMemo(() => (
    props.path ?
    require(`../../asset${props.path}`).default : ''
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