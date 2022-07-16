import { Picturelist } from "./components/picturelist";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Container,Button,ButtonGroup  } from '@mui/material';
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
      <Container fixed>
      <h1>かわいい動物の画像を見て癒されよう！</h1>
      <ButtonGroup variant="outlined" aria-label="outlined button group">
        <Button
          component={Link}
          to="/cat"
        >Cat</Button>
        <Button
          component={Link}
          to="/penguin"        
        >Penguin</Button>
        <Button
          component={Link}
          to="/horse"        
        >Horse</Button>
      </ButtonGroup>

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
      </Container>
    </BrowserRouter>
  );
}

export default App;
