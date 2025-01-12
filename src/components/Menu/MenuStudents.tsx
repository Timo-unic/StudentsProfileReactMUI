import { Button, Menu, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}
const MenuStudents = (props: Props) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
    const open = Boolean(anchorEl)
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget)
    }
    const handleClose = () => {
        setAnchorEl(null)
    }

    return (
        <>
            <div>
                <Button
                    id="student-button"
                    color="inherit"
                    endIcon={<KeyboardArrowDownIcon />}
                    aria-controls={open ? 'student-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Student Profiles
                </Button>
                <Menu
                    id="student-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'student-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to="/students">Students</Link>
                    </MenuItem>
                </Menu>
            </div>
        </>
    )
}
export default MenuStudents
