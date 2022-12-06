import Revenue from "../models/Revenue.model.js";

export const revenueServiceCreate = (revenue) => Revenue.create(revenue);

export const revenueServiceFindByUser = (userId) =>
  Revenue.find({ userId: userId });

export const revenueServiceDelete = (id, userId) =>
  Revenue.findOneAndRemove({ _id: id, userId: { $in: [userId] } });

export const revenueServiceFindIdUpdate = (id, userId, revenueUpdate) =>
  Revenue.findOneAndUpdate(
    { _id: id, userId: { $in: userId } },
    { ...revenueUpdate },
    { rawResult: true }
  );
