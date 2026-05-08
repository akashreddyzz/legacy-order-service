function legacyApiV1() {
    console.log("Using deprecated API v1 service");
}

function processLegacyOrders() {
    legacyApiV1();
    return "/api/v1/orders";
}

module.exports = {
    processLegacyOrders
};
