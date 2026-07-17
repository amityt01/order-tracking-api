# Order Tracking API

## Overview
This project is a Node.js and Express.js REST API for managing customer orders in an e-commerce platform.

## Features
- Create a new order
- Get order details by ID
- Update order status
- Get all orders of a customer
- In-memory data storage
- Proper HTTP status codes
- Error handling

## Tech Stack
- Node.js
- Express.js

## Installation

1. Clone the repository
2. Install dependencies:
   npm install
3. Start the server:
   node index.js

## API Endpoints

### GET /
Returns API status.

### POST /orders
Creates a new order.

### GET /orders/:id
Returns order details.

### PUT /orders/:id/status
Updates order status.

### GET /customers/:customerId/orders
Returns all orders for a customer.

## Sample Request

POST /orders

```json
{
  "customerId": 103,
  "product": "Laptop",
  "quantity": 1,
  "status": "Pending"
}
```

## Sample Response

```json
{
  "id": 3,
  "customerId": 103,
  "product": "Laptop",
  "quantity": 1,
  "status": "Pending"
}
```

## How to Run

```bash
npm install
node index.js
```

The server starts on:

```
http://localhost:3000
```

## Author

Amit Shahu