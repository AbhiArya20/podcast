import tokenService from "@/services/token-service";

export default async function (req, res, next) {
  try {
    const { accessToken } = req.cookies;

    if (!accessToken) {
      throw new Error();
    }
    const userData = await tokenService.verifyAccessToken(accessToken);
    if (!userData) {
      throw new Error();
    }
    req.user = userData;
    req.id = userData._id;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token" });
  }
}
