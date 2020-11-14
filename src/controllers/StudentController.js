function StudentController({ studentService }) {

    this.createStudent = async function createStudent(req, res) {
        try {

            const { name, email, roll_no, comments, institute } = req.body;
            
            await studentService.createStudent({ name, email, roll_no, comments, institute });

            return res.status(201).json({ message: 'Student Created Successfully' });

        } catch(error) {

            console.log(error);
        
            return res.status(500).json({ message: 'Something went wrong' });
        }
    } 

}

module.exports = StudentController;