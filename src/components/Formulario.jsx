import React, {useState, useEffect} from 'react'

export default function Formulario({setBusqueda}) {

    // definir estado
    // set state
    const [cancion, setCancion] = useState('');
    const [artista, setArtista] = useState('');
    const [buscar, setBuscar] = useState(false);

    // actualizar state
    // update state
    const handleChangeCancion = (e) => {
        setCancion(e.target.value);
    }
    const handleChangeArtiste = (e) => {
        setArtista(e.target.value);
    }

    // aparecer o no, el btn de buscar si hay datos
    // apear or not, the subtmit's btn if there is data
    useEffect(() => {
        if(artista !== '' && cancion !== '') {
            setBuscar(true);
        }else {
            setBuscar(false);
        }
    }, [artista, cancion])

    // enviar datos al componente principal, mediante props
    // submit data to the main component, throw props
    const handleSubmit = (e) => {
        e.preventDefault();
        if(artista === '' || cancion === '') return;
        setBusqueda({
            artista, cancion
        })
    }

    return (
        <form 
            className="mx-auto" 
            style={{'width': '80%'}}
            onSubmit={handleSubmit}>
            
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    onChange={handleChangeCancion}
                    value={cancion} 
                    placeholder="Nombre de la canción"/>
            </div>
            <div className="form-group">
                <input 
                    type="text" 
                    className="form-control"
                    onChange={handleChangeArtiste}
                    value={artista} 
                    placeholder="Nombre del artista"/>
            </div>
            {(buscar)?
                <button className="btn btn-secondary btn-block font-weight-bold" type="submit">Buscar</button>
            :
                null
            }
        </form>
    )
}
