import { useLoaderData } from "react-router-dom";

const Update = () => {
  const loadedUser = useLoaderData();

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const updatedUser = { name, email };

    fetch(`http://localhost:5000/users/${loadedUser._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("User update succesfully");
        }
      });
  };
  return (
    <div>
      <h3>
        Updated information {loadedUser.name} {loadedUser.email}
        <form onSubmit={handleUpdate}>
          <input
            type="text"
            name="name"
            id=""
            placeholder="name. . ."
            defaultValue={loadedUser?.name}
          />
          <br />
          <input
            type="email"
            name="email"
            id=""
            placeholder="email. . ."
            defaultValue={loadedUser?.email}
          />
          <br />
          <input type="submit" value="Update" />
        </form>
      </h3>
    </div>
  );
};

export default Update;
