import React, { Component } from "react";
import "./styles.css";
import Movies from "./components/movies";
import Series from "./components/series";
import Home from "./components/Home";
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
import Carousel from "react-elastic-carousel"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    font-family:'IBM Plex Mono', monospace;
    font-weight: 300;
    text-decoration: none;
    color: white;
    list-style: none;
  }
 ` 
const TitleUm = styled.h1`
color: white;
font-family: Changa;
font-size: 8vw;
font-weight: 800;
text-decoration: none;
margin-left: 18vw;
@media(max-width: 800px) {
  font-size: 20vw;
  margin-left: 0;
  }

`
const TitleDois = styled.h1`
font-size: 8vw;
color: #FAF33E;
font-family: Changa;
font-weight: 800;
text-decoration: none;
position: relative;
bottom: 15vw;
left: 30vw;
@media(max-width: 800px) {
  font-size: 20vw;
  bottom: 37vw;
left: 30vw;
  }
`
const ContainerTitle = styled.div`
display:flex;
width: 100%;
height: 30vw;
justify-content: center;
margin-left: -30vw;
`
const Navegation = styled.nav`
margin-bottom: -15vw;
margin-top: -18vw;
@media(max-width: 800px) {
  margin-top: 5vw;
  margin-bottom: 0;
  }
`
const Containerum = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100%;
height: 100%;
margin-top: -3vw;
flex-wrap: wrap;
@media(max-width: 800px) {
  margin-top: -6vw;
  }
`
const Listaum = styled.li`
font-size: 2vw;
font-weight: 800;
margin-top: -3vw;
&:hover {
color:#FAF33E;
font-weight:600;
}
@media(max-width: 800px) {
  font-size: 7vw;
  margin-top:0;
  }

`
const Listadois = styled.li`
font-size: 2vw;
font-family: 'IBM Plex Mono'monospace;
margin-top: 2vw;
margin-left: 0.5vw;
&:hover {
font-weight: 900;
color: #FAF33E;
}
@media(max-width: 800px) {
  font-size: 7vw;
  margin-top: 5vw;
}

`
const ListSpan = styled.span`
&:hover {
font-weight: 900;
color: #FAF33E;
}`

const ListParagrafo = styled.p`
position: relative;
margin-left: 22vw;
right: 20vw;
top: 5vw;
&:hover {
font-weight: 900;
color: #FAF33E;
}
`
const ULista = styled.ul`
display: flex;

`



class App extends Component {
  render() {
    return (
      <Router>
      <GlobalStyle />
        <Containerum>
          <ContainerTitle>
          <Link to="/"><TitleUm>Jão</TitleUm><TitleDois>Flix</TitleDois></Link>
          </ContainerTitle>
          <Navegation>
            <ULista>
              
              <Listaum>
                <Link to="/movies"><ListParagrafo>Filmes</ListParagrafo></Link>
              </Listaum>
              <Listadois>
                <Link to="/series"><ListSpan>Series</ListSpan></Link>
              </Listadois>
            </ULista>
          </Navegation>

          <Switch>
            <Route path="/series">
              <Series />
            </Route>
            <Route path="/movies">
              <Movies />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </Containerum>
        <style>
@import url('https://fonts.googleapis.com/css2?family=Changa:wght@200;300;400;500;600;700;800&family=Fredoka:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
</style>
      </Router>
    );
  }
}

export default App;

