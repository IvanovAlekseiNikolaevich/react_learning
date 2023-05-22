import { useState } from "react";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

interface ListItemProps {
  active: boolean;
}

const ListItem = styled.li<ListItemProps>`
  padding: 5px 0;
  background: ${(props) => (props.active ? "blue" : "none")};
`;

interface ListGroupProps {
  items: string[];
  headings: string;
  onSelectItem: (item: string) => void;
}
function ListGroup({ items, headings, onSelectItem }: ListGroupProps) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <>
      <h1>{headings}</h1>
      {items.length === 0 && <p>No item found</p>}
      <List>
        {items.map((elem, index) => (
          <ListItem
            active={index === selectedIndex}
            key={index}
            onClick={() => {
              setSelectedIndex(index);
              onSelectItem(elem);
            }}
          >
            {elem}
          </ListItem>
        ))}
      </List>
    </>
  );
}

export default ListGroup;
