import { useCallback } from "react";
import { useState } from "react";

export const useToggle = (initial = false) => {
  const [value, setValue] = useState(initial);
  const toggle = useCallback(() => setValue((prev) => !prev), []);
  const open = useCallback(() => setValue(true), []);
  const close = useCallback(() => setValue(false), []);
  return { value, toggle, open, close };
};
