import { useState } from "react";

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);

  function handleChange(name, value) {
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function resetForm() {
    setValues(initialValues);
  }

  function validate(requiredFields) {
    for (let field of requiredFields) {
      if (!values[field] || !values[field].trim()) {
        return false;
      }
    }
    return true;
  }

  return {
    values,
    handleChange,
    resetForm,
    validate,
  };
}