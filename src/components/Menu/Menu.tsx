import { Button } from '@mui/material'
import React from 'react'
import MenuInfo from './MenuInfo'
import MenuStudents from './MenuStudents'
import { Link } from 'react-router-dom'

type Props = {}
const Menu = (props: Props) => {
    return (
        <>
            <Button color="inherit">
                <Link to="/">Home</Link>{' '}
            </Button>
            <MenuInfo />
            <MenuStudents />
        </>
    )
}
export default Menu
