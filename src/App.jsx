import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import { animals } from "./animalsList";

// , birds, fishes,insects

function App() {
  const [animalsData, setanimals] = useState(animals);
  const removeCard = (key) => {
    const newAnimals = animalsData.filter((animal) => {
      animal.name !==key;
    });
    setanimals(newAnimals);
    console.log({ key }, " was removed");
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
        {animals.map((animal) => (
          <Card
            key={animal.name}
            {...animal}
            addLikes={() => {
              addLikes(animal.name);
            }}
            removeCard={removeCard.bind(this, animal.name)}
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
