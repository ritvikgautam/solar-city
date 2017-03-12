# Solar Online Sales

**Technical Track:** Back-end

## About the Service

Web service for users to express interest in Solar Panels. 

This web service will allow us to keep a record of all users who have expressed an interest in Solar Panels and make this information available internally in an easy to use format. 

## Try it! 

Hosted at: [Heroku](https://solar-city.herokuapp.com/)

API Docs/Try API at: [API](http://docs.solarcity.apiary.io/)

Note: At this point, the application just supports REST API calls and does not have a front end.

## Tech Stack

NodeJS, ExpressJS, MySQL, Sequelize, Mocha, Grunt, Supertest, Heroku

Experience Level: 3.5/5

Note: There is no boilerplate code used. 

## Additional Notes

- Due to the nature of the use case, the application does not have unit tests currently, but only have integration tests. Since the use cases pretty much involves dealing with the database, an integration test makes sense.
 
- There is an additional end point `/interestCount` which returns a count of people who have expressed an interest in Solar Panels. This can particularly be helpful to encourage more users to express their interest. For example, `Join 35,823 other people in support of clean energy future.`

## Local Installation

- `npm install`
- Update database credentials at `/config/dbConfig.json`
- To start server: `npm start`
- To start test suite: `grunt test`
