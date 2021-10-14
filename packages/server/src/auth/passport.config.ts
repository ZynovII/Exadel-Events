import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { PassportStatic } from 'passport';

import userService from '../users/user.service';

const secret = process.env.JWT_SECRET_OR_KEY || 'secret';
const options = {
  jwtFromRequest: ExtractJwt.fromHeader('x-access-token'),
  secretOrKey: secret,
};

const passportConfig = (passport: PassportStatic): void => {
  passport.use(
    new JwtStrategy(options, (jwt_payload, done) => {
      console.log('jwt payload', jwt_payload);
      console.log('jwt secret', secret);
      userService
        .getUserById(jwt_payload._id)
        .then((user) => {
          if (user) {
            return done(null, user);
          } else {
            return done(null, false);
          }
        })
        .catch((err) => {
          if (err) {
            return done(err, false);
          }
        });
    }),
  );
};

export default passportConfig;
