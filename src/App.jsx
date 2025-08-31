import { Picturelist } from "./components/picturelist";
import { Container, AppBar, Toolbar, Typography, Tabs, Tab, Box } from '@mui/material';
import axios from "axios";
import { useState } from "react";

const App = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const getDataFromAPI = async (keyword) => {
    const requestUrl = `https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}`;
    const result = await axios.get(`${requestUrl}&q=${keyword}`);
    return result;
  };

  const animals = ["cat", "penguin", "horse"];

  const handleTabChange = (_, newValue) => {
    setCurrentTab(newValue);
  };

  return (
    <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh' }}>
      <AppBar position="static" sx={{ backgroundColor: '#fff', borderBottom: '1px solid #dbdbdb' }}>
        <Toolbar sx={{ justifyContent: 'center' }}>
          <Typography variant="h5" sx={{ color: '#262626', fontFamily: 'cursive', fontWeight: 'bold' }}>
            Instapet
          </Typography>
        </Toolbar>
      </AppBar>
      
      <Container maxWidth="lg" sx={{ pt: 2 }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
          <Tabs value={currentTab} onChange={handleTabChange} centered>
            <Tab label="🐱 Cat" />
            <Tab label="🐧 Penguin" />
            <Tab label="🐴 Horse" />
          </Tabs>
        </Box>
        
        <Box>
          {currentTab === 0 && <Picturelist animal={animals[0]} getData={getDataFromAPI} />}
          {currentTab === 1 && <Picturelist animal={animals[1]} getData={getDataFromAPI} />}
          {currentTab === 2 && <Picturelist animal={animals[2]} getData={getDataFromAPI} />}
        </Box>
      </Container>
    </Box>
  );
}

export default App;
