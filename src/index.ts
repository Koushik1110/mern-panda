import express, { Request, Response } from "express";
import cors from "cors";
import mongoose from "mongoose";
import "dotenv/config";

mongoose
  .connect(process.env.MONGODB_URI as string)
  .then(() => console.log("Db connected!😁"));

const app = express();

app.use(express.json());
app.use(cors());

app.get("/test", async (req: Request, res: Response) => {
  res.status(200).json({ message: "Welcome! to our server" });
});

app.listen(8080, () => {
  console.log("Server is running on port 8080");
});
