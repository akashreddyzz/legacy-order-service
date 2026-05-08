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

// TODO: remove legacyApiV1 after v2 rollout

// Patch: prevent stale customer cache reads
