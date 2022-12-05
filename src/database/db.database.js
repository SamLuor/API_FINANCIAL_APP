import mongoose from "mongoose";

const connectDatabase = () => {
  console.log("Wait connecting to the database");

  mongoose
    .connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: "FINANCIAL_APP",
    })
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

export default connectDatabase;
