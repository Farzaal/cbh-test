function StudentController({ studentService }) {

    this.createStudent = async function createStudent(req, res) {
        try {
            const data = await studentService.createStudent();

            return res.status(201).json({ message: 'Student Created Successfully' });

        } catch(error) {

            console.log(error);
        
            return res.status(500).json({ message: 'Something went wrong' });
        }
    } 

}

module.exports = StudentController;