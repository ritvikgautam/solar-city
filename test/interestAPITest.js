var should = require('should');
var expect = require('expect');
var supertest = require('supertest');

var db = require('../config/db');
var User = require('../models/User');
var Interest = require('../models/Interest');

var server = supertest.agent('http://localhost:3000');

describe('Interest Test', function () {

    it('POST /interest - invalid input', function (done) {
        var query = {
            firstName: "",
            lastName: "",
            dob: "",
            address: "",
            interest: "",
            interestReason: ""
        };

        server
            .post('/interest')
            .send(query)
            .end(function (err, res) {
                res.status.should.equal(500);
                done();
            })
    });

    it('POST /interest - valid input', function (done) {
        var query = {
            firstName: "Ritvik",
            lastName: "Gautam",
            dob: "22",
            address: "Mountain View",
            interest: "1",
            interestReason: "Clean Energy"
        };

        server
            .post('/interest')
            .send(query)
            .type('form')
            .end(function (err, res) {
                res.status.should.equal(200);
                done();
            })
    });

    it('GET /interestcount', function (done) {
        server
            .get('/interestCount')
            .send()
            .end(function (err, res) {
                res.status.should.equal(200);
                done();
            })
    });

    it('GET /interest', function (done) {
        server
            .get('/interest')
            .send()
            .end(function (err, res) {
                res.status.should.equal(200);
                done();
            })
    })
});