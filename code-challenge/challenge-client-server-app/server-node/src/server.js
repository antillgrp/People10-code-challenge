// https://www.linkedin.com/learning/building-restful-apis-with-node-js-and-express/

import express from "express";
import routes from "./routes/appRoutes";
import bodyParser from "body-parser";

const app = express();
const PORT = 4000;

//bodyParser setup
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());



const mysqlConn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password:"password",
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
  }

  mysqlConn.end();
});

routes(app);

// curl -i -H "Accept: application/json" -H "Content-Type:application/json" -X GET "http://localhost:4000/"
app.get("/", (req, res) => {
  res.send(`Node and express server running on port: ${PORT}\n`);
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));
