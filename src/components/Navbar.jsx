import { AppBar, Toolbar, makeStyles } from "@material-ui/core"
import { NavLink } from "react-router-dom"


const useStyle = makeStyles({
    header:{
        background: "green"
    },
    tabs:{
        color: "white",
        textDecoration: "none",
        marginRight: 20,
        fontSize: 20
    }
})

const Navbar = () => {
    const classes = useStyle()
    return(
        <AppBar className={classes.header} position="static">
            <Toolbar>
                <NavLink className={classes.tabs} to="../" exact>Home Page</NavLink>
                <NavLink className={classes.tabs} to="/adduser" exact>Add User</NavLink>
                <NavLink className={classes.tabs} to="/allusers" exact>All Users</NavLink>
            </Toolbar>
        </AppBar>
    )
}


export default Navbar