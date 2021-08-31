const express = require("express");
const router = express.Router();
const {
  createCustomer,
  deleteCustomer,
  findAllCustomers,
  findOneCustomer,
  deleteAllCustomers,
} = require("../controllers/customer.controller");

// create
router.post("/", createCustomer);

// Retrieve all Customers
router.get("/", findAllCustomers);

// Retrieve a single Customer with customerId
router.get("/:customerId", findOneCustomer);

// Delete a Customer with customerId
router.delete("/:customerId", deleteCustomer);

// Delete a Customer
router.delete("/", deleteAllCustomers);

module.exports = router;
