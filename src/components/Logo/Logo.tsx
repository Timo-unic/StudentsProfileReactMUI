import { Typography } from '@mui/material'
import React from 'react'

type Props = {}
const Logo = (props: Props) => {
    return (
        <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
                flexGrow: 1,
                display: { xs: 'none', sm: 'block' },
            }}
        >
            STUDENT PROFILE
        </Typography>
    )
}
export default Logo
