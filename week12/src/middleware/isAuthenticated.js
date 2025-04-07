const jwt = require("jsonwebtoken");

const { UnauthorizedError } = require("./errors");

const isAuthenticated = (req, res, next) => {
  const rawToken = req.headers.authorization;
  if (!rawToken) throw UnauthorizedError("Unauthorized");
  const token = rawToken.replace("Bearer ", "");

  const user = TokenService.verify(token);
  req.user = user;
  next();
};

module.exports = isAuthenticated;
