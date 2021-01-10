const { container } = require('../di-setup');
const db = container.resolve('db');

const { Schema, Types } = db.primary;
const { ObjectId } = Types;

const shiftSchema = new Schema({
    facilityId: { type: ObjectId, ref: 'facility_profile' }, 
    agentId: { type: ObjectId, ref: 'hcp_profile' },
    start: { type: Date, default: '' },
    end: { type: Date },
    charge: { type: Number, default: 0 },
    pay: { type: Number, default: 0 },
    agentPay:{ type: Number, default: 0 },
    time: { type: Number, default: 0 },
    type: { type: String, enum: ['LVN','CNA','RN'] },
    description: String,
    deleted: { type: Boolean, default: false },
  }, { timestamps: true })

shiftSchema.index({ agentId: -1, facilityId: -1 })

module.exports = shiftModel = () => db.primary.model('shifts', shiftSchema);
