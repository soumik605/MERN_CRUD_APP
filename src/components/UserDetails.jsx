import React, {useEffect, useState} from 'react'
import { TableCell, TableRow, Table, TableBody, TableHead, makeStyles} from '@material-ui/core'
import {getUsers} from '../Service/Api'
import {useParams} from 'react-router-dom'


const useStyle = makeStyles({
    table:{
        width: '90%',
        margin: "50px 0 0 50px"
    },
    thead:{
        "& > *":{
            background: "black",
            color: "white",
            fontSize: 20
        }
    },
    row:{
        "& > *":{
            fontSize: 25
        }
    }
})





const UserDetails = () => {
    const classes = useStyle()
    const {id} = useParams()
    const [currentUser, setCurrentUser] = useState([])

    useEffect(() => {
        loadUserData()
    },[])
    
    const loadUserData  = async () => {
        const response = await getUsers(id)
        const user = response.data
        setCurrentUser(user)
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {(
                    <TableRow className={classes.row}>
                        <TableCell>{currentUser._id}</TableCell>
                        <TableCell>{currentUser.name}</TableCell>
                        <TableCell>{currentUser.email}</TableCell>
                        <TableCell>{currentUser.phone}</TableCell>
                    </TableRow>
                )}
                
            </TableBody>
        </Table>
    )
}

export default UserDetails
