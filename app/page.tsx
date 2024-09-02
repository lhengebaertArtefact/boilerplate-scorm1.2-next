"use client";
import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1>Bienvenue sur le module SCORM</h1>
      <p>Veuillez sélectionner un item pour commencer le cours :</p>
      <ul>
        <li>
          <Link href="/items/i1">Item 1</Link>
        </li>
        <li>
          <Link href="/items/i2">Item 2</Link>
        </li>
      </ul>
    </div>
  );
}
