import { useState } from "react";

const useForm = () => {
  const [inputProduct, setInputProduct] = useState({});

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputProduct((previous) => ({
      ...previous,
      [name]: value,
    }));
  };

  return { inputProduct, setInputProduct, handleInputChange };
};

export default useForm;
