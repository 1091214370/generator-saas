module.exports = {
  // saas应用类型
  sat: 'pc',
  // 页面配置
  page: {
    index: {
      entry: './src/index',
      title: 'test page',
      spmb: '',
      heads: [],
      bodys: [],
    },
  },
  // runtime相关配置
  runtime: {
    // 主题配置
    themes: {},
    // 全局head
    heads: [],
    // 全局body
    bodys: [],
    // 插件配置
    plugins: [{
      kbtracker: {
      },
      fireworm: false,
      viewport: false,
    }],
  },
  webpack: {
    // 是否开启chunk分析
    analyze: false,
    // 自定义构建配置、config为全局的构建配置
    config: (webpackConfig) => {
      return webpackConfig;
    }
  }
};