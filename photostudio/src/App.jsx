import PhotoCard from "./components/PhotoCard";
import "./App.css";
function App() {
  return (
    <div>
      <h1>Nebula Photo Studio</h1>
      <PhotoCard
      name="Wedding Shoot"
      location="Chennai"
      price={15000}
      />
      <PhotoCard
      name="Passport Shoot"
      location="Cuddalore"
      price={5000}
      />
      <PhotoCard
      name="Birthday Shoot"
      location="Bangalore"
      price={20000}
      />
      <PhotoCard
      name="Baby Shoot"
      location="Pondicherry"
      price={13000}
      />
      <PhotoCard
      name="outdoor Shoot"
      location="Kerala"
      price={4000}
      />
      <footer>@Nebula Photo Studio</footer>

    </div>
  );
}
  export default App;