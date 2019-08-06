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
    props.path ? 
    require(`../../asset${props.path}`).default :
    '## 大哥啊，报错都提示 `props.path` 等于 undefined 了'
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