import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/Header';
import Title from './components/Title';
import Photo from './components/Photo';
import Copyright from './components/Copyright';
import Description from './components/Description';
import DateSelector from './components/DateSelector';
import Spinner from './components/Spinner';
import StComp from "styled-components";

function App() {

  const testPhotoApi = 'https://lambda-github-api-server.herokuapp.com/';
  const livePhotoApi = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';
  const testMode = true;
  const [photoData, setPhotoData] = useState();

  const today = new Date();
  const dd = ('0' + today.getDate()).slice(-2);
  const mm = ('0' + (today.getMonth() + 1)).slice(-2);
  const yyyy = today.getFullYear();
  const dateToday = yyyy + '-' + mm + '-' + dd;
  const [photoDate, setPhotoDate] = useState(dateToday);
  const [error, setError] = useState();

  useEffect(() => {
    axios.get(testMode ? testPhotoApi : livePhotoApi + '&date=' + photoDate)
      .then(response => {
        setPhotoData(response.data);
      })
      .catch(error => {
        setError(error);
      })
  }, [testMode, photoDate]);

  const StyledApp = StComp.div`
    text-align: center;
    max-width: 800px;
    margin: 20px auto;
    background: grey;
    padding: 50px;
    
    h1 {
      font-size: 5rem;
    }
    
    p {
      font-size: 1.5rem;
      line-height: 2rem;
      margin: 1rem 0;
    }
    
  `;

  if (photoData) {
    return (
      <StyledApp>
        <Header />
        <Title titleText={photoData.title} photoDate={photoData.date} />
        <Photo url={photoData.url} mediaType={photoData.media_type} />
        <Copyright copyrightOwner={photoData.copyright}/>
        <Description descriptionText={photoData.explanation} />
        <DateSelector photoDate={photoDate} setPhotoDate={setPhotoDate} dateToday={dateToday} />
      </StyledApp>
    );
  } else if (error) {
    return (
      <StyledApp>
        <Spinner />
        <h1>There's been an error. Please try again.</h1>
        <p>Error message: {error.message}</p>
      </StyledApp>
    );
  } else {
    return (
      <StyledApp>
        <Spinner />
      </StyledApp>
    );
  }

}

export default App;
