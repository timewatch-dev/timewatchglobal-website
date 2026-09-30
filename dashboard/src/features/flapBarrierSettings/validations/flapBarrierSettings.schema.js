import * as Yup from "yup";

export const flapBarrierSettingsSchema = Yup.object({
  wideLaneMinWidth: Yup.number()
    .typeError("Minimum width must be a number")
    .positive("Minimum width must be greater than 0")
    .required("Minimum width is required"),
  wideLaneMaxWidth: Yup.number()
    .typeError("Maximum width must be a number")
    .positive("Maximum width must be greater than 0")
    .moreThan(Yup.ref("wideLaneMinWidth"), "Maximum width must be greater than minimum width")
    .required("Maximum width is required"),
});
