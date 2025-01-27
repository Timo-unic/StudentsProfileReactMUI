import React from 'react'

type IErrorMessageProps = {
    error: string
}
const ErrorMessage = ({ error }: IErrorMessageProps) => {
    return <div className="text-center font-semibold text-red-600">{error}</div>
}
export default ErrorMessage
