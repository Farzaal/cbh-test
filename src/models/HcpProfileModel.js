const { container } = require('../di-setup');
const db = container.resolve('db');

const { Schema } = db.primary;

const hcpProfileSchema = new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    qualification: { type: String, enum: ['LVN','CNA','RN'], required: true },
    rate: { type: String, required: true },
    active: { type: Boolean, default: true }
}, { timestamps: true });

module.exports = hcpProfileModel = () => db.primary.model('hcp_profile', hcpProfileSchema);

