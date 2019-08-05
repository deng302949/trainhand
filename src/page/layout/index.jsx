import React from 'react';

import { Layout } from 'antd';
import SiderMenu from '../sidemenu/index';
import ContentBlock from '../container/content';

const LayoutBlock = () => {
  return (
    <Layout>
      <SiderMenu />
      <ContentBlock />
    </Layout>
  );
}
export default LayoutBlock;