import * as React from "react";

import { useParentTag, ITestable, autoTag } from "../utils/autotag";

export const ContextChild: React.FC<ITestable> = props => {
  const [tag, ChildWrapper] = useParentTag(props);

  return (
    <div {...autoTag(tag)}>
      <ChildWrapper>{props.children}</ChildWrapper>
    </div>
  );
};
