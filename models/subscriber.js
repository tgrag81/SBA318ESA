const { subscribe } = require('diagnostics_channel')
const mongoose = require('mongoose')
const subscriberSchema = new mongoose.Schema ({

    name: {
type: String,
rquired: true

    },
    subscribedToChannel: {
type: String,
required: true
    },

    subscribeDate: {
type: Date,
required: true,
default: Date.now
    },
})

module.exports = mongoose.model('Subscriber', subscriberSchema)