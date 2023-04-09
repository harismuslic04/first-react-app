import React, { useState } from "react";
import "./App.css";
import Greeting from "./components/Greetings/Greeting";
import { Navbar } from "./components/Navbar/Navbar";
import PersonCard from "./components/Cards/PersonCard/PersonCard";
import persons from "./common/persons.json";

// const persons = [
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/89378479?v=4",
//     fullName: "Dzenan Kosuta",
//     description: "Dzenan is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/dzenankosuta?tab=repositories",
//   },
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/111905831?v=4",
//     fullName: "Alen Muslic",
//     description: "Alen is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/alenmuslic?tab=repositories",
//   },
//   {
//     imageURL:
//       "https://www.borisradivojkov.com/assets/images/profesionalni-poslovni-portret-rukovodioca-600x600.jpg",
//     fullName: "Aladin Zecic",
//     description: "Aladin is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/aladinzecic?tab=repositories",
//   },
//   {
//     imageURL: "https://avatars.githubusercontent.com/u/111905979?v=4",
//     fullName: "Haris Muslic",
//     description: "Haris is rising Web developer...",
//     location: "Novi pazar, Serbia",
//     goToRepositories: "https://github.com/harismuslic04?tab=repositories",
//   },
// ];

function App() {
  // const [count, setCount] = React.useState(0);
  const [count, setCount] = useState(0);
  // setCount je metoda pomocu koje menjamo vrednost count state_a:
  const increaseCount = () => {
    setCount(count + 1);
  };
  const decreaseCount = () => {
    setCount(count - 1);
  };
  // const x = 10;
  const [name, setName] = useState("");

  return (
    //  React.createElement("p", {}, "Neki paragraf");
    <>
      {" "}
      {/* Fragment - najcesce se koristi za wrappovanje */}
      <div className="App">
        <Navbar>{/* <p>Samo za primer</p> */}</Navbar>
        <Greeting appName={"Our First App"} username={"Bakir Ujkanovic"} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 380px)",
            justifyContent: "center",
            gridAutoRows: "minmax(280px, auto)",
            gridGap: "50px",
            columnGap: "30px",
          }}
        >
          {persons.map((person) => (
            <PersonCard
              imageURL={person.imageURL}
              name={person.name}
              stars={person.stars}
              rating={person.rating}
              reviews={person.reviews}
              location={person.location}
            />
          ))}
          <div>
            <button style={{ width: "40px" }} onClick={decreaseCount}>
              -
            </button>
            <p>{count}</p>
            <button
              style={{ width: "40px" }}
              onClick={() => {
                console.log("povecanje");
                setCount(count + 1);
              }}
            >
              +
            </button>
          </div>
        </div>
        <div className="formContainer">
          {" "}
          <form
            id="form"
            onSubmit={(event) => {
              event.preventDefault();
            }}
          >
            <label htmlFor="firstName">Unesite vase ime</label>
            <input
              type="text"
              id="firstName"
              required
              // innerText={"ime"}
              value={name}
              onChange={(event) => setName(event.target.value)}
            ></input>
            <br></br>
            <br></br>
            <label htmlFor="lastName">Unesite vase prezime</label>
            <input type="text" id="lastName" required></input>
            <br></br>
            <br></br>
            <label htmlFor="email">Unesite vasU adresu</label>
            <input type="email" id="email" required></input>
            <br></br>
            <br></br>
            <label htmlFor="hobi">Unesite vas hobi</label>
            <input type="text" id="hobi"></input>
            <br></br>
            <br></br>
            <label htmlFor="phone">Unesite vas broj telefona</label>
            <input type="tel" id="phone"></input>
            <br></br>
            <br></br>
            <button>Sumbit</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
