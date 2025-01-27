export interface IProfileStudent {
    id?: string
    firstName: string
    lastName: string
    studentLogin: string
    studentCardNumber?: string
    description?: string
    dateOfBirth?: string
    age?: number
    image?: string
    isGraduated?: boolean
    isProfileVisible?: boolean
    additionalInfo?: boolean
}