import React from 'react';
import { Tabs } from 'antd';
import Text  from './text/text';

const { TabPane } = Tabs;

export default (props) => {
  const { data = [] } = props;
  return (
    <div>
      <Tabs
        className="xl-tab-bar"
        defaultActiveKey={ data && data[0] && data[0].path}
        tabPosition={'left'}
      >
        { data && data.map(item => (
          <TabPane tab={`${item.name}`} key={item.path}>
            <Text {...item}/>
          </TabPane>
        )) }
      </Tabs>  
    </div>
  );
}