import { TableCell, TableRow, Table, TableBody, TableHead, makeStyles, Button} from '@material-ui/core'
import React, {useEffect, useState} from 'react'
import {getUsers, deleteUser} from '../Service/Api'
import {Link} from 'react-router-dom'


const useStyle = makeStyles({
    table:{
        width: '70%',
        margin: "50px 0 0 50px"
    },
    thead:{
        "& > *":{
            background: "blue",
            color: "white",
            fontSize: 20
        }
    },
    row:{
        "& > *":{
            fontSize: 15
        }
    }
})




const AllUsers = ()=> {
    const [users, setUsers] = useState([])
    const classes = useStyle()

    useEffect(() => {
        getAllUsers()
    }, [])

    const getAllUsers = async () => {
        let response = await getUsers()
        setUsers(response.data)
    }

    const deleteUserData = async(id) => {
        await deleteUser(id)
        getAllUsers()
    }

    return (
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Id</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell></TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {
                    users.map(user => (
                        <TableRow className={classes.row} key={user.id}>
                            <TableCell>{user._id}</TableCell>
                            <TableCell>{user.name}</TableCell>
                            <TableCell>
                                <Button
                                variant="contained" 
                                color = "inherit" 
                                style={{marginRight : 10}} 
                                component={Link} 
                                to={`/userdetails/${user._id}`}>View</Button>
                                <Button 
                                    variant="contained" 
                                    color="primary" 
                                    style={{marginRight : 10}} 
                                    component={Link} 
                                    to={`/edituser/${user._id}`}>Edit</Button>
                                <Button 
                                    variant="contained" 
                                    color="secondary" 
                                    style={{marginRight : 10}} 
                                    component={Link}
                                    onClick={()=>deleteUserData(user._id)} 
                                   >Delete</Button>
                            </TableCell>
                        </TableRow>
                    ))
                }
            </TableBody>
        </Table>
    )
}

export default AllUsers
