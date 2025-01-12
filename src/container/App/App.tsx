import { Container, StyledEngineProvider } from '@mui/material'
import Header from 'container/Header/Header'
import Courses from 'pages/Courses/Courses'
import Home from 'pages/Home/Home'
import Students from 'pages/Students/Students'
import React from 'react'
import { Route, Routes } from 'react-router-dom'

type Props = {}
const App = (props: Props) => {
    return (
        <StyledEngineProvider injectFirst>
            <Header />
            <Container sx={{ padding: '30px 0' }}>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/courses" element={<Courses />} />
                    <Route path="/students" element={<Students />} />
                </Routes>
            </Container>
        </StyledEngineProvider>
    )
}
export default App
