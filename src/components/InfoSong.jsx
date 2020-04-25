import React from 'react'

export default function InfoSong({informacion}) {

    // si no hay letras, retornar null
    // if there is not lyrics, return null
    if(Object.keys(informacion).length === 0) return null;

    const { strArtistThumb, strArtist, strBiographyES, strFacebook, strTwitter, strLastFMChart, strWebsite } = informacion;
    
    return (
        <div className="card shadow-md">
            <img className="w-100" src={strArtistThumb} alt="artistaImg"/>
            <h2 className="card-title font-weight-bold my-3">{strArtist}</h2>
            <div className="card-body">
                <p className="letras font-weight-bold text-secondary">{strBiographyES}</p>
            </div>
            <p className="card-text enlaces">
                    <a className="mr-2" href={`https://${strFacebook}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook"></i>
                    </a>
                    <a className="mr-2" href={`https://${strTwitter}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a className="mr-2" href={`https://${strLastFMChart}`} target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-lastfm"></i>
                    </a>
                    <a className="" href={`https://${strWebsite}`} target="_blank" rel="noopener noreferrer">
                        <i className="far fa-user"></i>
                    </a>
                </p>
        </div>
    )
}
