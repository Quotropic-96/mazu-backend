import dotenv from "dotenv";
dotenv.config();
import "./db/index";
import express from "express";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import createError from "http-errors";
import cors from 'cors';

import whalesRouter from "./routes/whales";
import mapsRouter from "./routes/maps";

const app = express();

// cookies and loggers
app.use(cors({
  origin: process.env.ORIGIN
}));
app.set('trust proxy', 1);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/whales", whalesRouter);
app.use("/api/v1/maps", mapsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});


// error handler
app.use((err, req, res, next) => {

  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};
  if (err.status === 404) {
    res.status(err.status || 404).json({ status: err.status, message: err.message });
  } else {
    res.status(err.status || 500).json({ status: err.status, message: err.message });
  }
});

export default app;
