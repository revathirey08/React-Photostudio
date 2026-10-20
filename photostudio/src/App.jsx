import { useState } from "react";
import PhotoCard from "./components/PhotoCard";
import "./App.css";
function App() {
  const [count, setCount] = useState(5);
     const photos=[{
      name: "Wedding Shoot",
      location: "Chennai",
      price: 15000
    },
    {
      name: "Passport Shoot",
      location: "Cuddalore",
      price: 5000
    },
    {
      name: "Birthday Shoot",
      location: "Bangalore",
      price: 20000
    },
    {
      name: "Baby Shoot",
      location: "Pondicherry",
      price: 13000
    },
    {
      name: "Outdoor Shoot",
      location: "Kerala",
      price: 4000
    }
  ];

  return (
    <div>
      <h1>Nebula Photo Studio</h1>
      <h2>Total photos:{count}</h2>
      <button onClick={() => setCount(count + 1)}>Add Photo</button>
      <button onClick={() => setCount(count - 1)}>Remove Photo</button>
      {photos.map((photo, index) => (
        <PhotoCard
          key={index}
          name={photo.name}
          location={photo.location}
          price={photo.price}
        />
      ))}
      <footer>@Nebula146 Photo Studio</footer>
    </div>
  );
}
export default App;
      