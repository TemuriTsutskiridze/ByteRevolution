import styled from "styled-components";
import data from "../../categoryData.json";

export default function CategoryList() {
  return (
    <List>
      {data.map((item) => {
        return (
          <ListItem bg={item.bgColor} color={item.color} key={item.name}>
            {item.name}
          </ListItem>
        );
      })}
    </List>
  );
}

const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 2.4rem;
  margin-top: 6.4rem;
  list-style-type: none;
`;

const ListItem = styled.li<{ bg: string }>`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  background-color: ${(props) => props.bg};
  color: ${(props) => props.color};
  padding: 0.8rem 1.6rem;
  border-radius: 30px;
`;
