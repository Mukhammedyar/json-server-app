import styled from '@emotion/styled'
import { Button, Grid, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import DeleteIcon from '@mui/icons-material/Delete';


const Demo = styled('div')`
  text-align: left;
`
const GridList = styled(Grid)`
  margin: 0 auto;
  width: 700px;
  background: rgb(255,255,255);
  padding: 10px 30px;
  margin-top: 30px;
`
const ListItemNew = styled(ListItem)`
 background: #fff;
 border: 1px solid #ccc;
 margin: 5px 0;
 padding: 10px 20px;
`


export default function UserList({user, deleteUser}) {
  return (
    <GridList >
        <Typography variant="h6" component="div">
             Users List
        </Typography>
        <Demo>
        <List>
            <ListItem sx={{border: '1px solid #c4c4c4', background: "bisque" }}>
                <ListItemIcon> </ListItemIcon>
                <ListItemText
                primary="id"
                />
                <ListItemText
                primary="Name"
                />
                <ListItemText
                primary="Password"
                />
                <ListItemText
                primary=""
                />
            </ListItem>
            {
            user.map((u, index) => 
                <ListItemNew key={index}>
                <ListItemIcon>
                    <AccountCircleIcon />
                </ListItemIcon>
                <ListItemText 
                    primary={u.id}
                />
                <ListItemText
                    primary={u.name}
                />
                <ListItemText
                    primary={u.password}
                />
                <Button
                    variant="contained" 
                    color="error" 
                    endIcon={<DeleteIcon />}
                    onClick={(e)=> deleteUser(u)}
                >
                    Delete
                </Button>
                </ListItemNew>
            )
            }
            </List>
        </Demo>
    </GridList>
  )
}