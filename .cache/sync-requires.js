const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/fcharih/my-website/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/Users/fcharih/my-website/src/pages/404.js"))),
  "component---src-pages-blog-js": hot(preferDefault(require("/Users/fcharih/my-website/src/pages/blog.js"))),
  "component---src-pages-cv-js": hot(preferDefault(require("/Users/fcharih/my-website/src/pages/cv.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/Users/fcharih/my-website/src/pages/index.js"))),
  "component---src-pages-music-js": hot(preferDefault(require("/Users/fcharih/my-website/src/pages/music.js"))),
  "component---src-pages-research-js": hot(preferDefault(require("/Users/fcharih/my-website/src/pages/research.js")))
}

