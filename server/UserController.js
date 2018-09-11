const fetch = require("node-fetch");
const User = require("./UserModel");


const UserController = {

  
  checkDB(req, res, next) {
    User.findOne({ name: res.locals.username }, (err, response) => {
      if (response) {
        res.send(response);
      } else {
        next();
      }
    });
  },


  addUser(req, res) {
    const aUser = new User({
      name: res.locals.username,
      image: res.locals.image
    });

    aUser.save((err, aUser) => {
      if (err) {
        res.status(404).send("user not found");
      } else {
        res.status(200).send(aUser);
      }
    });
  },


  getUser(req, res) {
    User.findOne({ name: res.locals.name }, (err, user) => {
      if (err) {
        res.status(404).send(err);
      } else {
        res.status(200).send(user);
      }
    });
  },


  authenticateUser(req, res) {
    const authUrl = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${authInfo.CLIENT_ID}`;
    res.redirect(authUrl);
  },


  handleAthenticatedUser(req, res, next) {
    const code = req.query.code;
    const tokenUrl = `https://github.com/login/oauth/access_token?client_id=${
      authInfo.CLIENT_ID
    }&client_secret=${authInfo.CLIENT_SECRET}&code=${code}`;
    fetch(tokenUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json"
      }
    })
      .then(data => {
        return data.json();
      })
      .then(json => {
        res.locals.token = json.access_token;
        next();
      })
      .catch(err => {
        console.log({ err });
        res.end();
      });
  },


  getAuthInfo(req, res, next) {
    const token = res.locals.token;
    const authUrl = `https://api.github.com/user?access_token=${token}`;
    fetch(authUrl)
      .then(resp => {
        return resp.json();
      })
      .then(json => {
        // res.locals.username = json.login;
        // res.locals.image = json.avatar_url;

        next();
      })
      .catch(err => {
        console.log({ err });
        res.end();
      });
  }

};

module.exports = UserController;
