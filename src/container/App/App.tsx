import { Container, StyledEngineProvider } from '@mui/material'
import Header from 'container/Header/Header'
import { students } from 'data/students'
import { IProfileStudent } from 'models'
import Courses from 'pages/Courses/Courses'
import Home from 'pages/Home/Home'
import StudentsList from 'pages/StudentsList/StudentsList'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

type StudentProps = {
    student: IProfileStudent[]
}
const App = (props: StudentProps) => {
    return (
        <StyledEngineProvider injectFirst>
            <Header />
            <Container sx={{ padding: '30px 0' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route
                        path="/students"
                        element={<StudentsList student={students} />}
                    />
                </Routes>
            </Container>
        </StyledEngineProvider>
    )
}
export default App
