import express from "express";
import notFoundHandler from "./middleware/notFoundMiddleware.js";
import errorHandler from "./middleware/errorMiddleware.js";
import logger from "./middleware/loggerMiddleware.js";

//routers import
import userRouter from "./routes/userRouter.js";
import aboutusRouter from "./routes/aboutusRouter.js";
import aboutUsContent from "./routes/aboutusContentRouter.js";
import blogRouter from "./routes/blogRouter.js";
import packageRouter from "./routes/packageRouter.js";
import uploadRouter from "./routes/uploadRouter.js";
import newsletterRouter from "./routes/newsletterRouter.js";

//To set Cookies in the browser
import CookieParser from "cookie-parser";
import path from "path";

//Initialize express app
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(CookieParser());
app.use(logger);
app.use("/uploads", express.static(path.join(path.resolve(), "uploads")));

//routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/aboutus", aboutusRouter);
app.use("/api/v1/aboutuscontent", aboutUsContent);
app.use("/api/v1/blog", blogRouter);
app.use("/api/v1/package", packageRouter);
app.use("/api/v1/image", uploadRouter);
app.use("/api/v1/newsletter", newsletterRouter);


if (process.env.NODE_ENV === "production") {
  const __dirname = path.resolve();
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
  });
} else {
  app.get("/", (req, res) => {
    res.send("Server is up and running");
  });
}


//error handlers
app.use(notFoundHandler);
app.use(errorHandler);

export { app };
