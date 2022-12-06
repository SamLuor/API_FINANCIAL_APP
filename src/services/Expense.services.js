import Expense from "../models/expense.model.js";

export const expenseCreateService = (expense) => Expense.create(expense);

export const expensiveServiceAllById = (userId) =>
  Expense.find({ userId: userId });

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
