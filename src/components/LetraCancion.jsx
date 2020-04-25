import React from 'react'

export default function LetraCancion({letras}) {

    // si no hay letras, retornar null
    // if there is not lyrics, return null
    if(letras === '') return null;

    return (
        <div className="card bg-dark text-light shadow-md p-3">
            <h2 className="card-title font-weight-bold">Letras</h2>
            <p className="letras font-weight-bold text-secondary">{letras}</p>
        </div>
    )
}
