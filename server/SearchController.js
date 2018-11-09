/*
////////////////////////////////////////
// STRETCH FEATURE:                   //
//  -Implement StackOverflow error    //
//   searching                        //      
////////////////////////////////////////
*/

// const User = require("./UserModel");
// const fetch = require("node-fetch");

// const SearchController = {
//   searchStackO(req, res) {
//     const searchUrl = `https://api.stackexchange.com/2.2/search/advanced?page=1&order=desc&sort=relevance&q=syntax%20error&site=stackoverflow&filter=!4(Yr(zkO1sGUCUp1t`;
//     fetch(searchUrl, {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json; charset=utf-8",
//         Accept: "application/json"
//       }
//     })
//       .then(response => {
//         console.log({ response });
//         return response.json();
//       })
//       .then(json => {
//         console.log({ json });
//         res.send("search results");
//       })
//       .catch(err => {
//         console.log({ err });
//         res.end();
//       });
//   },
//   githubSearch(req, res) {
//     const url = 'https://api.github.com/search/issues?q="404 error"';
//     fetch(url)
//       .then(dataResp => {
//         return dataResp.json();
//       })
//       .then(json => {
//         const appdata = [];
//         json.items.map(el => {
//           if (el.html_url) {
//             appdata.push(el.html_url);
//           }
//         });
//         res.send(appdata);
//       })
//       .catch(err => {
//         console.log({ err });
//         res.send(`request failed ${err}`);
//       });
//   }
// };

// module.exports = SearchController;

// // https://api.stackexchange.com/docs/advanced-search#page=1&order=desc&sort=relevance&q=404&filter=!4(Yr(zkO1sGUCUp1t&site=stackoverflow
// // https://api.stackexchange.com/2.2/search/advanced?page=1&order=desc&sort=relevance&q=syntax%20error&site=stackoverflow&filter=!4(Yr(zkO1sGUCUp1t
