import express from "express";
import cookieParser from "cookie-parser";
import compress from "compression";
import cors from "cors";
import helmet from "helmet";
import userRoutes from "./routes/user.routes.js";
import authRoutes from "./routes/auth.routes.js";
import shopRoutes from './routes/shop.routes.js'
import path from "path";

const app = express();
const CURRENT_WORKING_DIR = process.cwd();
app.use(express.static(path.join(CURRENT_WORKING_DIR, "dist/app")));

// ✅ Middleware setup (correct order)
app.use(express.json()); // Parses JSON request body
app.use(express.urlencoded({ extended: true })); // Parses form URL-encoded data
app.use(cookieParser());
app.use(compress());
app.use(helmet());
app.use(cors());


// ✅ Routes
app.use("/", userRoutes);
app.use("/", authRoutes);
app.use('/', shopRoutes);
// ✅ Error handling
app.use((err, req, res, next) => {
  if (err.name === "UnauthorizedError") {
    res.status(401).json({ error: err.name + ": " + err.message });
  } else if (err) {
    res.status(400).json({ error: err.name + ": " + err.message });
    console.log(err);
  }
});

export default app;
