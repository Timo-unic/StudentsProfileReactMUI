import {
    Button,
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material'
import { IProfileStudent } from 'models'
import React from 'react'

type StudentProps = {
    student: IProfileStudent
}
const StudentProfile = ({ student }: StudentProps) => {
    return (
        <Card variant="outlined">
            <CardMedia
                sx={{ height: 50, width: 50, borderRadius: '50%' }}
                image={student.image}
                title={student.lastName}
            />
            <CardContent>
                <Typography gutterBottom component="div" className="flex">
                    <div className="text-lg font-bold px-2">
                        {student.firstName}
                    </div>
                    <div className="text-lg font-bold px-2">
                        {student.lastName}
                    </div>
                </Typography>
                <Typography
                    variant="body2"
                    component="div"
                    sx={{ color: 'text.secondary' }}
                >
                    <div>
                        <span className="font-bold">Login:</span>{' '}
                        {student.studentLogin}
                    </div>
                    <p>{student.description}</p>
                    <div>
                        <span className="font-bold">Age:</span> {student.age}
                    </div>
                    <div>
                        <span className="font-bold">Date of Birth:</span>{' '}
                        {student.dateOfBirth}
                    </div>
                </Typography>
            </CardContent>
            <CardActions className="flex justify-between">
                <Button size="small" variant="contained">
                    More Details
                </Button>
                <Button size="small" variant="contained">
                    Remove Card
                </Button>
            </CardActions>
        </Card>
    )
}
export default StudentProfile
