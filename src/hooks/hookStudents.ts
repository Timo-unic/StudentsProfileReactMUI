import { useEffect, useState } from 'react'
import axios, { AxiosError } from 'axios'
import { IProfileStudent } from 'models'

export function useStudents() {
    const [students, setStudents] = useState<IProfileStudent[]>([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    function createStudent(student: IProfileStudent) {
        setStudents(prev=>[...students, student])
    }

    async function fetchStudents() {
        try {
            setError('')
            setLoading(true)
            const response = await axios.get<IProfileStudent[]>(
                'https://localhost:7099/api/StudentProfile/students'
            )
            setStudents(response.data)
            setLoading(false)
        } catch (e: unknown) {
            const error = e as AxiosError
            setLoading(false)
            setError(error.message)
        }
    }

    useEffect(() => {
        fetchStudents()
    }, [])
    return { students, loading, error, createStudent }
}

