import * as React from "react";
import { useContext } from "react";
import { makeTag } from "../utils/autotag";

export const AutoTagContext = React.createContext<string[]>([]);

export const createChildWrapper = (parentTag: string) => props => {
  const ctx = useContext(AutoTagContext);
  const newCtx = [...ctx];
  newCtx.push(parentTag);

  return (
    <AutoTagContext.Provider value={newCtx}>
      {props.children}
    </AutoTagContext.Provider>
  );
};

export const useAutoTag = (tag: string) => {
  const ctx = useContext(AutoTagContext);

  const parentTag = ctx[ctx.length - 1];

  return makeTag(parentTag, tag);
};
