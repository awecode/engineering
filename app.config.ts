export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'Awecode',
      description: 'Conventions and best practices for developing software at Awecode.',
    },
    theme: {
      customizable: false,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'Awecode',
      showTitle: true,
      darkModeToggle: true,
      logo: {
        light: '/logo.svg',
        dark: '/logo-dark.svg',
      },
      nav: [],
      links: [{
        icon: 'iconoir:github',
        to: 'https://github.com/awecode/engineering',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
    },
    main: {
      breadCrumb: true,
      showTitle: true,
    },
    footer: {
      credits: 'Copyright © 2024',
      links: [{
        icon: 'iconoir:github',
        to: 'https://github.com/awecode/engineering',
        target: '_blank',
      }, {
        icon: 'iconoir:website',
        to: 'https://awecode.com',
        target: '_blank',
      }],
    },
    toc: {
      enable: false,
      title: 'On This Page',
    },
    search: {
      enable: false,
      inAside: false,
    },
  },
})
