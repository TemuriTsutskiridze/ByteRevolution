import styled from "styled-components";
import data from "../../categoryData.json";

interface CategoryListProps {
  handleFilterButtonClick: (selectedCategory: string) => void;
  selectFilters: string[];
}

export default function CategoryList({
  handleFilterButtonClick,
  selectFilters,
}: CategoryListProps) {
  return (
    <FilterDiv>
      {data.map((item) => {
        return (
          <ListItem
            key={item.name}
            style={
              selectFilters.includes(item.name)
                ? { border: "1px solid black" }
                : {}
            }
            backgr={item.bgColor}
            color={item.color}
            onClick={() => handleFilterButtonClick(item.name)}
          >
            {item.name}
          </ListItem>
        );
      })}
    </FilterDiv>
  );
}

const ListItem = styled.div<{ backgr: string }>`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  padding: 0.8rem 1.6rem;
  border-radius: 30px;
  background-color: ${(props) => props.backgr};
  color: ${(props) => props.color};
  cursor: pointer;
`;

const FilterDiv = styled.div`
  display: flex;
  margin-top: 6.4rem;
  gap: 2.4rem;
`;
