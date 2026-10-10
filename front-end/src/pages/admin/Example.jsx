import React from "react";
import { useToggle } from "../../hooks/useToggle";

const Example = () => {
  const modal = useToggle(true);
  return (
    <>
      <button onClick={modal.toggle}>Toggle</button>
      {modal.value && (
        <div>
          Noi dung modal Sieu sale 50%
          <button onClick={modal.close}>X</button>
        </div>
      )}
    </>
  );
};

export default Example;
