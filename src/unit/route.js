/**
 * 获取路由列表 
**/
import routeData  from '../asset/files/routeData';

export const route = () => {
  const getRouteList = (router, ...filrers) => {
    const routeList = [];
    Object.keys(router).forEach((routeKey) => {
      const route = router[routeKey];
      for (const filter of filrers) {
        if ( !filter(route) ) {
          return;
        }
      }
      routeList.push(route);
    });
    return routeList;
  }
  
  /**
   * 获取子级路由
   */
  const getSubRoutes = ( routeList, parent, options ) => {
    const { flatten = false, cascade = true, parentType = 'parent' } = options;
    let routes = routeList;
    
    if(parent) {
      routes = routes.filter((route) => (route[parentType] || route.parent) === parent);
    }
  
    if(!cascade) {
      return routes;
    }
  
    for (const route of routes) {
      if(route.cascade === false) {
        continue;
      }
  
      const branch = getSubRoutes(
        routeList,
        route.routeName,
        { flatten, cascade, parentType }
      );
  
      if (flatten) {
        routes = routes.concat(branch);
      } else {
        branch.length > 0 && (route.children = branch);
      }
    }
    return routes;
  };
  
  const checkComponentRoute = (route) => {
    return route.component;
  }
  
  const getComponentRouteList = (rootRouteName = "Root", options = { cascade: false }) => {
    const { cascade = true } = options;
    let routeList = getRouteList(routeData);
    routeList = getSubRoutes(routeList, rootRouteName, { flatten: false, cascade });
    return routeList.filter(checkComponentRoute);
  }

  return getComponentRouteList;

}