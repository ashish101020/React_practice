import { useState } from "react";

const Form2 = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const giveAlert = (e) => {
    e.preventDefault(); // Prevent page refresh on form submit
    alert(`${formData.name} ${formData.email} ${formData.password}`);

    setFormData({
      name: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <form onSubmit={giveAlert}>
        <div>
          Name: <input name="name" value={formData.name} type="text" onChange={handleChange} required />
        </div>
        <div>
          Email: <input name="email" value={formData.email} type="email" onChange={handleChange} required />
        </div>
        <div>
          Password: <input name="password" value={formData.password} type="password" onChange={handleChange} required />
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form2;
