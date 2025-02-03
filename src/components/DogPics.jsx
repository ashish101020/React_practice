import { useEffect, useState } from "react";
import axios from "axios";

const DogPics = () => {
  const [imageUrl, setImageUrl] = useState("");
  const [selectedBreed, setSelectedBreed] = useState("random");

  const breeds = ["random", "beagle", "boxer", "dalmatian", "husky"];

  const fetchDogImage = async (breed) => {
    try {
      const url =
        breed === "random"
          ? "https://dog.ceo/api/breeds/image/random"
          : `https://dog.ceo/api/breed/${breed}/images/random`;
      const response = await axios.get(url);
      setImageUrl(response.data.message);
    } catch (error) {
      console.error("Error fetching dog image:", error);
    }
  };

  useEffect(() => {
    fetchDogImage(selectedBreed);
  }, [selectedBreed]);

  return (
    <div style={{ padding: "20px" }}>
      <h1>Dog Image Viewer</h1>
      <select
        value={selectedBreed}
        onChange={(e) => setSelectedBreed(e.target.value)}
      >
        {breeds.map((breed) => (
          <option key={breed} value={breed}>
            {breed.charAt(0).toUpperCase() + breed.slice(1)}
          </option>
        ))}
      </select>
      <br />
      {imageUrl && <img src={imageUrl} alt="Dog" style={{ width: "300px", marginTop: "20px" }} />}
      <br />
      <button onClick={() => fetchDogImage(selectedBreed)} style={{ marginTop: "10px" }}>
        Next
      </button>
    </div>
  );
};

export default DogPics;
