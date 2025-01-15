import { Box, Grid2 } from '@mui/material'
import React from 'react'
import StudentProfile from './StudentProfile'
import { IProfileStudent } from 'models'

import { useStudents } from 'hooks/hookStudents'
import Loader from 'components/Loader/Loader'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'

type StudentProps = {
    student: IProfileStudent[]
}
const StudentProfileList = (props: StudentProps) => {
    const { students, loading, error } = useStudents()

    return (
        <Box sx={{ width: '100%', marginTop: '50px' }}>
            {loading && <Loader />}
            {error && <ErrorMessage error={error} />}
            <Grid2 container spacing={3}>
                {students.map((student, key) => (
                    <Grid2 size={{ xs: 12, md: 6 }} key={key}>
                        <StudentProfile key={student.id} student={student} />
                    </Grid2>
                ))}
            </Grid2>
        </Box>
    )
}
export default StudentProfileList
