const URL = require("url");
const queryString = require("querystring");

function parseURL(fullUrl){
   const parsedUrl = URL.parse(fullUrl);
   const queryParam = queryString.parse(parsedUrl.query)

   return {

       Hostname  : parsedUrl.hostname,
       Pathname  : parsedUrl.pathname,
       queryParam,
   };

}

module.exports = parseURL;
