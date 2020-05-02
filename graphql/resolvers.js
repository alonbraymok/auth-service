const User = require("../models/user");
const bcrypt = require("bcryptjs");

module.exports = {
  createUser: async function (args, req) {
    const { name, email, password } = args.userInput;
    const existingUser = User.findOne({ email });
    if (!existingUser) {
      throw new Error("User already exists");
    }

    const hashPW = await bcrypt.hash(password, 12);

    const newUser = new User({
      name,
      email,
      password: hashPW,
    });

    const createdUser = await newUser.save();
    return { ...createdUser._doc, id: createdUser._id.toString() };
  },
};
