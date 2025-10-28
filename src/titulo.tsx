function titulo(){
  const nombre = "MI PANA";
  if (nombre){
    return <p>HOLA {nombre}</p>;
  }
  return <p>HOLA MUNDO</p>;
}

export default titulo;