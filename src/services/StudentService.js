function StudentService({ studentModel }) {

    this.createStudent = async function createStudent() {
        const stu = new studentModel({
            name: "farzal",
            email: "farzal@gmail.com",
            roll_no: "1452",
            comments: "Demo comment"
        })

        return await stu.save(); 
    }
}

module.exports = StudentService;