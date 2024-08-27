import { useState } from "react";

interface useCheckboxProps {
  defaultValue?: boolean;
}

export default function useCheckbox({ defaultValue }: useCheckboxProps) {
  const [isChecked, setIsChecked] = useState(defaultValue || false);

  const onChangeChecked = (e: React.ChangeEvent<HTMLInputElement>) =>
    setIsChecked(e.target.checked);

  return {
    isChecked,
    onChangeChecked,
  };
}
