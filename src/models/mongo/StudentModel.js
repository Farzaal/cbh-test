const { container } = require('../../di-setup');
const db = container.resolve('db');

const { Schema } = db.secondary;

const studentSchema = new Schema({
    name: String,
    email: String,
    roll_no: String,
    comments: String,
    institute: String,
    createdAt : { type : Date, default: Date.now }
});

module.exports = studentModel = () => db.secondary.model('Student', studentSchema);

