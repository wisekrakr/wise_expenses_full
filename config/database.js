const mongoose = require("mongoose");

const connectDatabase = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
      useFindAndModify: false
    });

    console.log(
      `MongoDB Connected... ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (err) {
    console.error(`Error: ${err.message}`.red);
    // Exit process with failure
    process.exit(1);
  }
};

module.exports = connectDatabase;
