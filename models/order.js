import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
  name: String,
  contact: String,
  email: String,
  service: String,
  description: String,
}, { timestamps: true });

export default mongoose.models.Order || mongoose.model("Order", OrderSchema);

