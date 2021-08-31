const sql = require("../../db/connection/sql");

const generateCustomerModel = () => ({
  queries: {
    // Get All Customers which are Registered
    findAllCustomers: async () => {
      try {
        sql.query("SELECT * FROM customers", (err, res) => {
          if (err) {
            console.log("error: ", err);
            return err;
          }

          console.log("customers: ", res);
          return res;
        });
      } catch (error) {
        return {
          msg: "Unauthrorized",
        };
      }
    },
  },
  mutations: {
    // Create a new Customer
    addCustomer: async (newCustomer) => {
      try {
        sql.query("INSERT INTO customers SET ?", newCustomer, (err, res) => {
          if (err) {
            console.log("error: ", err);
            return err;
          }

          console.log("created customer success ");
          return res;
        });
      } catch (error) {
        console.log("Unauthorized");
        throw new Error(error);
      }
    },

    // Delete an Existing Customer
    deleteCustomer: (id) => {
      try {
        sql.query("DELETE FROM customers WHERE id = ?", id, (err, res) => {
          if (err) {
            console.log("error: ", err);
            return err;
          }

          if (res.affectedRows == 0) {
            // not found Customer with the id
            return { msg: "No user found" };
          }

          console.log("deleted customer with id: ", id);
          return res;
        });
      } catch (error) {
        console.log("Unauthorized");
        throw new Error(error);
      }
    },

    // Find an existing Customer
    findCustomer: (id) => {
      try {
        sql.query(`SELECT * FROM customers WHERE id = ${id}`, (err, res) => {
          if (err) {
            console.log("error: ", err);
            return err;
          }

          if (res.length) {
            console.log("found customer: ", res[0]);
            return res[0];
          }

          // Not found Customer with the id
          return { msg: "User not found" };
        });
      } catch (error) {
        console.log("Unauthorized");
        throw new Error(error);
      }
    },
  },
});

module.exports = generateCustomerModel;
