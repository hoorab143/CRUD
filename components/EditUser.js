import React, { useContext, useState, useEffect } from "react";
import {Link, useNavigate, useParams } from 'react-router-dom'; 
import { GlobalContext } from "../context/GlobalState";
import {
  Form,
  FormGroup,
  Input,
  Label,
  Button
} from 'reactstrap';

export function EditUser(props) {

  const [SelectedUser, setSelectedUser] = useState({
    id: '',
    name:''
  });
  const {users,  editUser } = useContext(GlobalContext);
  const navigate = useNavigate(); 
  const params = useParams();
  const curruntUserId =   params.id; 
  // console.log(curruntUserId);
  useEffect(() => {
    // const userid = curruntUserId
    const SelectedUser = users.find(user=> user.id === curruntUserId);
    setSelectedUser(SelectedUser);
  }, [curruntUserId, users])
  
  const handleSubmit = ()=>{
    editUser(SelectedUser);
    navigate("/");
  }

  const handleChange = (e)=>{
    setSelectedUser({...SelectedUser, [e.target.name]:e.target.value})
  }
  return (
    <>
    <h1>Edit User</h1>
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Name</Label>
        <Input type="text" name='name' value={SelectedUser.name} onChange={handleChange} placeholder="Edit Your Name"></Input>
      </FormGroup>
      
        <Button type="submit">Update Changes</Button>
        <Link to="/" className="btn btn-danger mx-2">Cancel</Link>
    </Form>
    </>
    
  )
}

export default EditUser