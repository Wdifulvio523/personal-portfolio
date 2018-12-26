// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/lambda_school_loaner_46/LambdaSchool/personal-portfolio/.cache/layouts/index.js"))
}

exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/lambda_school_loaner_46/LambdaSchool/personal-portfolio/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/lambda_school_loaner_46/LambdaSchool/personal-portfolio/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/lambda_school_loaner_46/LambdaSchool/personal-portfolio/src/pages/index.js"))
}

exports.json = {
  "layout-index.json": require("/Users/lambda_school_loaner_46/LambdaSchool/personal-portfolio/.cache/json/layout-index.json"),
  "dev-404-page.json": require("/Users/lambda_school_loaner_46/LambdaSchool/personal-portfolio/.cache/json/dev-404-page.json"),
  "404.json": require("/Users/lambda_school_loaner_46/LambdaSchool/personal-portfolio/.cache/json/404.json"),
  "index.json": require("/Users/lambda_school_loaner_46/LambdaSchool/personal-portfolio/.cache/json/index.json"),
  "404-html.json": require("/Users/lambda_school_loaner_46/LambdaSchool/personal-portfolio/.cache/json/404-html.json")
}