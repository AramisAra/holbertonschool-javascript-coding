#!/usr/bin/node
const request = require('request');
const argv = process.argv;
const url = 'https://swapi-api.hbtn.io/api/films/' + argv[2] + '/';

request(url, function (error, response, body) {
  if (error === null) {
    console.log(JSON.parse(body).title);
  } else {
    console.log(error);
  }
}); // Add closing parenthesis here
