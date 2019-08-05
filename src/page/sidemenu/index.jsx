import React from 'react';
import './index.less';
import { routes } from '../../const/routeConfig';

export default (props) => {
  const style = {
    width: '50px',
    height: '50px',
    textAlign: 'center',
    lineHeight: '50px',
    position: 'absolute',
  }
  const renderSiderMenu = (routes) => {
    let element = routes && routes.map((item, index) => {
      return <div className={`xl-sider-${index} xl-sider-all`} style={{...style, ...{left: `${index * 8}px`
        , top: `${index * 51}px`}}} key={index}>
          <svg className={`icon xl-svg-icon`} aria-hidden="true"
            onClick={() => {props.history.push(item.path)}}
          >
            <use xlinkHref={`#icon-${item.icon}`}></use>
          </svg>
      </div>
    })
    return element;
  }
  return (
    <div className="xl-sidermenu">
      <div className="xl-sider-content">
        {renderSiderMenu(routes)}
      </div>
    </div>
  );
}