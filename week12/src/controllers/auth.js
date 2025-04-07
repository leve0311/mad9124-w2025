const tokenService = require("../services/token");

const callback = (req, res, next) => {
  try {
    const {state} = req.query;

    const {redirect_url} = state ? JSON.parse(Buffer.from(state, 'base64').toString()) : ();
    const token = tokenService.sign(req.user);
    res.redirect(`/?token=${token}`);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  callback,
};
