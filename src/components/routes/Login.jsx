import axios from 'axios'
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'


const Login = () => {
  //const [userName, setUserName] = useState('')
  //const [password, setPassword]= useState('')
  //const isVisible= false
const{register,handleSubmit} = useForm();

const navigate = useNavigate();

const submit = (data) => {
  alert('hola mundo' + data)
  console.log(data);
  axios.post("https://e-commerce-api.academlo.tech/api/v1/users/login/", data)
      .then(res =>{ 
        navigate('/');
      console.log(res);
      localStorage.setItem('token',res.data.data.token)
      }
      
        )
      .catch(err => {
          if (err.response?.status === 404) {
              alert('esta mal la contrasenia')
          } else {
              console.log(err.respose?.data);
          }
      })
}


  return (
    <Form onSubmit={handleSubmit(submit)} style={{maxWidth:500, margin:'0 auto'}}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email"{...register("email")} />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" {...register("password")} />
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Check type="checkbox" label="Check me out" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  )
}

export default Login