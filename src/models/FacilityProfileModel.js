const { number } = require('joi');
const { container } = require('../di-setup');
const db = container.resolve('db');

const { Schema } = db.primary;

const chargeRate = new Schema({
    qualification: { type: String, enum: ['LVN','CNA','RN'], required: true },
    rate: { type: Number, required: true }
}, { _id: false });

const facilityProfileSchema = new Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    charge_rate: [chargeRate],
    active: { type: Boolean, default: true }
}, { timestamps: true });



module.exports = facilityProfileModel = () => db.primary.model('facility_profile', facilityProfileSchema);

