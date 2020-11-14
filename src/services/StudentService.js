function StudentService({ studentModel }) {

    this.createStudent = async function createStudent({ name, email, roll_no, comments, institute }) {
        
        const stu = new studentModel({ name, email, roll_no, comments, institute });

        return await stu.save(); 
    }
}

module.exports = StudentService;