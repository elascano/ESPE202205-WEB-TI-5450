import Customer from "../models/customer.model";

//GET
export const getCustomer = async (req, res) => {
  try {
    const customers = await Customer.find().lean();
    res.render("costumerTable", {
      customers,
    });
  } catch (error) {
    res.status(error);
  }
};
