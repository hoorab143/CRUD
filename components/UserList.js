import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import { GlobalContext } from "../context/GlobalState";

export function UserList() {
  const { users, removeUser } = useContext(GlobalContext);
  // console.log(users);
  let usersExist = false;
  return (
    
    <ListGroup>
      
      {users.length==0?(<><h3 className="text-center my-4">No User</h3></>):(usersExist=true)}
      {usersExist && users.map((user)=>
        <ListGroupItem className="d-flex my-1" key={user.id}>
        <strong>{user.name}</strong>
        <div className="ml-auto" style={{ marginLeft: "237px" }}>
          <Link to={`/edit/${user.id}`} className="btn btn-warning mx-1">
            Edit
          </Link>
          {/* {console.log(user.id)} */}
          <Button onClick={()=>removeUser(user.id)} color="danger">Delete</Button>
        </div>
      </ListGroupItem>
      )}
    </ListGroup>

  );
}

export default UserList;
