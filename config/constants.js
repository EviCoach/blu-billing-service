module.exports = {
    PORT: process.env.PORT,
    QUEUE: {
        TRANSACTION_QUEUE: "tramsaction_queue",
        TRANSACTION_SUCCESS: "transaction_success"
    },
    STATUS: {
        QUEUED: "QUEUED",
        SENT: "SENT",
        DELIVERED: "DELIVERED",
        OPENED: "OPENED",
        PENDING: "PENDING"
    }
}