const express = require("express");
const app = express();

app.use(express.json());

// Sample Data
let orders = [
  {
    id: 1,
    customerId: 101,
    product: "Laptop",
    quantity: 1,
    status: "Pending"
  },
  {
    id: 2,
    customerId: 102,
    product: "Mobile",
    quantity: 2,
    status: "Shipped"
  }
];

// Home Route
app.get("/", (req, res) => {
  res.send("Order Tracking API is Running...");
});

// Create Order
app.post("/orders", (req, res) => {
  const { customerId, product, quantity } = req.body;

  if (!customerId || !product || !quantity) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const newOrder = {
    id: orders.length + 1,
    customerId,
    product,
    quantity,
    status: "Pending"
  };

  orders.push(newOrder);
  res.status(201).json(newOrder);
});

// Get Order by ID
app.get("/orders/:id", (req, res) => {
  const order = orders.find(o => o.id == req.params.id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  res.json(order);
});

// Update Order Status
app.put("/orders/:id/status", (req, res) => {
  const order = orders.find(o => o.id == req.params.id);

  if (!order) {
    return res.status(404).json({ message: "Order not found" });
  }

  order.status = req.body.status || order.status;
  res.json(order);
});

// Get Orders of Customer
app.get("/customers/:customerId/orders", (req, res) => {
  const customerOrders = orders.filter(
    o => o.customerId == req.params.customerId
  );

  res.json(customerOrders);
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
