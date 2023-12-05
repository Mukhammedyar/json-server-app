import styled from '@emotion/styled'
import { FormControl } from '@mui/base'
import { Button, Input, InputLabel } from '@mui/material'
import { Container } from '@mui/system'
import { React, useEffect, useState } from 'react'
import { addUser } from '../../Servise/servise'

const Form = styled(FormControl)`
  margin: 0 auto;
  width: 500px;
  height: 300px;
  backgroud: #fff;
  border: 1px solid #ccc;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`
  const initialValue={
    id: '',
    name: "",
    password: ""
  }


export default function AddUser() {
  const [user, setUser] = useState(initialValue)

  const inputChangeValue = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value })
  }
  const addNewUser = () => {
    addUser(user)
    console.log(user.id);
    setUser({id: '', name: '', password: ''})
  }

  return (
    <Container style={{paddingTop: '70px'}}>
      <Form>
        <FormControl>
          <InputLabel>id</InputLabel>
          <Input onChange={(e) => inputChangeValue(e)} value={user.id} type='number' name="id"/>
        </FormControl>
        <FormControl>
          <InputLabel>email</InputLabel>
          <Input onChange={(e)=> inputChangeValue(e)} value={user.name} name="name"/>
        </FormControl>
        <FormControl>
          <InputLabel>password</InputLabel>
          <Input onChange={(e)=> inputChangeValue(e)} value={user.password} name="password" />
        </FormControl>
        <Button onClick={addNewUser} variant="contained">Submit</Button>
      </Form>
    </Container>
  )
}
