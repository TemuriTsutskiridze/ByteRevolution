import styled from "styled-components";
import CategoryList from "../components/Home/CategoryList";
import BlogItem from "../components/Home/BlogItem";

export default function Home() {
  return (
    <Main>
      <Title>
        <h1>ბლოგი</h1>
        <img src="/assets/Blog.png" alt="Blog" />
      </Title>
      <CategoryList />
      <BlogItem />
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
