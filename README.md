# 18-social-network-api [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
![MongoDb] ![express]

## Description

This homework challenge for week 18 of coding bootcamp is a working api back-end for a social network. Implementing an API for the Create-Read-Update-Delete (CRUD) operations, for Users and Thoughts, it also implements a friend relationship between Users and a sub-document of Replies to Thoughts.

You will need to use an API client like Insomnia or Postman.

Uses the following node packages:

* express
* mongoose

Mongoose provides an object-relational mapping (ORM) framework for MongoDB.

## Getting started

![Tutorial][screenshot-01]

## Installation

*Note: requires that you have MongoDB server installed on the local machine.*

Download the project, install dependencies:

```sh
git clone https://github.com/chrispobrien/18-social-network-api.git
cd 18-social-network-api
npm i
```

## Configuration

In server.js line 17, change the path and port to MongoDB if you need to, and customize the collection name if you desire (default is social-network).

## Usage

Simply start the server:

```sh
npm start
```

[Walkthrough_Video]

Use an API client as follows:

<table>
<tr><th>Description</th><th>Method</th><th>url</th><th>JSON</th></tr>
<tr><td colspan="4">Users</td></tr>
<tr><td>Get all users</td><td>GET</td><td>http://localhost:3001/api/users</td><td></td></tr>
<tr><td>Create user</td><td>POST</td><td>http://localhost:3001/api/users</td><td>username, email</td></tr>
<tr><td>Find user by id</td><td>GET</td><td>http://localhost:3001/api/users/:id</td><td></td></tr>
<tr><td>Update user by id</td><td>PUT</td><td>http://localhost:3001/api/users/:id</td><td>username, email</td></tr>
<tr><td>Delete user</td><TD>DEL</td><td>http://localhost:3001/api/users/:id</td><td></td></tr>
<tr><td colspan="4">Thoughts</td></tr>
<tr><td>Get all thoughts</td><td>GET</td><td>http://localhost:3001/api/thoughts</td><td></td></tr>
<tr><td>Add new thought</td><td>POST</td><td>http://localhost:3001/api/thoughts</td><td>userId, thoughtText, username</td></tr>
<tr><td>Find thought by id</td><td>GET</td><td>http://localhost:3001/api/thoughts/:id</td><td></td></tr>
<tr><td>Update thought by id</td><td>PUT</td><td>http://localhost:3001/api/thoughts/:id</td><td>thoughtText</td></tr>
<tr><td>Delete thought by id</td><td>DEL</td><td>http://localhost:3001/api/thoughts/:id</td><td></td></tr>
<tr><td colspan="4">Friends</td></tr>
<tr><td>Add friend</td><td>POST</td><td>http://localhost:3001/api/users/:id/friends/:friendId</td><td></td></tr>
<tr><td>Remove friend</td><td>DEL</td><td>http://localhost:3001/api/users/:id/friends/:friendId</td><td></td></tr>
<tr><td colspan="4">Reactions</td></tr>
<tr><td>Add reaction</td><td>POST</td><td>http://localhost:3001/api/thoughts/:id/reactions</td><td>reactionBody, username</td></tr>
<tr><td>Delete reaction</td><td>DEL</td><td>http://localhost:3001/api/thoughts/:id/reactions/:reactionId</td><td></td></tr>
</table>

## Credits

A lot of the code is similar to the week 18 lesson, the rest is my implementation of the homework challenge.

## License

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

[mongoDB]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[express]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[License: MIT]: https://img.shields.io/badge/License-MIT-yellow.svg
[screenshot-01]: assets/images/screenshot-01.png
[Walkthrough_Video]: https://drive.google.com/file/d/1K5ouux3G9ZHYhFVqBiVGku_0wvHT423M/view?usp=sharing