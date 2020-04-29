const contentful = require('contentful/dist/contentful.browser.min.js');

const Client = contentful.createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN
})

export default Client
