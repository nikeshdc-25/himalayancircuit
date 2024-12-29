import express from "express";
import notFoundHandler from "./middleware/notFoundMiddleware.js";
import errorHandler from "./middleware/errorMiddleware.js";
import logger from "./middleware/loggerMiddleware.js";

//routers import
import userRouter from "./routes/userRouter.js";

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
