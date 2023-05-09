import React, { useContext, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'; 
import { GlobalContext } from "../context/GlobalState";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap';
import {v4 as uuid} from 'uuid';


export function AddUser() {
  const [Name, setName] = useState('');
  const { addUser } = useContext(GlobalContext);
  const navigate = useNavigate();

  const handleSubmit = ()=>{
    const newUser = {
      id: uuid(),
      name: Name
    }
    addUser(newUser);
    navigate("/");
  }

  const handleChange = (e)=>{
    setName(e.target.value)
  }
  
  return (
  <>
  <h1>Add User</h1>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" value={Name} onChange={handleChange} placeholder="Enter Your Name"></Input>
      </FormGroup>
        <Button type="submit">Submit</Button>
        <Link to="/" className="btn btn-danger mx-2">Cancel</Link>
    </Form>
  </>
  )
}

export default AddUser