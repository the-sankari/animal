import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { animals } from "./animalsList";

// , birds, fishes,insects

function App() {
  const [animalsData, setAnimalsData] = useState(animals);

  const removeCard = (animal) => {
    const updatedAnimals = animalsData.filter((item) => item.name !== animal);
    setAnimalsData(updatedAnimals);
  };

  const addLikes = (key) => {
    console.log({ key }, "was liked");
  };

  const removeLikes = (key) => {
    console.log("Removed like for ", { key });
  };

  return (
    <>
      <Header />
      <main className="container">
        {animalsData.map((animal) => (
          <Card
            key={animal.name}
            {...animal}
            addLikes={() => {
              addLikes(animal.name);
            }}
            removeCard={() => {
              removeCard(animal.name);
            }}
            removeLikes={() => {
              removeLikes(animal.name);
            }}
          />
        ))}
      </main>
      <Footer />
    </>
  );
}

export default App;
