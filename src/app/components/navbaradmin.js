// components/navbaradmin.js
import React from "react";
import Image from "next/image";
import Link from "next/link";

import Svg from "@/app/favicon.ico";

export default function Navbaradmin({ setSection }) {
  const handleClick = (section) => {
    setSection(section);
  };

  return (
    <nav className="navbaradmin-container">
      <h1 className="navbaradmin-title">Bonjour Admin 😊</h1>
      <p className="navbaradmin-text" onClick={() => handleClick("image-home")}>
        Images d'accueil
      </p>
      <p
        className="navbaradmin-text"
        onClick={() => handleClick("image-seance")}
      >
        Images de séance
      </p>
      <p className="navbaradmin-text" onClick={() => handleClick("events")}>
        Événements
      </p>
      <Link href="/">
        <p className="navbaradmin-text">Retournez au site</p>
      </Link>
      <Image
        className="favicon-admin"
        src={Svg}
        alt={Svg}
        width={70}
        height={70}
      />
    </nav>
  );
}
