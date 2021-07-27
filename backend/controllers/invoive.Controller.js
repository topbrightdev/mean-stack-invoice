const Invoice = require("../models/invoice.model");

function invoiceController() {
  return {
    findAll(req, res, next) {
      res.json({
        msg: "Hello from controller",
        status: 200,
      });
    },

    async createInvoice(req, res, next) {
      const { item, qty, date, due, rate, tax } = req.body;

      try {
        if (!item) {
          return res.status(400).json({ err: " Item is required" });
        }

        if (!qty) {
          return res.status(400).json({ err: "Qty is required" });
        }

        if (!date) {
          return res.status(400).json({ err: "Date is required" });
        }

        if (!due) {
          return res.status(400).json({ err: " Due-date is required" });
        }


       let invoice = new Invoice({
            item,
            qty,
            date,
            due,
            rate,
            tax

        })

      await invoice.save();
      res.json(invoice);

      } catch (err) {
        console.log(err.message);
        res.status(500).send("Server Error");
      }
    },
  };
}

module.exports = invoiceController;
