import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';
import { PassportStatic } from 'passport';

import userService from '../users/user.service';

const secret = process.env.JWT_SECRET_OR_KEY || 'secret';
const options = {
  jwtFromRequest: ExtractJwt.fromHeader('x-access-token'),
  secretOrKey: secret,
  algorithms: ['RS256'],
};

const passportConfig = (passport: PassportStatic): void => {
  passport.use(
    new JwtStrategy(options, async (jwt_payload, done) => {
      console.log(jwt_payload);
      try {
        const user = await userService.getUserById(jwt_payload.sub);

        if (user) {
          return done(null, user);
        } else {
          return done(null, false);
        }
      } catch (err) {
        if (err) {
          return done(err, false);
        }
      }
    }),
  );
};

export default passportConfig;
