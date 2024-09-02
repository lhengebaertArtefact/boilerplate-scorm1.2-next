"use client";

import React, { useEffect } from "react";
import Scorm from "../scorm/Scorm";

interface ClientButtonProps {
  itemId: string;
  buttonText: string;
  onClick: () => void;
}

const ClientButton: React.FC<ClientButtonProps> = ({
  itemId,
  buttonText,
  onClick,
}) => {
  return <button onClick={onClick}>{buttonText}</button>;
};

export default ClientButton;
