import express from "express";
import {
  getFlapBarrierConfig,
  updateFlapBarrierConfig,
} from "../controllers/flapBarrierConfigController.js";
import protect from "../middlewares/authMiddleware.js";
import { validate } from "../middlewares/validateMiddleware.js";
import { flapBarrierConfigSchema } from "../validations/flapBarrierConfigSchema.js";

const router = express.Router();

router.get("/", getFlapBarrierConfig);
router.put("/", protect, validate(flapBarrierConfigSchema), updateFlapBarrierConfig);

export default router;
