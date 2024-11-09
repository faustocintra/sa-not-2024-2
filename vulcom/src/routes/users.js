import controller from "../controllers/users.js";
import { Router } from "express";
const router = Router();

router.get("/", controller.retrieve);
router.get("/new", controller.newUser);
router.get('/:id', controller.editUser);
router.post("/", controller.upsert);

export default router;
