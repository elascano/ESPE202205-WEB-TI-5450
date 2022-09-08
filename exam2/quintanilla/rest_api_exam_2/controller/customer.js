import Customer from "../model/Customer.js";

export async function getCustomers(req, res) {
  try {
    const customer = await Customer.find();
    res.json(customer);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.toString });
  }
}
