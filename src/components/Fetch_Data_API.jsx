import { useEffect, useState } from 'react';

const Fetch_Data_API = () => {
    const [apiData, setApiData] = useState([]);
    const [selectedUserId, setSelectedUserId] = useState(1); // Default to first user ID

    useEffect(() => {
        const fetchDataFromAPI = async () => {
            try {
                const api = await fetch("https://reqres.in/api/users");
                const response = await api.json();
                setApiData(response.data);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchDataFromAPI();
    }, []);

    // Ensure selectedUser always has a value
    const selectedUser = apiData.find((user) => user.id === selectedUserId) || apiData[0] || {};

    return (
        <>
            <div id='button-container'>
                {apiData.map((user) => (
                    <div key={user.id}>
                        <button onClick={() => setSelectedUserId(user.id)}>
                            <h1>{user.id}</h1>
                        </button>
                    </div>
                ))}
            </div>
            
            <div id='content'>
                <ul>
                    <li><strong>Name:</strong> {selectedUser.first_name} {selectedUser.last_name}</li>
                    <li><strong>Email:</strong> {selectedUser.email}</li>
                </ul>
                <img src={selectedUser.avatar} alt={`${selectedUser.first_name || "User"} avatar`} />
            </div>
        </>
    );
};

export default Fetch_Data_API;
