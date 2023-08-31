import { useState } from "react";
import {Button, Text} from "@chakra-ui/react";

interface ExpandableTextProps {
  maxLen?: number;
  children: string;
}

function ExpandableText({ children, maxLen = 300 }: ExpandableTextProps) {
  const [isExpanded, setExpanded] = useState(false);
  if (children.length <= maxLen) return <Text>{children}</Text>;

    if (!children) return null

  const text = isExpanded ? children : children.substring(0, maxLen);
  return (
    <Text>
      {isExpanded ? text : text + '...'}
      <Button marginLeft={2} size={"xs"} fontWeight='bold' colorScheme='yellow' onClick={() => setExpanded(!isExpanded)}>
        {isExpanded ? "show less" : "more"}
      </Button>
    </Text>
  );
}

export default ExpandableText;
