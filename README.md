# boilerplate-nuxt

> Boilerplate for static && Wordpress website

Use Nust for static pages, webpack for wordpress assets

## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm start

# generate static project
$ npm run generate

# Wordpress with watch
$ npm run wp:dev

#generate minified files
$ npm run wp:build
```

## Directories
| Directory name | Usage |
| assets | Un-compiled assets such as Post css or Sass files, images, or fonts. |
| components | Vue.js Components, import these from pages etc |
| dist | Static files (generate this with 'npm run generate') |
| layouts | basic layouts for html |
| pages | html basic files |
| static | Contains files that likely won't be changed (i.e. the favicon) |

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
