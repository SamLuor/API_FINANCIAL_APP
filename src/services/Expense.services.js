import Expense from "../models/expense.model.js";

export const expenseCreateService = (expense) => Expense.create(expense);

export const expensiveServiceAllById = (userId) =>
  Expense.find({ userId: userId });

export const findAllExpensive = (limit, offset, userId) =>
  Expense.find({ userId: userId }).sort({ _id: -1 }).skip(offset).limit(limit);

export const count = (userId) => Expense.find({ userId: userId }).count();

export const expenseServiceFindIdUpdate = (id, userId, body) =>
  Expense.findOneAndUpdate(
    { _id: id, userId: { $in: [userId] } },
    {
      ...body,
    },
    { rawResult: true }
  );

export const expenseServiceDelete = (id, userId) =>
  Expense.findOneAndRemove({ _id: id, userId: { $in: [userId] } });
