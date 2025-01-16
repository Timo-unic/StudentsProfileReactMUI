import { Button } from '@mui/material'
import Modal from 'components/Modal/Modal'
import CreateStudentProfile from 'components/StudentProfile/CreateStudentProfile'
import StudentProfileList from 'components/StudentProfile/StudentProfileList'
import { students } from 'data/students'
import { useStudents } from 'hooks/hookStudents'
import { IProfileStudent } from 'models'
import React, { useState } from 'react'

type StudentProps = {
    student: IProfileStudent[]
}
const StudentsList = (props: StudentProps) => {
    const { createStudent } = useStudents()
    const [modal, setModal] = useState(false)

    const createStudentHandler = (student: IProfileStudent) => {
        setModal(false)
        createStudent(student)
    }
    return (
        <div>
            <Button
                variant="contained"
                className="fixed flex top-30 right-10"
                onClick={() => setModal(true)}
            >
                Create Student
            </Button>
            <StudentProfileList student={students} />
            {modal && (
                <Modal
                    title="Create Student Profile"
                    onClose={() => setModal(false)}
                >
                    <CreateStudentProfile
                        onStudentCreated={createStudentHandler}
                    />
                </Modal>
            )}
        </div>
    )
}
export default StudentsList
