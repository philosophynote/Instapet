import { Picturelist } from "./components/picturelist";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import axios from "axios";

const App = () => {
  const getDataFromAPI = async (keyword) => {
    const requestUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}`; //後でAPIキーを.envに移す
    const result = await axios.get(`${requestUrl}&q=${keyword}`);
    return result;
  };

  const animals = ["cat", "penguin", "horse"];
  return (
    <BrowserRouter  >
      <h1>react app</h1>
      <ul>
        <li>
          <Link to="/cat">Cat</Link>
        </li>
        <li>
          <Link to="/penguin">Penguin</Link>
        </li>
        <li>
          <Link to="/horse">Horse</Link>
        </li>
      </ul>
      <hr />
      <Routes>
        <Route
          path="/cat"
          element={
            <Picturelist animal={animals[0]} getData={getDataFromAPI} />
          }
        />
        <Route
          path="/penguin"
          element={
            <Picturelist animal={animals[1]} getData={getDataFromAPI} />
          }
        />
        <Route
          path="/horse"
          element={
            <Picturelist animal={animals[2]} getData={getDataFromAPI} />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
