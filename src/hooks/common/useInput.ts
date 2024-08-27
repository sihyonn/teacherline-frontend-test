import { useState } from "react";

export default function useInput(defaultValue?: string) {
  const [inputText, setInputText] = useState(defaultValue || "");
  const isInputValid = inputText.trim().length > 1;
  const resetValue = () => setInputText("");

  const handleChangeInputText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  return {
    inputText,
    isInputValid,
    resetValue,
    handleChangeInputText,
  };
}
