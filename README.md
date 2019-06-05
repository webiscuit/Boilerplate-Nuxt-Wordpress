# boilerplate-nuxt

> Boilerplate for static && Wordpress website

Use **Nust** for static pages, **webpack** for wordpress assets
Use **Local by Flywheel** for local wordpress development

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
| ------ | ------ |
| src/assets | Un-compiled assets such as Post css or Sass files, images, or fonts. |
| src/components | Vue.js Components, import these from pages etc |
| src/layouts | basic layouts for html |
| src/pages | html basic files |
| src/static | Contains files that likely won't be changed (i.e. the favicon) |
| dist | Static files (generate this with 'npm run generate') |

For detailed explanation on how things work, checkout [Nuxt.js docs](https://nuxtjs.org).
