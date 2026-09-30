import { AccountCircle, NotificationsActive } from "@mui/icons-material";
import { Avatar, Badge, Button, IconButton, Menu, MenuItem } from "@mui/material";
import React from "react";

const NavBar = () => {
const[anchorE1, setAnchorE1] = React.useState(null);
const open = Boolean(anchorE1);
const handleClick = (event) =>{
    setAnchorE1(event.currentTarget);
};
const handleClose = () => {
    setAnchorE1(null);
};
    return (
        <div className="z-50 px-6 flex items-center justify-between py-2">
            <div className="flex items-center gap-10">
                <h1 className="cursor-pointer font-bold text-2xl"></h1>
                <div className="flex items-center gap-5">
                    <h1>Home</h1>
                </div>
            </div>
            <div className="flex items-center gap-3 md:gap-6">
                <Button variant="outlined">Become partner</Button>
                <IconButton>
                    <Badge badgeContent={5}>
                        <NotificationsActive color="primary"/>
                    </Badge>
                </IconButton>
                {true? <div className="flex gap-1 items-center">
                    </div>
                    :
                    <IconButton>
                        <AccountCircle sx = {{fontSize:"45px", color:"green"}}/></IconButton>}
                <div className="flex gap-1 items-center">
                    <h1 className="text-lg font-semibold">Som</h1>
                    <IconButton id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="ture"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>
                        <Avatar sx={{bgcolor:"greeen"}}></Avatar>
                    </IconButton>
                    <Menu 
                    id = "basic-menu"
                    anchorEl={anchorE1}
                    open = {open}
                    onClose={handleClose}
                    menuListProps={{
                        'aria-labelledby' : 'basic-button',
                    }}>
                    <MenuItem onClick={handleClose}>My Bookings</MenuItem>
                    <MenuItem onClick={handleClose}>Logout</MenuItem>
                    </Menu>
                </div>
            </div>
        </div>
    )
}

export default NavBar;