export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '615c90b23b42f31f0b14ca71',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-hfx6z5n9',
                  apiId: '25df83f0-b3d3-4836-80b8-79bc1153c67d'
                },
                {
                  buildHookId: '615c90b2e9657d1f98264eb0',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-wr3ahccd',
                  apiId: '73bbbd6f-5cd1-431e-954a-961a1b389a45'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/viskogurl/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-wr3ahccd.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
