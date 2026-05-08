const axios = require("axios");

async function fetchOrders() {
    return axios.get("https://internal.company.com/api/v1/orders");
}

async function fetchCustomer(customerId) {
    return axios.get(`https://internal.company.com/api/v1/customers/${customerId}`);
}

module.exports = {
    fetchOrders,
    fetchCustomer
};
