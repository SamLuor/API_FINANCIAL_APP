import mongoose from "mongoose";

const expenseSchema = new mongoose.Schema({
  description: {
    type: String,
    require: true,
  },
  recurrence: {
    type: String,
    require: true,
  },
  initial_installment: {
    type: Number,
    require: false,
  },
  many_installments: {
    type: Number,
    require: false,
  },
  recurrence_type: {
    type: String,
    require: false,
  },
  value_type: {
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
  category: {
    type: String,
    require: false,
  },
  subcategory: {
    type: String,
    require: false,
  },
  account: {
    type: String,
    require: true,
  },
  situation: {
    type: String,
    require: true,
  },
  status: {
    type: String,
    require: true,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  createdAt: {
    type: Date,
    require: true,
  },
});

const Expense = mongoose.model("expense", expenseSchema);

export default Expense;
