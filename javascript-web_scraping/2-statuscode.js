#!/usr/bin/node
const request = require('request');

const link = process.argv[2];
request.get(link);
request(url, function (error, response) {
  if (error) {
    console.log(error);
  } else {
    console.log('code:', response.statusCode);
  }
});
