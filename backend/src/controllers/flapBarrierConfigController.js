import asyncHandler from "express-async-handler";
import FlapBarrierConfigModel from "../models/FlapBarrierConfigModel.js";

const DEFAULT_CONFIG = { wideLaneMinWidth: 600, wideLaneMaxWidth: 1000 };

export const getFlapBarrierConfig = asyncHandler(async (req, res) => {
  const config = await FlapBarrierConfigModel.findOne().lean();
  res.json({ success: true, config: config || DEFAULT_CONFIG });
});

export const updateFlapBarrierConfig = asyncHandler(async (req, res) => {
  const { wideLaneMinWidth, wideLaneMaxWidth } = req.body;

  const config = await FlapBarrierConfigModel.findOneAndUpdate(
    {},
    { wideLaneMinWidth, wideLaneMaxWidth },
    { new: true, upsert: true, runValidators: true }
  );

  res.json({ success: true, config });
});
