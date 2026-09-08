import { useEffect, useState } from "react";

function Home() {
  const usuario = JSON.parse(
    localStorage.getItem("usuarioActivo")
  );

  const [tweet, setTweet] = useState("");

  const [tweets, setTweets] = useState(() => {
    return JSON.parse(localStorage.getItem("tweets")) || [];
  });

  useEffect(() => {
    localStorage.setItem(
      "tweets",
      JSON.stringify(tweets)
    );
  }, [tweets]);

  const publicarTweet = (e) => {
    e.preventDefault();

    const texto = tweet.trim();

    if (!texto) return;

    const nuevoTweet = {
      id: Date.now(),
      autor: usuario.nombre,
      usuarioId: usuario.id,
      texto,
      fecha: new Date().toLocaleString(),
    };

    setTweets((tweetsActuales) => [
      nuevoTweet,
      ...tweetsActuales,
    ]);

    setTweet("");
  };

  const eliminarTweet = (id) => {
    setTweets((tweetsActuales) =>
      tweetsActuales.filter(
        (tweet) => tweet.id !== id
      )
    );
  };

  return (
    <section className="feed">
      <div className="tarjeta">
        <h1>Inicio</h1>

        <p>
          Hola, <strong>{usuario.nombre}</strong>
        </p>

        <form
          className="formulario-tweet"
          onSubmit={publicarTweet}
        >
          <textarea
            placeholder="¿Qué está pasando?"
            value={tweet}
            onChange={(e) =>
              setTweet(e.target.value)
            }
            maxLength={280}
          />

          <div className="tweet-footer">
            <span>
              {tweet.length}/280
            </span>

            <button type="submit">
              Publicar
            </button>
          </div>
        </form>
      </div>

      <div className="tweets">
        {tweets.length === 0 && (
          <p className="sin-tweets">
            No hay tweets todavía.
          </p>
        )}

        {tweets.map((item) => (
          <article
            className="tweet"
            key={item.id}
          >
            <div className="tweet-header">
              <strong>
                {item.autor}
              </strong>

              <span>
                {item.fecha}
              </span>
            </div>

            <p>{item.texto}</p>

            {item.usuarioId === usuario.id && (
              <button
                className="eliminar"
                onClick={() =>
                  eliminarTweet(item.id)
                }
              >
                Eliminar
              </button>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}

export default Home;