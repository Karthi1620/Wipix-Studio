import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    contact: { type: String, required: true },
    email: { type: String, required: true },
    service: { type: String, required: true },
    description: { type: String, required: true },
  },
  { timestamps: true } // Automatically adds createdAt & updatedAt fields
);

const Order = mongoose.models.Order || mongoose.model("Order", OrderSchema);

export default Order;

