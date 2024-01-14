import { useState } from "react";

export const useInput = (type?: string) => {
  const [isActive, setActive] = useState(true);
  const [inputType, setType] = useState(type);
  const handlePasswordView = () => {
    if (inputType === "password") {
      setType("text");
      setActive(false);
    } else {
      setType("password");
      setActive(true);
    }
  };
  return { isActive, handlePasswordView, inputType };
};
