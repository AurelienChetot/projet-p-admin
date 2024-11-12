"use client";

import { useEffect, useRef } from "react";

export default function Header() {
  // Références pour accéder aux éléments à modifier
  const shadeRef = useRef(null);
  const bgRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    // Gerer l'effet de défillement
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const opacity = scrollTop / 500;
      const scale = 1 + scrollTop * 0.0004;
      const marginTop = -(1 + scrollTop * 0.2) + "px";

      // Met a jour le style via les ref
      if (shadeRef.current) shadeRef.current.style.opacity = opacity;
      if (bgRef.current) bgRef.current.style.transform = `scale(${scale})`;
      if (textRef.current) textRef.current.style.marginTop = marginTop;
    };

    // Ajout de l'evenement scroll
    window.addEventListener("scroll", handleScroll);

    // enlève l'evenement scroll
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header>
      <div className="heroEffects">
        <div className="bg" ref={bgRef}>
          <div className="arrow bouncy">
            <svg height="25" width="50">
              <polygon
                points="0,0 25,10 50,0 25,25"
                fill="#FFFFFF"
                strokeWidth="1.5"
                stroke="#111"
              />
            </svg>
          </div>
          <div className="title centerV">
            <div>
              <div className="text" ref={textRef}>
                <h1>Patricia Deias</h1>
                <p>Accompagnement Personnel & Professionnel</p>
              </div>
            </div>
          </div>
        </div>
        <div className="shade" ref={shadeRef}></div>
      </div>
    </header>
  );
}
