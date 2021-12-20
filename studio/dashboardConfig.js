export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
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
                  buildHookId: '61c0be60d832f924ac0e85f0',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-zhz67jsa',
                  apiId: 'ea0cb493-94a7-4a3c-8ddb-21c79ef75092'
                },
                {
                  buildHookId: '61c0be60abd4d52658d7110a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-eiqd9cdm',
                  apiId: 'bcf7b613-cff1-45b4-8cc5-19fe2f386c35'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/DamonJJ/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-eiqd9cdm.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
