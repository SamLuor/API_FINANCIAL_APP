import {
  revenueServiceCreate,
  revenueServiceFindByUser,
  revenueServiceDelete,
  revenueServiceFindIdUpdate,
} from "../services/Revenue.services.js";

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
    const revenue = req.body;
    const userId = req.userId;

    revenue.userId = userId;
    revenue.createdAt = new Date();

    for (const element of fields) {
      if (!revenue[element.nameVar]) {
        return res
          .status(400)
          .send({ message: `Preencha o campo ${element.label}` });
      }
    }

    const revenueCreated = await revenueServiceCreate(revenue);

    if (!revenueCreated) {
      return res.status(400).send({ message: "Revenue not created" });
    }

    return res.send({ message: "Revenue Created Sucessfully" });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const findAllByUserId = async (req, res) => {
  const userId = req.userId;

  const revenues = await revenueServiceFindByUser(userId);

  if (revenues.length < 1) {
    return res.status(400).send({ message: "Not found revenues" });
  }

  return res.send(revenues);
};

const update = async (req, res) => {
  try {
    const { id } = req.params;
    const revenueUpdate = req.body;
    const userId = req.userId;

    if (!id) {
      return res.status(400).send({ message: "Not found id" });
    }

    const validityFilds = fields.some((item) => revenueUpdate[item.nameVar]);

    if (!validityFilds) {
      return res.status(400).send({ message: "Send any field" });
    }

    const revenueUpdated = await revenueServiceFindIdUpdate(
      id,
      userId,
      revenueUpdate
    );

    if (!revenueUpdated.value) {
      return res.status(400).send({ message: "Not found revenue" });
    }

    return res.send({ message: "Revenue updated sucessfully" });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

const deleteRevenue = async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.userId;

    if (!id) {
      return res.status(400).send({ message: "Not found revenue" });
    }

    const revenueDeleted = await revenueServiceDelete(id, userId);

    if (!revenueDeleted) {
      return res.status(400).send({ messge: "Revenue not found" });
    }

    return res.send({ message: "Revenue sucessfully deleted" });
  } catch (err) {
    return res.status(400).send({ message: err.message });
  }
};

export default { create, findAllByUserId, deleteRevenue, update };
