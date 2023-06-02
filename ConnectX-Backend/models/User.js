const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 3,
    maxlength: 30,
  },
  password: {
    type: String,
    required: true,
    minlength: 8,
    maxlength: 20,
  },
  firstName: {
    type: String,
    minlength: 2,
    maxlength: 40,
  },
  lastName: {
    type: String,
    minlength: 2,
    maxlength: 40,
  },
  email: {
    type: String,
    unique: true,
    validate: {
      validator: function (v) {
        return /^[^@]+@\w+(\.\w+)+\w$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email format`,
    },
  },
  profileImage: {
    type: String,
  },
  bio: {
    type: String,
    minlength: 3,
    maxlength: 300,
  },
});

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    return next();
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(this.password, salt);

  this.password = hashedPassword;
  next();
});

userSchema.methods.comparePassword = function (candidatePassword) {
  return bcrypt.compare(candidatePassword, this.password);
};

const User = mongoose.model("User", userSchema);

module.exports = User;
