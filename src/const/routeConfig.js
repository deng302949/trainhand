export const routes = [
  {
    text: '根目录', path: '/', parent: 'Root', icon: 'leishen',
    component: 'Home', nav: true, exact: true, 
  },
  {
    text: 'HTML', path: '/html', parent: 'Root', icon: 'lvjuren',
    component: 'Html', nav: true, exact: false, 
  },
  {
    text: 'CSS', path: '/css', parent: 'Root', icon: 'heifuwang',
    component: 'Css', nav: true, exact: false, 
  },
  {
    text: 'JAVASCRIPT', path: '/js', parent: 'Root', icon: 'sishi',
    component: 'Js', nav: true, exact: false, 
  },
  {
    text: '性能', path: '/performance', parent: 'Root', icon: 'bianfuxia',
    component: 'Xingneng', nav: true, exact: false, 
  },
  {
    text: 'WEBPACK', path: '/webpack', parent: 'Root', icon: 'yiren',
    component: 'Webpack', nav: true, exact: false, 
  },
  {
    text: 'BABEL', path: '/babel', parent: 'Root', icon: 'gangtiexia',
    component: 'Babel', nav: true, exact: false, 
  },
  {
    text: 'REACT', path: '/react', parent: 'Root', icon: 'zhizhuxia',
    component: 'React', nav: true, exact: false, 
  },
  {
    text: 'NODEJS', path: '/node', parent: 'Root', icon: 'meiguoduichang',
    component: 'Nodejs', nav: true, exact: false, 
  }
]