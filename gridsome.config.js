// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

// Google analytics is enabled only if this OR environment variable by the same name is set
const GOOGLE_ANALYTICS_ID = undefined

const config = require('./config.json')

// Configure plugins here
let plugins = [
  {
    // Create posts from markdown files
    use: '@gridsome/source-filesystem',
    options: {
      typeName: 'Post',
      path: 'content/blog/**/*.md',
      refs: {
        // Creates a GraphQL collection from 'tags' in front-matter and adds a reference.
        tags: {
          typeName: 'Tag',
          create: true
        }
      }
    }
  },
  {
    use: 'gridsome-plugin-tailwindcss',
    options: {
      tailwindConfig: './tailwind.config.js'
      /* These are the default options. You don't need to set any options to get going.
        purgeConfig: {},
        presetEnvConfig: {},
        shouldPurge: true,
        shouldImport: true,
        shouldTimeTravel: true
      */
    }
  }
]

if (GOOGLE_ANALYTICS_ID || process.env.GOOGLE_ANALYTICS_ID) {
  plugins.push({
    use: '@gridsome/plugin-google-analytics',
    options: {
      id: GOOGLE_ANALYTICS_ID || process.env.GOOGLE_ANALYTICS_ID
    }
  })
}

module.exports = {
  siteName: config.siteName,
  siteDescription: config.siteDescription,
  siteUrl: config.siteUrl,
  titleTemplate: '%s',
  icon: './src/assets/img/favicon.png',
  outputDir: 'build',
  templates: {
    Post: '/:title',
    Tag: '/tag/:id'
  },
  plugins,
  transformers: {
    //Add markdown support to all file-system sources
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        'gridsome-plugin-remark-prismjs-all',
        [
          'gridsome-plugin-remark-container',
          {
            customTypes: {
              custom: {
                emoji: '💻',
                svg:
                  '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M15 2H1c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h5.34c-.25.61-.86 1.39-2.34 2h8c-1.48-.61-2.09-1.39-2.34-2H15c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm0 9H1V3h14v8z"></path></svg>'
              }
            }
          }
        ]
      ]
    }
  }
}
// All configuration options: https://gridsome.org/docs/config
