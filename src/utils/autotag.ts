import { useContext } from "react";
import { AutoTagContext, createChildWrapper } from "../contexts/AutoTagContext";

interface AutoTag {
  ["data-auto-id"]: string;
}

export interface ITestable {
  testId: string;
}

export const makeTag = (...args) => {
  // Covert args to best string interpretation
  const t = args
    .map(a => {
      if (!a || typeof a === "undefined") return "";
      if (
        typeof a === "string" ||
        typeof a === "number" ||
        typeof a === "boolean"
      ) {
        return String(a);
      }
      if (a.hasOwnProperty("testId")) {
        return String(a["testId"]);
      }
      if (typeof a === "function") {
        return String(a.name);
      }
      return "";
    })
    .filter(s => /\S+/g.test(s))
    .join("_")
    .replace(/[-_\s]+/g, "-")
    .toLowerCase();

  return t;
};

const makeTagAttr = (...args): AutoTag => {
  const tag: string = makeTag(...args);

  if (!tag) return;
  return {
    "data-auto-id": tag
  };
};

export const autoTag = (...args: any[]): AutoTag => {
  return makeTagAttr(...args);
};

export const useAutoTag = (taggable: string | object): AutoTag => {
  return autoTag(taggable);
};

interface useParentTagResult {
  parentTag: string;
  wrapper: React.ReactNode;
}

export const useParentTag = (taggable: string | object): any[] => {
  const ctx = useContext(AutoTagContext);
  const tag = makeTag(ctx[ctx.length - 1], taggable);

  const wrapper = createChildWrapper(tag);

  return [tag, wrapper];
};
