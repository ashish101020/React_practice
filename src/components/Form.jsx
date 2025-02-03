import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const giveAlert = () => {
    alert(name + " " + email + " " + password);

    setName('')
    setEmail('')
    setPassword('')
  };

  return (
    <form action="">
      <div>
        Name:{" "}
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
        />
      </div>
      <div>
        Email:{" "}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
        />
      </div>
      <div>
        Password:{" "}
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
        />
      </div>
      <button onClick={giveAlert}>Submit</button>
    </form>
  );
};

export default Form;
