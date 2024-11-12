// pages/admin/index.js
"use client";

import { useState } from "react";
import Navbar from "@/app/components/navbaradmin";
import ImageHomeManager from "@/app/components/imagehomemanager";
import EventManager from "@/app/components/eventmanager";
import ImageSeanceManager from "@/app/components/imagehomemanager";

export default function AdminPage() {
  const [section, setSection] = useState("image-home");

  const renderSection = () => {
    switch (section) {
      case "image-home":
        return <ImageHomeManager />;
      case "events":
        return <EventManager />;
      case "image-seance":
        return <ImageSeanceManager />;
      default:
        return <ImageHomeManager />;
    }
  };

  return (
    <div className="admin-page-container">
      <Navbar setSection={setSection} />
      <div>{renderSection()} </div>
    </div>
  );
}
