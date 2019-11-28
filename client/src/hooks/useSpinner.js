import { useState } from "react";

const useSpinner = () => {
  const [isSpinnerShowed, setSpinnerVisibility] = useState(false);

  const handleSpinner = () =>
    setSpinnerVisibility(isSpinnerShowed => !isSpinnerShowed);

  return {
    handleSpinner,
    isSpinnerShowed
  };
};

export default useSpinner;
