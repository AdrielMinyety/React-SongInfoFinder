import React, {useState, useEffect} from 'react';
import './App.css';
import Formulario from './components/Formulario';
import axios from 'axios';
import LetraCancion from './components/LetraCancion';
import InfoSong from './components/InfoSong';
import Spinner from './components/Spinner';

function App() {

  // establecer estado
  // set state
  const [busqueda, setBusqueda] = useState({
    cancion : '',
    artista : '',
  });
  const [loading, setLoading] = useState(false);
  const [letras, setLetras] = useState('');
  const [informacion, setInformacion] = useState('');

  // detectar cambios
  // detect changes
  useEffect(() => {

    if(busqueda.cancion === '' || busqueda.artista === '' ) return;

    const consultarAPI = async () => {
      // destructuring
      const {artista, cancion} = busqueda;
      
      // Cargando
      // loading
      setLoading(true);

      // consultas
      const consultaLyrics = `https://api.lyrics.ovh/v1/${artista}/${cancion}`;
      const consultaBio = `https://www.theaudiodb.com/api/v1/json/1/search.php?s=${artista}`;

      // obtener respuesta
      // get response
      const [letrasResp, informacionResp] = await Promise.all([
        axios(consultaLyrics),
        axios(consultaBio)
      ]);
      // Parar spinner
      // Stop spinner
      setLoading(false);
      // Si todo esta bien, guardar en el state
      // if all is fine, save in the state
      setLetras(letrasResp.data.lyrics);
      setInformacion(informacionResp.data.artists[0]);
    }
    consultarAPI();
    
  }, [busqueda]);

  // clickear btn abajo
  // click btn down
  const handleClick = () => {
    // si no hay letras, no hacer nada
    // if there is not lyrics, do not anything
    if (letras === '') return null;
    // mover pantalla hasta las letras
    // move the screen to the lyrics
    const lyricsComponent = document.querySelector("#letraCancion");
    console.log(lyricsComponent.scrollIntoView({behavior : 'smooth'}));
  }

  return (
    <div className="App">
      <div 
        onClick={handleClick} 
        className="moveDown fixed-top rounded-pill bg-white shadow m-2 p-1" 
        style={{width : '2rem'}}>
          <i className="fas fa-sort-down"></i>
      </div>

      <div className="container-fluid p-5 bg-dark text-white shadow">        
        <h1 className="mb-5 text-center">Tu Canción</h1>
        <Formulario
          setBusqueda={setBusqueda}
        />
      </div>
      <div className="container my-5">
        {(loading)?
          <Spinner/>
        :
          null
        }
        <div className="row">
          <div className="col-md-6">
            <InfoSong
              informacion={informacion}
              />
          </div>
          <div id="letraCancion" className="col-md-6">
            <LetraCancion
              letras={letras}
              />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
