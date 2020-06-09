'use strict';

//https://www.codementor.io/@julieisip/learn-rest-api-using-express-js-and-mysql-db-ldflyx8g2
//https://bezkoder.com/node-js-rest-api-express-mysql/

import { createConnection } from "mysql";

const mysqlConn = createConnection({
    host: "localhost",
    user: "user",
    password:"password",
    database:"customers",
    multipleStatements: true
});

mysqlConn.connect( err => {
    if(!err)
    {
        console.log("Successfully connected to MySQL");
    }
    else 
    {
        console.log("Connection Failed");
        console.log(err);
        throw err;
    }
});

module.export = mysqlConn;