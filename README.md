# Solar Panel Interest Form

**Technical Track:** Back-end

## About the Service

Web service for users to express interest in Solar Panels. 

This web service will allow SolarCity to keep a record of all users who have expressed an interest in Solar Panels and make this information available internally in an easy to use format. 

## Try it! 

Hosted at: [Heroku](https://solar-city.herokuapp.com/)

API Docs/Try API at: [API](http://docs.solarcity.apiary.io/)

## Tech Stack

NodeJS, ExpressJS, JQuery, AJAX, MySQL, Sequelize, Mocha, Grunt, Supertest, Heroku

Backend Experience Level: 4/5
Frontend Experience Level: 2/5

Note: There is no boilerplate code used. 

## Additional Notes
 
- There is an additional end point `/interestCount` which returns a count of people who have expressed an interest in Solar Panels. This can particularly be helpful to encourage more users to express their interest. For example, `Join 35,823 other people in support of clean energy future.`

- Due to the nature of the use case, the application does not have unit tests currently, but only have integration tests. Since the use cases pretty much involves dealing with the database, an integration test makes sense.

## Future Work

- There are no test cases for the front end. 
- The front end is written in JQuery. Using a framework like Angular or React will make it more maintainable. 

## Local Installation

- `npm install`
- Update database credentials at `/config/dbConfig.json`
- To start server: `npm start`
- To start test suite: `grunt test`

## Similar Work

Emergency Social Network: [GitHub](https://github.com/ritvikgautam/ESN-F16-SA5) [Heroku](http://esn-f16-sa5.herokuapp.com/)