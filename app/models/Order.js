import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: String,
  email: String,
  description: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);

