import Joi from "joi";

export const flapBarrierConfigSchema = Joi.object({
  wideLaneMinWidth: Joi.number().positive().required(),
  wideLaneMaxWidth: Joi.number().positive().greater(Joi.ref("wideLaneMinWidth")).required(),
});
