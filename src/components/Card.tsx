import React, { useState } from "react";

function Card({
  title,
  img,
  desc,
  horarios,
}: {
  title: string;
  img: string;
  desc: string;
  horarios: string[];
}) {
  const handleBuy = () => {
    alert("🎫 ¡Compra exitosa! ✨");
  };

  return (
    <div className="movie-card">
      <img src={img} className="movie-img" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>

        {horarios.length > 0 ? (
          <p className="card-horas">Horarios: {horarios.join(", ")}</p>
        ) : (
          <p className="card-horas">Próximamente</p>
        )}

        {horarios.length > 0 && (
          <button className="btn-buy" onClick={handleBuy}>
            Comprar boletos
          </button>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [tab, setTab] = useState("cartelera");

  const movies = [
    {
      title: "Avengers: Endgame",
      img: "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2019/03/avengers-endgame-duracion-estreno.jpg",
      desc: "Los Vengadores se reúnen para revertir el daño causado por Thanos.",
      horarios: ["14:00", "17:00", "21:00"],
    },
    {
      title: "Dune: Parte Dos (2024)",
      img: "https://i0.wp.com/elgeneracionalpost.com/wp-content/uploads/2024/02/GEoHbScagAAlN2R-e1708638890370.jpg?resize=696%2C441&ssl=1",
      desc: "Paul Atreides une fuerzas con los Fremen.",
      horarios: ["13:00", "16:30", "20:10"],
    },
    {
      title: "Godzilla x Kong (2024)",
      img: "https://m.media-amazon.com/images/M/MV5BMTY0N2MzODctY2ExYy00OWYxLTkyNDItMTVhZGIxZjliZjU5XkEyXkFqcGc@._V1_.jpg",
      desc: "Los titanes se unen contra una amenaza aún mayor.",
      horarios: ["12:00", "15:00", "19:45"],
    },
    {
      title: "Deadpool & Wolverine (2024)",
      img: "https://pics.filmaffinity.com/Deadpool_y_Lobezno-531344725-large.jpg",
      desc: "Una alianza inesperada llena de acción y comedia.",
      horarios: ["11:00", "14:30", "18:40"],
    },
    {
      title: "Joker 2",
      img: "https://images.justwatch.com/poster/313402238/s718/joker-2.jpg",
      desc: "El Joker regresa con una historia psicológica intensa.",
      horarios: ["10:00", "13:00", "20:00"],
    },
  ];

  
  const upcoming = [
    {
      title: "Avatar 3 (2025)",
      img: "https://kchcomunicacion.com/wp-content/uploads/2023/12/Avatar-3.jpg",
      desc: "Nueva entrega del mundo de Pandora.",
      horarios: [],
    },
    {
      title: "Superman: Legacy (2025)",
      img: "https://m.media-amazon.com/images/M/MV5BNzJjNDYxYzUtNTBkYy00NDY3LWIyMzUtOTBhODRjOTM4ZTgxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      desc: "El reinicio oficial del universo DC.",
      horarios: [],
    },
    {
      title: "Spider-Man: Beyond the Spider-Verse",
      img: "https://comicbookclublive.com/wp-content/uploads/2025/04/spider-man-across-the-spider-verse-crop.webp",
      desc: "Miles Morales regresa al multiverso animado.",
      horarios: [],
    },
    {
      title: "Frozen 3",
      img: "https://i.ytimg.com/vi/ijlEroN9f78/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCsDBiXXkYq3I8_sOgiqQmz6xwvhg",
      desc: "El regreso de Elsa y Anna en una nueva aventura.",
      horarios: [],
    },
  ];

  return (
    <div className="page-root">
      <style>{`
        * { box-sizing: border-box; }
        body, html, #root { margin: 0; padding: 0; height: 100%; }

        .page-root { font-family: Arial, Helvetica, sans-serif; background:#f5f5f5; min-height:100vh; }

        .navbar { background: #000; color: #fff; padding: 10px 20px; display:flex; align-items:center; justify-content:space-between; }
        .brand { font-weight:700; color:#ffd400; font-size:18px; }

        .controls select, .controls button { margin-left:10px; padding:6px 8px; }

        .banner { background-image: url('https://img.freepik.com/foto-gratis/surtido-elementos-cine-sobre-fondo-rojo-espacio-copia_23-2148457848.jpg?semt=ais_hybrid&w=740&q=80'); background-size:cover; background-position:center; padding:60px 20px; color:white; text-align:center; text-shadow:0 2px 6px rgba(0,0,0,0.6); }
        .banner h1 { margin:0; font-size:28px; }

        .tabs { display:flex; gap:20px; padding:14px 20px; border-bottom:1px solid rgba(0,0,0,0.1); cursor:pointer; }
        .tabs div { padding-bottom:6px; }
        .tabs .active { color:#0b74d1; border-bottom:3px solid #0b74d1; }

        .movies-grid { max-width:1200px; margin:20px auto; padding:0 16px; display:grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap:20px; }

        .movie-card { background:#fff; border-radius:8px; overflow:hidden; box-shadow:0 6px 18px rgba(0,0,0,0.06); display:flex; flex-direction:column; }
        .movie-img { width:100%; height:180px; object-fit:cover; display:block; }
        .card-body { padding:14px; flex:1; display:flex; flex-direction:column; }
        .card-title { font-size:18px; margin:0 0 8px 0; }
        .card-text { color:#555; font-size:14px; margin:0 0 10px 0; flex:1; }
        .card-horas { font-weight:600; margin-bottom:12px; font-size:14px; }
        .btn-buy { background:#0b74d1; color:white; border:none; padding:10px 12px; border-radius:6px; cursor:pointer; }
        .btn-buy:hover { opacity:0.95; transform:translateY(-1px); }

        .footer { text-align:center; padding:18px 10px; color:#666; font-size:13px; margin-top:40px; }

        @media (max-width:600px) {
          .banner { padding:40px 12px; }
          .banner h1 { font-size:20px; }
          .movie-img { height:150px; }
        }
      `}</style>

      {/* NAVBAR */}
      <header className="navbar">
        <div className="brand">Cine Yavirac</div>

        <div className="controls">
          <select>
            <option>Quito</option>
            <option>Guayaquil</option>
            <option>Cuenca</option>
          </select>

          <select>
            <option>6 Dic</option>
            <option>7 Dic</option>
            <option>8 Dic</option>
          </select>

          <button>Iniciar Sesión</button>
        </div>
      </header>

      {/* BANNER */}
      <div className="banner">
        <h1>🎬 {tab === "cartelera" ? "Cartelera del Día" : "Próximos Estrenos 2025"}</h1>
      </div>

      {/* TABS */}
      <nav className="tabs">
        <div className={tab === "cartelera" ? "active" : ""} onClick={() => setTab("cartelera")}>
          Cartelera
        </div>

        <div className={tab === "estrenos" ? "active" : ""} onClick={() => setTab("estrenos")}>
          Próximos estrenos
        </div>
      </nav>

      {/* CONTENT */}
      <main>
        <section className="movies-grid">
          {(tab === "cartelera" ? movies : upcoming).map((m, i) => (
            <Card key={i} {...m} />
          ))}
        </section>
      </main>

      <footer className="footer">© {new Date().getFullYear()} Póngame 10 — gracias</footer>
    </div>
  );
}
