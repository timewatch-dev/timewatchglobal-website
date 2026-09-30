import mongoose from "mongoose";

const flapBarrierConfigSchema = new mongoose.Schema(
  {
    wideLaneMinWidth: { type: Number, required: true, default: 600, min: 1 },
    wideLaneMaxWidth: { type: Number, required: true, default: 1000, min: 1 },
  },
  { timestamps: true }
);

const FlapBarrierConfigModel = mongoose.model(
  "FlapBarrierConfig",
  flapBarrierConfigSchema,
  "flapBarrierConfig"
);
export default FlapBarrierConfigModel;
