const { verify } = require("jsonwebtoken");

class MiddlewareJWT {
  checkAuth(req, res, next) {
    const privateToken = req.headers.authorization;

    if (!privateToken) {
      return res.status(401).send("Token não encontrado.");
    }
    const parts = privateToken.split(" ");
    const [scheme, token] = parts;
    /* módulo do jsonwebtoken para verificação de jwt válido. */
    verify(token, jwtSecret, (err, user) => {
      if (err) {
        console.log(token);
        console.log(err);
        return res.status(403).end();
      } else console.log("jwtMiddleware!");
      console.log(user);
      return res.send(user);
    });
  }
}

export default new MiddlewareJWT();
