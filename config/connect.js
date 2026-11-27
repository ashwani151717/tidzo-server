const dns = require("dns");
const mongoose = require("mongoose");

const connectDB = (url) => {
  // mongodb+srv needs a TXT lookup. The router DNS times out on those queries.
  if (typeof url === "string" && url.startsWith("mongodb+srv://")) {
    dns.setServers(["1.1.1.1", "8.8.8.8"]);
  }
  return mongoose.connect(url);
};

module.exports = connectDB;
