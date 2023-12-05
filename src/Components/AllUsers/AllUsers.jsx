import React, { useEffect, useState } from 'react'
import { Container, Grid, Button, Typography} from '@mui/material'
import axios from 'axios'
import { API_URL } from '../../Servise/servise'
import UserList from '../UserList/UserList'
import { Link } from 'react-router-dom'
import styled from '@emotion/styled'

const Box = styled(Grid)`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default function AllUsers() {
  const [user, setUser]=useState([])

  useEffect(() => {
    const getUsers =async () => {
      try {
        const res = await axios.get(API_URL)
        setUser(res.data)
      } catch (error) {
        console.log(error);
      }
    }  
    getUsers()
  },[user])

    const DeleteUsers =async (u) => {
      const response = axios.delete(API_URL + "/" + u.id)
      console.log(response);
    }

 
  

  return (
    <Container>
      <Box>
        {
          user.length ? 
            <UserList user={user} deleteUser={DeleteUsers} />
            : <Container>
              <Typography variant='h4'>Users not found</Typography>
              <Button variant="contained">
                <Link to="/add" style={{color: '#fff', textDecoration: 'none'}}>Add new User</Link>
              </Button>
            </Container>
        }
      </Box>
    </Container>
  )
}