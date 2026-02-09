import express from "express";
import passport from "passport";

const router = express.Router();

router.get("/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get("/google/callback",
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_URL + "/dashboard",
    failureRedirect: "/"
  })
);

router.get("/me", (req, res) => {
  res.json(req.user || null);
});

export default router;
