import { Button, FormHelperText, TextField } from '@mui/material'
import axios from 'axios'
import ErrorMessage from 'components/ErrorMessage/ErrorMessage'
import { IProfileStudent } from 'models'
import React, { useState } from 'react'

const studentData: IProfileStudent = {
    firstName: '',
    lastName: '',
    studentLogin: '',
    description: '',
    dateOfBirth: '',
}
type CreateStudentProps = {
    onStudentCreated: (student: IProfileStudent) => void
}
const CreateStudentProfile = ({ onStudentCreated }: CreateStudentProps) => {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault()

        setError('')
        if (value.trim().length === 0) {
            setError('Please insert your first name.')
            return
        }

        studentData.firstName = value

        const response = await axios.post<IProfileStudent>(
            'https://localhost:7099/api/StudentProfile/profile',
            studentData
        )
        onStudentCreated(response.data)
    }

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setValue((event.target as HTMLInputElement).value)
    // }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <TextField
                    id="firstName"
                    label="First name"
                    className="w-full"
                    value={value}
                    onChange={(event) => setValue(event.target.value)}
                />
            </div>
            <FormHelperText>
                {error ? (
                    <ErrorMessage error={error} />
                ) : (
                    'Please insert your first name.'
                )}
            </FormHelperText>
            <div>
                <TextField id="lastName" label="Last name" className="w-full" />
            </div>
            <FormHelperText>Please insert your last name.</FormHelperText>
            <div>
                <TextField
                    id="studentLogin"
                    label="Student Login"
                    className="w-full"
                />
            </div>
            <FormHelperText>Please insert your student login.</FormHelperText>
            <div>
                <TextField
                    id="description"
                    label="Description"
                    className="w-full"
                />
            </div>
            <FormHelperText>Please insert your description.</FormHelperText>
            <div>
                <TextField
                    id="dateOfBirth"
                    label="Date of Birth"
                    className="w-full"
                />
            </div>
            <FormHelperText>Please insert your date of Birth.</FormHelperText>
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
