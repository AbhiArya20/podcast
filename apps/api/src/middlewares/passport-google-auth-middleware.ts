import  { DoneCallback } from "passport";
import userService from "@/services/user-service";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";

class GoogleAuthProvider {
  clientSecret: string | undefined;
  clientId: string | undefined;
  callbackURL: string;
  constructor() {
    this.clientSecret = process.env.AUTH_GOOGLE_SECRET;
    this.clientId = process.env.AUTH_GOOGLE_ID;
    this.callbackURL = process.env.BASE_URL + "/auth/google/callback";
  }

  strategy = () => {
    if (!this.clientId || !this.clientSecret || !this.callbackURL) {
      throw new Error("Missing Google credentials in environment variables.");
    }
    return new GoogleStrategy(
      {
        clientID: this.clientId,
        clientSecret: this.clientSecret,
        callbackURL: this.callbackURL,
        passReqToCallback: false,
      },
      async (accessToken: string, refreshToken: string, profile , done: DoneCallback) => {
        try {
          const { sub: id, name, email, picture } = profile._json;

          let user = await userService.findUser({ email });
          if (!user) {
            user = await userService.createUser({
              googleId: id,
              name,
              avatar: picture,
              email,
            });
          }

          return done(null, user);
        } catch {
          return done(null, null);
        }
      },
    );
  };
}

export default GoogleAuthProvider;
