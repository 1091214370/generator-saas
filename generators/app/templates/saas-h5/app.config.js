module.exports = {
  // saas应用类型
  sat: 'pc',
  // 页面配置
  page: [{
    module: 'index',
    path: './src/index',
    title: '页面标题',
  }],
  // beta验证白名单
  beta: [],
  // runtime相关配置
  runtime: {
    // 全局head
    heads: [],
    // 全局body
    bodies: [],
    // 插件配置
    plugins: [{
      name: '@ali/saas-plugin-fireworm',
      status: true,
      config: {}
    }],
  },
  webpack: {
    // 主题配置
    themes: {},
    // 开启pxtorem
    pxtorem: false,
    // 是否开启chunk分析
    analyze: false,
    // 自定义构建配置、config为全局的构建配置
    config: (webpackConfig) => {
      return webpackConfig;
    }
  }
};