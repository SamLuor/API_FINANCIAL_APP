import {
  expenseCreateService,
  expensiveServiceAllById,
  expenseServiceFindIdUpdate,
  expenseServiceDelete,
} from "../services/Expense.services.js";

const fields = [
  { nameVar: "description", label: "Descrição" },
  { nameVar: "value", label: "Valor" },
  { nameVar: "due_date", label: "Vencimento" },
  { nameVar: "recurrence", label: "Recorrência" },
  { nameVar: "value_type", label: "Tipo do valor" },
  { nameVar: "account", label: "Conta" },
  { nameVar: "situation", label: "Situação" },
];

const create = async (req, res) => {
  try {
    req.body.userId = req.userId;
    const expense = req.body;
    expense.createdAt = new Date();
    expense.status = "Aberto";

    for (const element of fields) {
      if (!expense[element.nameVar]) {
        return res
          .status(400)
          .send({ message: `Preencha o campo ${element.label}` });
      }
    }

    const expenseCreated = expenseCreateService(expense);

    if (!expenseCreated) {
      return res
        .status(400)
        .send({ message: "Não foi possivel criar a despesa" });
    }

    return res.send("Expense created!");
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const findAllById = async (req, res) => {
  try {
    const userId = req.userId;

    const expenses = await expensiveServiceAllById(userId);

    if (expenses.length < 1) {
      return res.status(400).send({ message: "Not found expenses" });
    }

    return res.send(expenses);
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const expenseUpdate = req.body;
    const userId = req.userId;

    if (!id) {
      return res.status(400).send({ message: "Not found id" });
    }

    const validityFilds = fields.some((item) => expenseUpdate[item.nameVar]);

    if (!validityFilds) {
      return res.status(400).send({ message: "Send any field" });
    }

    const expense = await expenseServiceFindIdUpdate(id, userId, expenseUpdate);

    if (!expense.value) {
      return res.status(400).send({ message: "Not found expense" });
    }

    return res.send({ message: "Expense updated sucessfully" });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const deleteById = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    if (!id) {
      return res.status(400).send({ message: "Not found id" });
    }

    const expenseDeleted = await expenseServiceDelete(id, userId);

    if (!expenseDeleted) {
      return res.status(400).send({ message: "Not found expense" });
    }

    return res.send({ message: "Expense Deleted" });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

export default { create, findAllById, update, deleteById };
