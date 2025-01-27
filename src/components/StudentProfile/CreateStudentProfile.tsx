import { Button, FormHelperText, TextField } from '@mui/material'
import axios from 'axios'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { IProfileStudent } from 'models'
import React, { useState } from 'react'
import qs from 'qs'

const studentData: IProfileStudent = {
    firstName: '',
    lastName: '',
    studentLogin: '',
    description: '',
    dateOfBirth: new Date(),
}
type CreateStudentProps = {
    onStudentCreated: (student: IProfileStudent) => void
}
const CreateStudentProfile = ({ onStudentCreated }: CreateStudentProps) => {
    const [value, setValue] = useState({
        firstName: '',
        lastName: '',
        studentLogin: '',
        description: '',
        dateOfBirth: '',
    })
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        setError('')
        if (
            value.firstName.trim().length === 0 ||
            value.lastName.trim().length === 0 ||
            value.studentLogin.trim().length === 0 ||
            // value.description.trim().length === 0 ||
            value.dateOfBirth.trim().length === 0
        ) {
            setError('Please insert valid value.')
            return
        }

        studentData.firstName = value.firstName
        studentData.lastName = value.lastName
        studentData.studentLogin = value.studentLogin
        studentData.description = value.description
        studentData.dateOfBirth = new Date(value.dateOfBirth)

        // const options = {
        //     method: 'POST',
        //     url: 'https://localhost:7099/api/StudentProfile/profile',
        //     data: qs.stringify(studentData),
        //     headers: {
        //         'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        // }

        // const response = await axios.request<IProfileStudent>(options)

        const response = await axios.post<IProfileStudent>(
            'https://localhost:7099/api/StudentProfile/profile',
            qs.stringify(studentData)
        )
        onStudentCreated(response.data)
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target
        setValue((prevValue) => ({
            ...prevValue,
            [name]: value,
        }))
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <TextField
                    name="firstName"
                    label="First name"
                    className="w-full"
                    value={value.firstName}
                    onChange={changeHandler}
                />
            </div>
            <FormHelperText component="div">
                {error ? (
                    <ErrorMessage error={error} />
                ) : (
                    'Please insert your first name.'
                )}
            </FormHelperText>
            <div>
                <TextField
                    name="lastName"
                    label="Last name"
                    className="w-full"
                    value={value.lastName}
                    onChange={changeHandler}
                />
            </div>
            <FormHelperText component="div">
                {error ? (
                    <ErrorMessage error={error} />
                ) : (
                    'Please insert your last name.'
                )}
            </FormHelperText>
            <div>
                <TextField
                    name="studentLogin"
                    label="Student Login"
                    className="w-full"
                    value={value.studentLogin}
                    onChange={changeHandler}
                />
            </div>
            <FormHelperText component="div">
                {error ? (
                    <ErrorMessage error={error} />
                ) : (
                    'Please insert your student login.'
                )}
            </FormHelperText>
            <div>
                <TextField
                    name="description"
                    label="Description"
                    className="w-full"
                    value={value.description}
                    onChange={changeHandler}
                />
            </div>
            <FormHelperText component="div">
                {error ? (
                    <ErrorMessage error={error} />
                ) : (
                    'Please insert your description.'
                )}
            </FormHelperText>
            <div>
                <TextField
                    name="dateOfBirth"
                    label="Date of Birth"
                    className="w-full"
                    value={value.dateOfBirth}
                    onChange={changeHandler}
                />
            </div>
            <FormHelperText component="div">
                {error ? (
                    <ErrorMessage error={error} />
                ) : (
                    'Please insert your date of Birth by format MM-DD-YYYY.'
                )}
            </FormHelperText>
            <Button
                type="submit"
                variant="contained"
                className="all-center w-full mt-4 hover:text-yellow-500"
            >
                Create
            </Button>
        </form>
    )
}
export default CreateStudentProfile
