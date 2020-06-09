/**
 * Routing refers to determining how an application responds
 * to a client request for a specific endpoint, which is a URI
 *  (or path) and a specific HTTP request method (GET, POST, PUT,
 * PATCH,DELETE)
 */

import * as util from 'util' // has no default export
import { inspect } from 'util' // or directly

 // safely handles circular references
JSON.safeStringify = (obj, indent = 2) => {
    let cache = [];
    const retVal = JSON.stringify(
      obj,
      (key, value) =>
        typeof value === "object" && value !== null
          ? cache.includes(value)
            ? undefined // Duplicate reference found, discard key
            : cache.push(value) && value // Store value in our collection
          : value,
      indent
    );
    cache = null;
    return retVal;
};

const routes = (app) => {
  app.route("/customers")
    /*****GETALL****/
    // curl -i -H "Accept: application/json" -H "Content-Type:application/json" -X GET "http://localhost:4000/customers"
    .get(
      //middleware
      (req, res, next) => {              
        console.log("Requested from: " /* + JSON.safeStringify(req)*/ + req.originalUrl);
        console.log("Requested type: " /* + JSON.safeStringify(req)*/ + req.method);
        //console.log("Requested:" + util.inspect(req));
        next()
      },
      (req, res, next) => {
        res.send("GET request for /customers successful!\n");
      }
    )
    /******CREATE********/
    // curl -i -H "Accept: application/json" -H "Content-Type:application/json" -X POST --data '{"id":2024,"email":"jhami6dddff54lton0@a.gov","first_name":"Joshuaaa","last_name":"Hamilton","ip":"135.75.95.238","latitude":-27.634171,"longitude":-52.273891,"created_at":"2015-01-21 03:20:11","updated_at":null}' "http://localhost:4000/customers"
    .post((req, res) => {
        console.log("Requested:" + JSON.safeStringify(req));
      res.send("POST request for [/customers] successful!\n");
    })
    /******UPDATE*********/
    // curl -i -H "Accept: application/json" -H "Content-Type:application/json" -X PUT --data '{"id":2024,"email":"jhami6dddff54lton0@a.gov","first_name":"Joshuaaa","last_name":"Hamiltosssssn","ip":"135.75.95.238","latitude":-27.634171,"longitude":-52.273891,"created_at":"2015-01-21 03:20:11","updated_at":null}' "http://localhost:4000/customers"
    .put((req, res) => {
        console.log("Requested:" + JSON.safeStringify(req));
      res.send("PUT request for [/customers] successful!\n");
    });

    app.route('/customers/:custID')
    /*****GETONEBYID******/
    // curl -i -H "Accept: application/json" -H "Content-Type:application/json" -X GET "http://localhost:4000/customers/68"
    .get((req, res) =>{
        console.log("Requested:" + JSON.safeStringify(req));
        res.send("GET request for [/customers/:custID] successful!\n");
    })
    /*******DELETE***********/
    // curl -i -H "Accept: application/json" -H "Content-Type:application/json" -X DELETE "http://localhost:4000/customers/68"
    .delete((req, res) =>{
      console.log("Requested:" + JSON.safeStringify(req));
      res.send("DELETE request for [/customers/:custID] successful!\n");
    });
};

// https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express/basic-routing-endpoints?autoplay=true&u=42879268

export default routes;
