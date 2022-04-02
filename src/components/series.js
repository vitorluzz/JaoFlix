// imports
import React, { Component } from "react";
import axios from "axios";
import Carousel from "react-elastic-carousel"
import styled from "styled-components"
import { createGlobalStyle } from 'styled-components'
// url base da API que estamos consumindo
const MoviesApi = axios.create({
  baseURL: "https://api.themoviedb.org/3/tv/popular?api_key=f4e204f2e412daca7797cf2d97b76838&language=en-US&page=1"
});


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
const Titulo = styled.p`
font-family: Changa;
font-size: 2vw;
font-weight: 800;
color: #FAF33E;
@media(max-width: 800px) {
  font-size: 3.5vh;
  }
`

const Voto = styled.span`
background-color: azure;
color: #094074;
border-radius: 1.5vw;
font-family: Fredoka;
border: 1px solid #5ADBFF;
margin-left: 5vw;

`

const Sinopse = styled.p`
font-size: 1.5vw;
margin-top: 1vw;
@media(max-width: 800px) {
  font-size: 2.5vw;
  }
`
const DivInf = styled.div`
margin-left: 5vw;

display: flex;
flex-direction: column;

`
const Divpai = styled.div`
display: flex;
width: 50vw;
border: 2px solid white;
margin-bottom: 5vw;
padding: 3vw;
padding-top: 10vw;
border-radius: 5vw;
margin-left: 16vw;
@media(max-width: 800px) {
  width: 80vw;
  margin-left: 0;
  }
&:hover{
       -webkit-transform: scale(1.1);
   transform: scale(1.1);
   }

`

const DivisaoDois = styled.div`


`
const Divisao = styled.div`
display: flex;
margin-bottom: 15vw;
flex-direction: column;
flex-wrap: wrap;

-webkit-transition: -webkit-transform .2s ease;
   transition: transform .4s ease;
`

const Imagem = styled.img`
width: 15vw;
height: 25vw;
margin-top: 2vw;
border-radius: 3vw;
cursor: pointer;
-webkit-transition: -webkit-transform .5s ease;
   transition: transform .5s ease;
   @media(max-width: 800px) {
    width: 30vw;
height: 50vw;
  }
   &:hover{
       -webkit-transform: scale(1.1);
   transform: scale(1.1);
   }
`

const Container = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
wrap: wrap;
width: 30vw;
margin-right: 50vw;
`

const Secao = styled.section`
display: flex;
justify-content: center;
flex-direction: column;
wrap: wrap;
width: 30vw;
margin-right: 50vw;

`
const ContainerTitulo = styled.div`
display: flex;
justify-content: center;
width: 82vw;
height: 100%;
margin-top: 10vw;
`
const TitleFilmes = styled.h2`
margin-bottom: 2vw;
margin-top: 10vw;
text-align: center;
font-size: 3vw;
font-family: Changa;
font-weight: 100;
color: #FAF33E;
border: 2px 5px solid white;
@media(max-width: 800px) {
  font-size: 10vw;
  }
`
class Movies extends Component {
  state = {
    movies: []
  };

  // Invoca imediatamente após um componente ser montado
  componentDidMount() {
    this.getMovies();
  }

  // Função que trás os dados da API
  getMovies = async () => {
    const response = await MoviesApi.get();
    console.log("Filmes:", response.data.results);

    const completeMovies = response.data.results.map((item) => {
      return {
        ...item,
        poster_path: `https://image.tmdb.org/t/p/w500${item.poster_path}`
      };
    });

    this.setState({
      movies: completeMovies
    });
  };

  render() {
    return (
      <Secao>
      <GlobalStyle />
        <ContainerTitulo>
        <TitleFilmes>Séries</TitleFilmes>
        </ContainerTitulo>

    
        <Container>
       
          {this.state.movies.map((item, id) => (
           <Divpai>
            <Divisao key={id}>
            
                <Imagem src={item.poster_path} alt="" />
            </Divisao>

            <DivInf>
              <Titulo>{item.name}<Voto>{item.vote_average}</Voto></Titulo>
             
              <Sinopse>{item.overview}</Sinopse>
              
            </DivInf>
            </Divpai>
            
          ))}
        </Container>
        
      </Secao>
    );
  }
}

export default Movies;
