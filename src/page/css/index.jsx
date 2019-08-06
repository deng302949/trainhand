import React from 'react';
import { markdownFiles } from '../../const/markdownConfig.js';
import TabBar from "../../common/Tabbar";

export default () => {
  let data = markdownFiles.css;
  console.log(data, '----------->134');
  return (
    <TabBar {...{data}}/>
  );
}