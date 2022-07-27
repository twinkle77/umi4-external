import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '@umijs/max',
  },
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
    {
      name: '权限演示',
      path: '/access',
      component: './Access',
    },
    {
        name: ' CRUD 示例',
        path: '/table',
        component: './Table',
    },
  ],
  npmClient: 'pnpm',
  jsMinifier: 'none',
  devtool: 'source-map',
  externals: {
    react: 'var window.React',
    'react-dom': 'var window.ReactDOM'
  },
  scripts: [
    'https://g.alicdn.com/code/lib/react/18.0.0/umd/react.production.min.js',
    'https://g.alicdn.com/code/lib/react-dom/18.0.0/umd/react-dom.production.min.js'
  ]
});

