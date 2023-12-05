import { AppBar, Toolbar,Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Nav = styled(Toolbar)`
  background: #fff;
  color: #333;
  display: flex;
  gap: 20px;
`

const Men = styled(Typography)`
  color: rgb(10, 120, 230);
  font-weight: 700 !important;
  margin-right: 40px !important;
  font-family: roboto, sans-serif !important;
`

export default function Navbar() {
  return (
    <AppBar className='d-block' position='sticky'>
        <Nav className='nav-box'>
            <Men>CRUD API with REACT JS</Men>
              <Typography >
                  <Link to={'/all'} style={{color: '#222', textDecoration: 'none'}}>All users</Link>
              </Typography>
              <Typography>
                <Link to={'/add'} style={{color: '#222', textDecoration: 'none'}}>Add new user</Link>
              </Typography>
        </Nav>    
    </AppBar>
  )
}
