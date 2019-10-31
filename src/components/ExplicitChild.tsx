import * as React from "react";
import { autoTag, ITestable } from "../utils/autotag";

interface PropTypes extends ITestable {
  name: string;
}

export const ExplicitChild: React.FC<PropTypes> = ({
  name,
  testId,
  children,
  ...rest
}) => {
  return (
    <div {...autoTag(testId)} {...rest}>
      {name}
      {children}
    </div>
  );
};
