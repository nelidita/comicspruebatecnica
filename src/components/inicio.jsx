import React, { Fragment, useState, useEffect } from 'react'
import "./inicio.css"
import sad from '../img/sad.png'
import meh from '../img/meh.png'
import smile from '../img/smile.png'


function Inicio() {

  const [comic, setComic] = useState("")
  const [calificacion, setCalificacion] = useState("Queremos saber tu calificación")

  useEffect(async () => {
    const data = await fetch('http://localhost:5000/getData');
    const comics = await data.json();
    setComic(comics)
  }, [])

  const obtenerCalificacion = (event) => {
    const tipoCalificacion = event.target.name
    setCalificacion(tipoCalificacion)
  }

  return (
    <Fragment>
      <div className="Inicio">
        <h1>Califica tu Comic</h1>
        <h2>{comic.title}</h2>
        <img src={comic.img} alt={comic.title} />
        <div className="IconosCalificacion">
          <img onClick={obtenerCalificacion} className="icon" src={sad} name="sad" />
          <img onClick={obtenerCalificacion} className="icon" src={meh} name="meh" />
          <img onClick={obtenerCalificacion} className="icon" src={smile} name="smile" />
        </div>
        <div>
          {calificacion === "sad" ? <h3>No me gusta</h3>:""}
          {calificacion === "meh" ? <h3>mmm Normal</h3>:""}
          {calificacion === "smile" ? <h3>Me gusta mucho</h3>:""}
        </div>

      </div>
    </Fragment>
  );
}

export default Inicio;