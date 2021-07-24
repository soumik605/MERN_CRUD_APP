import { Button, FormControl, FormGroup, Input, InputLabel, makeStyles, Typography } from '@material-ui/core'
import React, {useState} from 'react'
import {addUser} from '../Service/Api'
import {useHistory} from 'react-router-dom'


const useStyle = makeStyles({
    container:{
        width: "50%",
        margin: "5% 0 0 25%",
        "& > *":{
            margin: 20
        }
    }
})

const initialvalue = {
    name: "",
    email:"",
    phone:""
}

const AddUser = () => {
    const classes = useStyle()
    const [user, setUser] = useState(initialvalue)
    const {name, email, phone} = user;
    let history = useHistory()

    const onValueChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value})
    }

    const addUserDetails = async () => {
        await addUser(user)
        history.push('./allusers')
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add User</Typography>
            <FormControl>
                <InputLabel>Name</InputLabel>
                <Input onChange = {(e)=> onValueChange(e)} name="name" value={name}/>
            </FormControl>
            <FormControl>
                <InputLabel>Email</InputLabel>
                <Input onChange = {(e)=> onValueChange(e)} name="email"  value={email}  />
            </FormControl>
            <FormControl>
                <InputLabel>Phone</InputLabel>
                <Input onChange = {(e)=> onValueChange(e)} name="phone"  value={phone}  />
            </FormControl>
            <Button variant="contained" color="primary" onClick={()=>addUserDetails()}>Add User</Button>
        </FormGroup>
    )
}

export default AddUser
