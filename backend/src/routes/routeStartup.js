import productRoutes from "./productRoutes.js";
import formRoutes from "./formRoutes.js";
import blogRoutes from "./blogRoutes.js";
import authRoutes from "./authRoutes.js";
import categoryRoutes from "./categoryRoutes.js";
import flapBarrierConfigRoutes from "./flapBarrierConfigRoutes.js";

const routeStartup = (app) => {
  // product routes
  app.use("/api/product", productRoutes);
  // form routes
  app.use("/api/form", formRoutes);
  // blog routes
  app.use("/api/blog", blogRoutes);
  // category routes (ported from India for the shared dashboard)
  app.use("/api/category", categoryRoutes);
  // flap barrier config routes (ported from India for the shared dashboard)
  app.use("/api/flap-barrier-config", flapBarrierConfigRoutes);

  // auth
  app.use("/api/auth", authRoutes);
};

export default routeStartup;
