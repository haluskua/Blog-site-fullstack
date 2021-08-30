const cors = require("cors");

var whitelist = ["http://localhost:5000"];

const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  origin: "http://localhost:5000",
  optionsSuccessStatus: 200, // some legacy browsers ( IE11, various SmartTVs) choke on 204
};

module.exports = cors(corsOptions);
