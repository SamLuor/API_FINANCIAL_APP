import mongoose from "mongoose";

const RevenueSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  recurrence: {
    type: String,
    require: true,
  },
  value: {
    type: Number,
    require: true,
  },
  due_date: {
    type: Date,
    require: true,
  },
  situation: {
    type: String,
    require: true,
  },
  category: {
    type: String,
    require: true,
  },
  account: {
    type: String,
    require: true,
  },
  userId: {
    type: String,
    require: true,
  },
  createdAt: {
    type: Date,
    require: true,
  },
});

const Revenue = mongoose.model("Revenue", RevenueSchema);

export default Revenue;
