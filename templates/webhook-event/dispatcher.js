const axios = require('axios')

// Do not change function name.
const actionFn = async (context, event) => {
    await axios.post("$WEBHOOK_URL", event)
}

// Do not change this.
module.exports = { actionFn }
