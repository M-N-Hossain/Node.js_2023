import { Router } from "express";
const router = Router();

router.get("/api/guards", (req, res) => {
  if (req.query === "theskyisblue") {
    res.redirect("/api/tanks");
  }
  res.send({
    message:
      "You are not allowed to see the tanks, give us thr correct secret query string",
  });
});

export default router;
