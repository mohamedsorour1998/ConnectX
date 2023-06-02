const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");

const authRoutes = require("./routes/auth");
const postRoutes = require("./routes/post");
const userRoutes = require("./routes/user");

// Load environment variables
dotenv.config();

// Connect to MongoDB
mongoose
  .connect(
    `mongodb+srv://mohamedsorour:${process.env.DBpass}@cluster0.qwq0cbi.mongodb.net/?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      // useCreateIndex: true,
    }
  )
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB", err));
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
