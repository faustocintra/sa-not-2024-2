import controller from "../controllers/users.js";
import { Router } from "express";
const router = Router();

router.get("/", controller.retrieve);
router.get("/new", controller.newUser);

export default router;
