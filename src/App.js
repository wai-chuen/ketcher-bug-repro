import { useState } from "react";
import { Ketcher } from "./Ketcher";

export default function App() {
  const [show, setShow] = useState(false);
  return (
    <div>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide " : "Show "} ketcher editor
      </button>
      {show && <Ketcher />}
    </div>
  );
}
