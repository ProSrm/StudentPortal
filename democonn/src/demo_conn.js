var mysql = require("mysql");
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
let id = 0;

//cookie parser
const cookieParser = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
// app.use(helmet());

//connecton with new_schema1 database . with password .
var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "12345678",
  database: "new_schema1",
});

con.connect(function (err) {
  if (err) throw new err();
  id = id++;
  console.log("Connected!");
  // var sql =
  //   "INSERT INTO demo_login (id,email, password) VALUES (id,'sm@sm.com', 'Highway_37')";
  // con.query(sql, function (err, result) {
  //   if (err) throw err;
  //   console.log("1 record inserted");
  // });
});

//Inserting record for register page .
// var regid = 1;
app.post("/register", (req, resp) => {
  const name = req.body.name;
  const email = req.body.email;
  const password = req.body.password;
  const college = req.body.college;
  const phone = req.body.phone;
  const registerasadmin = req.body.registerasadmin;
  // var sql = "INSERT INTO demo_register()VALUES(?,?)";
  con.query(
    "INSERT INTO demo_register(name,email,password,college,phoneno,registerasadmin) VALUES(?,?,?,?,?,?)",
    [name, email, password, college, phone, registerasadmin],
    (err, result) => {
      console.log(err);
    }
  );
  // regid = regid + 1;
});

// request for login page .
app.post("/login", (req, resp) => {
  const email = req.body.email;
  const password = req.body.password;
  con.query(
    "SELECT * FROM demo_register WHERE email=? AND password=?",
    [email, password],
    (err, result) => {
      if (err) {
        resp.send({ err: err });
      }
      if (result.length > 0) {
        resp.send(result);
      } else {
        resp.send({ messsage: "wrong credentials . " });
      }
    }
  );
});

//adding youtube url to database .
app.post("/youtubeManage", (req, resp) => {
  const youtubeurl = req.body.youtubeurl;
  con.query(
    "INSERT INTO demo_youtube(url) VALUES(?)",
    [youtubeurl],
    (err, result) => {
      if (err) {
        console.log(err);
      }
    }
  );
});

//showing youtube result on demand

app.get("/youtubeLearning", (req, resp) => {
  con.query("SELECT url from demo_youtube", (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.length > 0) {
      resp.send(result);
    }
  });
});

//adding post to database
app.post("/addPosts", (req, resp) => {
  postPerson1 = req.body.postPerson;
  postHeading1 = req.body.postHeading;
  postdata1 = req.body.postdata;
  con.query("INSERT INTO demo_post(pname,pheading,pdata) VALUES(?,?,?)", [
    postPerson1,
    postHeading1,
    postdata1,
  ]);
});

//reading post from database
app.get("/seePosts", (req, res) => {
  con.query("SELECT * FROM demo_post", (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      // console.log(result);
      res.send(result);
    }
  });
});

// checks which user is logged in
app.get("/checkUser", (req, res) => {
  con.query("SELECT * FROM demo_register", (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result) {
      res.send(result);
      // console.log(result);
    }
  });
});

//server running .
app.listen(3001, (req, resp) => {
  // app.end("server is active ");
  console.log("server running on 3001");
});

//cookies code
app.get("/setcookie", (req, res) => {
  res.cookie(`Cookie token name`, `encrypted cookie string Value`);
  res.send("Cookie have been saved successfully");
});

// get the cookie incoming request
app.get("/getcookie", (req, res) => {
  //show the saved cookies
  console.log(req.cookies);
  res.send(req.cookies);
});

app.get("/deletecookie", (req, res) => {
  //show the saved cookies
  res.clearCookie();
  res.send("Cookie has been deleted successfully");
});

app.post("/navbar", (req, resp) => {
  const email = req.body.email;
  con.query(
    "SELECT * FROM demo_register WHERE email=? AND password=?",
    [email],
    (err, result) => {
      if (err) {
        resp.send({ err: err });
      }
      if (result.length > 0) {
        resp.send(result);
      } else {
        resp.send({ messsage: "something went wrong . " });
      }
    }
  );
});

// for profile page api
app.post("/profile", (req, resp) => {
  const email = req.body.email;
  con.query(
    "SELECT * FROM demo_register WHERE email=?",
    [email],
    (err, result) => {
      if (err) {
        resp.send({ err: err });
      }
      if (result.length > 0) {
        resp.send(result);
      } else {
        resp.send({ messsage: "something went wrong . " });
      }
    }
  );
});
