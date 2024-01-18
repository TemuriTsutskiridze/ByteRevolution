import styled from "styled-components";
import CategoryList from "../components/Home/CategoryList";
import BlogItem from "../components/Home/BlogItem";
import { useEffect, useState } from "react";
import { Items } from "../Items";

export default function Home() {
  const [selectFilters, setSelectFilters] = useState<string[]>([]);
  const [filteredItems, setFilteredItems] = useState(Items);
  console.log(selectFilters);
  console.log(filteredItems);

  const handleFilterButtonClick = (selectedCategory: string) => {
    if (selectFilters.includes(selectedCategory)) {
      const updatedFilters = selectFilters.filter(
        (e) => e !== selectedCategory
      );
      setSelectFilters(updatedFilters);
    } else {
      setSelectFilters([...selectFilters, selectedCategory]);
    }
  };

  useEffect(() => {
    filterItems();
  }, [selectFilters]);

  const filterItems = () => {
    if (selectFilters.length > 0) {
      const tempItems = selectFilters.map((selectedCategory) => {
        const temp = Items.filter((item) =>
          item.categories.some((category) => category.name === selectedCategory)
        );
        return temp;
      });
      setFilteredItems(tempItems.flat());
    } else {
      setFilteredItems([...Items]);
    }
  };

  return (
    <Main>
      <Title>
        <h1>ბლოგი</h1>
        <img src="/assets/Blog.png" alt="Blog" />
      </Title>

      <CategoryList
        handleFilterButtonClick={handleFilterButtonClick}
        selectFilters={selectFilters}
      />
      <BlogItem filteredItems={filteredItems} />
    </Main>
  );
}

const Main = styled.div`
  padding: 6.4rem 7.6rem 9.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f3f2fa;
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  h1 {
    font-size: 6.4rem;
    font-weight: 700;
    line-height: 7.2rem;
    color: #1a1a1f;
    padding-left: 1.3rem;
  }
`;
