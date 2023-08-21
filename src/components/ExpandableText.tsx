import { useState } from "react";

interface ExpandableTextProps {
  maxLen?: number;
  children: string;
}

function ExpandableText({ children, maxLen = 100 }: ExpandableTextProps) {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxLen) return <p>{children}</p>;

  const text = isExpanded ? children : children.substring(0, maxLen);
  return (
    <p>
      {text}...
      <button onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "less" : "more"}
      </button>
    </p>
  );
}

export default ExpandableText;
