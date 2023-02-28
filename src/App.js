import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  let categories = {
    Business: "business",
    Entertainment: "entertainment",
    General: "general",
    Health: "health",
    Science: "science",
    Sports: "sports",
    Technology: "technology",
  };

  let countries = {
    USA: "us",
    Russia: "ru",
    India: "in",
    China: "cn",
    Japan: "jp",
    France: "fr",
    Australia: "au",
    Ukraine: "ua",
    UAE: "ae",
  };

  const [dark, setDark] = useState("light");

  const setMode = () =>{
    if(dark === "light"){
      setDark("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    }

    else{
      setDark("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  }

  return (
    <div>
      <Router>
        <Navbar categories={categories} countries={countries} dark={dark} setMode={setMode}/>
        <Routes>
          <Route
            exact
            path="/"
            element={<News key={null} category={null} country={null} dark={dark} />}
          />
          {Object.keys(categories).map((category) => {
            return (
              <Route
                exact
                path={`/${categories[category]}`}
                element={
                  <News key={category} category={category} country={null} dark={dark} />
                }
              />
            );
          })}
          {Object.keys(countries).map((country) => {
            return (
              <Route
                exact
                path={`/${countries[country]}`}
                element={
                  <News key={country} category={null} country={country} dark={dark} />
                }
              />
            );
          })}
        </Routes>
      </Router>
    </div>
  );
}

export default App;
