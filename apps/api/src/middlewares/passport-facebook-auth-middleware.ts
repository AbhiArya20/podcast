import  { DoneCallback } from "passport";
import userService from "@/services/user-service";
import { Strategy as FacebookStrategy } from "passport-facebook";

class FacebookAuthProvider {
  clientSecret: string | undefined;
  clientId: string | undefined;
  callbackURL: string | undefined;

  constructor() {
    this.clientSecret = process.env.AUTH_FACEBOOK_SECRET;
    this.clientId = process.env.AUTH_FACEBOOK_ID;
    this.callbackURL = process.env.BASE_URL + "/oauth2/redirect/facebook";
  }

  strategy = () => {

    if (!this.clientId || !this.clientSecret || !this.callbackURL) {
      throw new Error("Missing Facebook credentials in environment variables.");
    }

    return new FacebookStrategy(
      {
        clientID: this.clientId,
        clientSecret: this.clientSecret,
        callbackURL: this.callbackURL,
        profileFields: ["id", "displayName", "picture", "email"],
      },
      async (accessToken: string, refreshToken: string, profile, done: DoneCallback) => {
        try {
          const { id, name, email, picture } = profile._json;
          let user = await userService.findUser({
            $or: [{ email }, { facebookId: id }],
          });
          if (!user) {
            user = await userService.createUser({
              facebookId: id,
              name,
              avatar: picture?.data?.url,
              email,
            });
          }
          return done(null, user);
        } catch {
          return done(null, {});
        }
      },
    );
  };
}

export default FacebookAuthProvider;
