import "./App.css";

function App() {
  const handleAddUser = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const user = { name, email };
    console.log(user);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("Data added successfully");
          form.reset();
        }
      });
  };

  return (
    <>
      <h3>simple crud client</h3>
      <form onSubmit={handleAddUser}>
        <input type="text" name="name" id="" placeholder="name. . ." />
        <br />
        <input type="email" name="email" id="" placeholder="email. . ." />
        <br />
        <input type="submit" value="Add user" />
      </form>
    </>
  );
}

export default App;