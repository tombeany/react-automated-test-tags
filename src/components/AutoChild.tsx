import * as React from "react";
import { useAutoTag } from "../utils/autotag";

export const AutoChild = props => {
  const autoTag = useAutoTag("Child");

  return (
    <div {...autoTag}>
      Hello
      {props.children}
    </div>
  );
};
