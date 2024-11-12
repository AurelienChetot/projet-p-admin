import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar-container">
      <a className="navbar-text">Accueil</a>
      <a className="navbar-text">Mes séances</a>
      <a className="navbar-text">Objectif</a>
      <a className="navbar-text">Événement</a>
      <a className="navbar-text">Contact</a>
      <a className="navbar-text">Connexion</a>
      <Link href="/admin">
        <p className="navbar-text">Admin</p>
      </Link>
    </nav>
  );
}
