import { StandaloneStructServiceProvider } from "ketcher-standalone";
import { Editor } from "ketcher-react";

import "ketcher-react/dist/index.css";

const structServiceProvider = new StandaloneStructServiceProvider();

export function Ketcher({}) {
  const onInit = (ketcher) => {
    window.ketcher = ketcher;
    ketcher.setMolecule("CCCC");
  };
  return (
    <Editor
      structServiceProvider={structServiceProvider}
      staticResourcesUrl=""
      onInit={onInit}
    />
  );
}
