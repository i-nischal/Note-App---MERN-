import ratelimit from "../config/upstash.js";

const rateLimiter = async (req, res, next) => {
  try {
    const { success } = await ratelimit.limit("my-limit-key");
    if (!success)
      return res
        .status(409)
        .json({ message: "Too many requests , try again later" });

    next();
  } catch (error) {
    console.error("Rate Limit Error", error.message);
    next(error);
  }
};

export default rateLimiter;
