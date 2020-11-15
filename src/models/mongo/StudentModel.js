const { container } = require('../../di-setup');
const db = container.resolve('db');

const { Schema } = db.secondary;

const studentSchema = new Schema({
    name: String,
    email: String,
    roll_no: Number,
    comments: String,
    institute: String,
    grade: String,
    city: String,
    fees: Number,
    state: String,
    zip: String,
    address: String,
    phone: String,
    department: String,
    category_id: Number,
    courses: [{
        title: String,
        instructor: String
    }],
    finance: {
        account: String, 
        accountName: String,
        creditCardNumber: String,
        iban: String
    },
    createdAt : { type : Date, default: Date.now }
});

module.exports = studentModel = () => db.secondary.model('Student', studentSchema);

