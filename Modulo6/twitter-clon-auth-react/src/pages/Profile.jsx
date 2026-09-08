function Profile() {
  const usuario = JSON.parse(
    localStorage.getItem("usuarioActivo")
  );

  const tweets =
    JSON.parse(localStorage.getItem("tweets")) || [];

  const misTweets = tweets.filter(
    (tweet) => tweet.usuarioId === usuario.id
  );

  return (
    <section className="tarjeta">
      <h1>Mi Perfil</h1>

      <p>
        <strong>Nombre:</strong> {usuario.nombre}
      </p>

      <p>
        <strong>Correo:</strong> {usuario.email}
      </p>

      <p>
        <strong>Tweets publicados:</strong>{" "}
        {misTweets.length}
      </p>
    </section>
  );
}

export default Profile;