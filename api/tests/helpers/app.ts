import express from "express";
import cookieParser from "cookie-parser";
import Router from "../../src/routers/router";
import { errorMiddleware } from "../../src/middlewares/error.middleware";

export function createApp() {
  const app = express();
  app.use(express.json());
  app.use(cookieParser());
  app.use("/api", Router);
  app.use(errorMiddleware);
  return app;
}
