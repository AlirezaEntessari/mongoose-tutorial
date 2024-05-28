const mongoose = require("mongoose");
const User = require("./User");

// Connect to MongoDB
mongoose
  .connect("mongodb://127.0.0.1:27017/testdb", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000, // Adjust the timeout as needed
  })
  .then(() => {
    console.log("Connected to MongoDB");
    run();
  })
  .catch((e) => {
    console.error("Connection error", e);
  });

async function run() {
  try {
    // const user = await User.create({
    //   name: "Kyle",
    //   age: 27,
    //   email: "TEST@test.com",
    //   hobbies: ["Weight Lifting", "Bowling"],
    //   address: {
    //     street: "Main St",
    //   },
    // });
    // user.createdAt = 5
    // await user.save()
    // console.log(user);

    // const user = await User.exists({ name: "Kyle" })
    // console.log(user)

    // const user = await User.deleteOne({ name: "Kyle" })
    // console.log(user)

    // const user = await User.where("name").equals("Kyle")
    // const user = await User.where("age")
    //   .gt(12)
    //   .where("name")
    //   .equals("Kyle")
    //   .populate("bestFriend")
    //   .limit(1)

    // const user = await User.findOne({ name: "Kyle" })

    // const user = await User.findByName("Kyle");

    // const user = await User.find().byName("Kyle");

    const user = await User.findOne({ name: "Kyle", email: "test@test.com" })
    console.log(user);
    await user.save()
    console.log(user)
    // console.log(user.namedEmail);
    user.sayHi()
  } catch (e) {
    console.error(e.message);
  }
}
