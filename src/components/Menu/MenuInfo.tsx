import { Button, Menu, MenuItem } from '@mui/material'
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown'
import React from 'react'
import { Link } from 'react-router-dom'

type Props = {}
const MenuInfo = (props: Props) => {
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
                    id="info-button"
                    color="inherit"
                    endIcon={<KeyboardArrowDownIcon />}
                    aria-controls={open ? 'info-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Additional Info
                </Button>
                <Menu
                    id="info-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    MenuListProps={{
                        'aria-labelledby': 'info-button',
                    }}
                >
                    <MenuItem onClick={handleClose}>
                        <Link to="/courses">Courses</Link>
                    </MenuItem>
                </Menu>
            </div>
        </>
    )
}
export default MenuInfo
