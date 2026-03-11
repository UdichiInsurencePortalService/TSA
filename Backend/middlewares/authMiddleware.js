const { verifyJWT } = require("../Token/tokens");
const usersModel = require("../Model/usersModel");

const COOKIE_NAME = process.env.COOKIE_NAME || "ta_token";

async function requireAuth(req, res, next) {
  try {

    const token = req.cookies[COOKIE_NAME];

    if (!token) {
      return res.status(401).json({ error: "No token provided" });
    }

    const decoded = verifyJWT(token);

    const user = await usersModel.findById(decoded.sub);

    if (!user) {
      return res.status(401).json({ error: "Invalid token" });
    }

    req.user = user;

    next();

  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
}

module.exports = requireAuth;