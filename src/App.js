import "./App.css";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

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

  return (
    <div>
      <Router>
        <Navbar categories={categories} countries={countries} />
        <Routes>
          <Route
            exact
            path="/"
            element={<News key={null} category={null} country={null} />}
          />
          {Object.keys(categories).map((category) => {
            return (
              <Route
                exact
                path={`/${categories[category]}`}
                element={
                  <News key={category} category={category} country={null} />
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
                  <News key={country} category={null} country={country} />
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
