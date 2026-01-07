export default {
  title: 'RuanhoR Blogs',
  description: '博客',
  themeConfig: {
    search: {
      provider: 'local',
      options: {
        maxSuggestions: 10,
      },
    },
    nav: [{
        text: '首页',
        link: '/'
      },
      {
        text: '关于我',
        link: '/about/'
      },
      {
        text: '博客',
        link: '/blogs/'
      }
    ]
  }
}