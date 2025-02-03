import { useState } from "react";
import axios from "axios";

const BookAppointment = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [doctor, setDoctor] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
        firstName,
        lastName,
        email,
        doctor,
        location,
        date,
      });
      console.log("Response:", response.data);
      setIsSubmitted(true);
    } catch (error) {
      console.error("Error submitting appointment:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
      <div style={{ padding: "20px" }}>
      {isLoading ? (
          <h2>Loading...</h2>
      ) : (
          <>
            <h2>Book an Appointment</h2>
            <p>Fill in the form below to book a virtua session with your doctor</p>
          <form onSubmit={handleSubmit}>
          <label>
            First Name:
            <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
          </label>
          <br />
          <label>
            Last Name:
            <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
          </label>
          <br />
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
          </label>
          <br />
          <label>
            Select Doctor:
            <select value={doctor} onChange={(e) => setDoctor(e.target.value)} required>
              <option value="">Choose a doctor</option>
              <option value="Dr. Smith">Dr. Smith</option>
              <option value="Dr. Johnson">Dr. Johnson</option>
            </select>
          </label>
          <br />
          {doctor && (
              <>
              <label>
                Where?
                <br />
                <input type="radio" name="location" value="Google Meet" onChange={(e) => setLocation(e.target.value)} required /> Google Meet
                <input type="radio" name="location" value="Phone" onChange={(e) => setLocation(e.target.value)} required /> Phone
              </label>
              <br />
              <label>
                When?
                <input type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
              </label>
              <br />
              <button type="submit">Submit</button>
            </>
          )}
        </form>
      </>
      )}
    </div>
  );
};

export default BookAppointment;
