"use client";

import React, { useEffect, useState } from "react";
import Scorm from "../scorm/Scorm";

interface DisplayItemsProps {
  initialItemId: string;
}

export default function DisplayItems({ initialItemId }: DisplayItemsProps) {
  const [currentItem, setCurrentItem] = useState<string>(initialItemId);

  useEffect(() => {
    // Initialisation de SCORM
    Scorm.init();

    return () => {
      // Terminaison de la session SCORM
      Scorm.terminate();
    };
  }, []);

  const buttonText =
    currentItem === "i1"
      ? "Compléter Item 1 et Passer à l'Item 2"
      : "Compléter Item 2";

  const handleCompleteAndNext = () => {
    // Marquer l'item actuel comme complété
    Scorm.setComplete();
  };

  return (
    <div>
      <h1>{currentItem === "i1" ? "Item 1" : "Item 2"}</h1>
      <button onClick={handleCompleteAndNext}>{buttonText}</button>
    </div>
  );
}
