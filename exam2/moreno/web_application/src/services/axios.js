import axios from "axios";
const BASE_URI = "http://localhost:3017/customers";

export async function getCustomers() {
  try {
    const customers = await axios.get(BASE_URI);
    return customers.data;
  } catch (error) {
    console.log(error);
  }
}
