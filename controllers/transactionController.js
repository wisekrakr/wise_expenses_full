const Transaction = require("../models/Transaction");

// @route GET api/transactions
// @desc  GET All transactions
// @access Public
exports.getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find().sort({ date: -1 });

    return res
      .status(200)
      .json({ success: true, count: transactions.length, data: transactions });
  } catch (err) {
    return res.status(500).json({
      succes: false,
      error: `Server error: ${err.message}`
    });
  }
};

// @route POST api/transactions
// @desc  Add a transaction
// @access Public
exports.addTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      succes: true,
      data: transaction
    });
  } catch (err) {
    if (err.name === "ValidationError") {
      const messages = Object.values(err.errors).map(val => val.message);
      return res.status(400).json({
        succes: false,
        error: messages
      });
    } else {
      return res.status(500).json({
        succes: false,
        error: `Server error: ${err.message}`
      });
    }
  }
};

// @route DELETE api/transactions/:id
// @desc  Delete a transaction
// @access Public
exports.deleteTransaction = async (req, res, next) => {
  try {
    const transaction = await Transaction.findById(req.params.id);

    if (!transaction) {
      return res.status(404).json({
        succes: false,
        error: "No transaction found"
      });
    }

    await transaction.remove();

    return res.status(200).json({
      succes: true,
      data: {}
    });
  } catch (error) {
    return res.status(500).json({
      succes: false,
      error: `Server error: ${err.message}`
    });
  }
};
