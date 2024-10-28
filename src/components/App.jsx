import React, { useState } from "react";

function App() {
  const [contact, setContact] = useState({
    fstName: "",
    lstName: "",
    email: "",
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  // function handleChange(event) {
  //   const { name, value } = event.target;
  //   setContact((prevValue) => {
  //     if (name === "fName") {
  //       return {
  //         fstName: value,
  //         lstName: prevValue.lstName,
  //         email: prevValue.email,
  //       };
  //     } else if (name === "lName") {
  //       return {
  //         fstName: prevValue.fstName,
  //         lstName: value,
  //         email: prevValue.email,
  //       };
  //     } else if (name === "email") {
  //       return {
  //         fstName: prevValue.fstName,
  //         lstName: prevValue.lstName,
  //         email: value,
  //       };
  //     }
  //   });
  // }

  return (
    <div className="container">
      <h1>
        Hello {contact.fstName} {contact.lstName}
      </h1>
      <p>{contact.email}</p>
      <form>
        <input
          onChange={handleChange}
          name="fstName"
          value={contact.fstName}
          placeholder="First Name"
        />
        <input
          onChange={handleChange}
          name="lstName"
          value={contact.lstName}
          placeholder="Last Name"
        />
        <input
          onChange={handleChange}
          name="email"
          value={contact.email}
          placeholder="Email"
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
