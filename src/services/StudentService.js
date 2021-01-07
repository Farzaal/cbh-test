function StudentService({ studentModel }) {

    this.createStudent = async function createStudent({ name, email, roll_no, comments, institute }) {
        
        const stu = new studentModel({ name, email, roll_no, comments, institute });

        return await stu.save(); 
    }

    this.fetchStudent = async function fetchStudent(roll_no) {
        console.log("weerwe");
        return await studentModel.find({ roll_no }).exec();
    }
}

module.exports = StudentService;