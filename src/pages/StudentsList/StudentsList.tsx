import StudentProfileList from 'components/StudentProfile/StudentProfileList'
import { students } from 'data/students'
import { IProfileStudent } from 'models'
import React from 'react'

type StudentProps = {
    student: IProfileStudent[]
}
const StudentsList = (props: StudentProps) => {
    return (
        <div>
            <StudentProfileList student={students} />
        </div>
    )
}
export default StudentsList
