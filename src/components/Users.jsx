import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers)

  const handleDelete = (_id) => {
    console.log("Delete", _id);
    fetch(`http://localhost:5000/users/${_id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("User Deleted successfully");
          const remaining = users.filter (user => user._id !== _id)
          setUsers(remaining)
        }
      });
  };

  return (
    <div>
      <h3>This is users information</h3>
      <h2>{users.length}</h2>
      {users.map((user) => (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "40px",
            border: "1px solid goldenrod",
            padding: "5px",
            borderRadius: "8px",
          }}
          key={user._id}
        >
          <span>
            <small>ID: {user._id}</small>
            <h4>Name: {user.name}</h4>
            <p>Email: {user.email}</p>
          </span>
          <Link to={`/update/${user._id}`}>
            <button style={{background: "white"}}>Update</button>
          </Link>
          <button
            onClick={() => handleDelete(user._id)}
            style={{ color: "red", background: "white", fontSize: "20px" }}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
};

export default Users;
