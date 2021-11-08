// Function is later referenced with this name
const helloWorldFn = async (context, event) => {
    // Log so we can later see what's available in payload
    console.log(event);

    // Project secrets are accessed through context.
    // Secret must be created through dashboard before accessing it!
    // const apiToken = await context.secrets.get('API_TOKEN')

    // Project storage is accessed through context
    // Fetch already saved transactions under HELLO_WORLD/TXS key
    const failedTxs = await context.storage.getJson('HELLO_WORLD/TXS');
    if (!failedTxs['txs']) {
        // Create new list if first
        failedTxs['txs'] = [event.hash];
    } else {
        // Otherwise append
        failedTxs['txs'].push(event.hash);
    }
    // Write to storage - don't forget the await!
    await context.storage.putJson('HELLO_WORLD/TXS', failedTxs);
};

// Function must be exported
module.exports = { helloWorldFn };
