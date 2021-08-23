export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-eleventy-blog'
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
                  buildHookId: '6123b29a26dcbb0091093fea',
                  title: 'Sanity Studio',
                  name: 'sanity-contigo-test-studio',
                  apiId: '5888e4ee-ecb9-4145-bf7a-0f8f1edcb41c'
                },
                {
                  buildHookId: '6123b29aed6cb700a4aa96df',
                  title: 'Blog Website',
                  name: 'sanity-contigo-test',
                  apiId: '9db61c53-6ebd-4436-8ef7-188e35cf8749'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joelgoodman/sanity-contigo-test',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-contigo-test.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
