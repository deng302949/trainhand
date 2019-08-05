import React from 'react';
import Route from '../route/route';
import { Layout } from 'antd';
const { Content } = Layout;

const ContentBlock = () => {
  return (
    <Layout>
      <Content>
        <Route />
      </Content>
    </Layout>
  );
};

export default ContentBlock;