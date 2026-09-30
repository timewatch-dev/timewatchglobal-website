import express from "express";
import { createCareer, deleteCustomerById, getAllCareers, getAllCustomers, getAllPartners, homePageForm, partnerPageForm, updatedCustomer } from "../controllers/formController.js";
import { validate } from "../middlewares/validateMiddleware.js"
import { customerSchema, partnerSchema } from "../validations/customerValidation.js"

import multer from "multer";
import { landingPopupForm } from "../controllers/landingPopupController.js";
import protect from "../middlewares/authMiddleware.js";
const upload = multer({ storage: multer.memoryStorage() });

const router = express.Router();


// Public submissions stay open; listing/editing submissions (personal data) is admin-only.
router.post('/customer', validate(customerSchema), homePageForm);
router.get('/customers', protect, getAllCustomers);
router.put('/customers/:id', protect, updatedCustomer);
router.delete('/customer/delete/:id', protect, deleteCustomerById);
router.get('/partners', protect, getAllPartners);
router.post('/partner', partnerPageForm);
router.post('/career', upload.any(),  createCareer);
router.get('/career', protect, getAllCareers);
router.post("/landing-popup", landingPopupForm);

export default router;
