import { useParams } from "react-router";
import blogData from "../blogData.json";
import styled from "styled-components";

export default function Blog() {
  const { blog } = useParams();
  const blogId = blog ? parseInt(blog, 10) : undefined;
  const currentBlog = blogData.find((item: TBlog) => item.id === blogId);

  return (
    <BlogPage>
      <BlogUnit>
        <Image bgimage={currentBlog?.image}></Image>
        <Name>{currentBlog?.author}</Name>
        <Date>
          {`${currentBlog?.publish_date} * ${currentBlog?.publish_date}`}{" "}
          {/* აქ მაილია ჩასასმელი მეორე დეითის მაგივრად */}
        </Date>
        <Title>{currentBlog?.title}</Title>
        <Categories key={currentBlog?.id}>
          {currentBlog?.categories.map((item) => {
            return (
              <CategoryUnit
                key={item.id}
                color={item.color}
                bgcolor={item.bgColor}
              >
                {item.name}
              </CategoryUnit>
            );
          })}
        </Categories>
        <Description1>{currentBlog?.description}</Description1>
        <Description2>{currentBlog?.description.slice(0, 526)}</Description2>
      </BlogUnit>
    </BlogPage>
  );
}

const BlogPage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 4rem 7.6rem 47.5rem;
  background: #f3f2fa;
`;

const BlogUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 72rem;
`;

const Image = styled.div<{ bgimage?: string }>`
  width: 100%;
  height: 32.8rem;
  background-image: url(${(props) => props.bgimage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0px;
  border-radius: 8px;
`;

const Name = styled.p`
  color: #1a1a1f;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
  margin-top: 4rem;
`;

const Date = styled.p`
  color: #85858d;
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 1.6rem;
  margin-top: 0.8rem;
`;

const Title = styled.p`
  color: #1a1a1f;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4rem;
  margin-top: 2.4rem;
`;

const Categories = styled.ul`
  display: flex;
  gap: 1.6rem;
  margin-top: 2.4rem;
  list-style-type: none;
`;

const CategoryUnit = styled.li<{ color: string; bgcolor: string }>`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  padding: 0.6rem 1rem;
  border-radius: 3rem;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
`;

const Description1 = styled.p`
  color: #404049;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.8rem;
  margin-top: 4rem;
`;

const Description2 = styled.p`
  color: #404049;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.8rem;
  margin-top: 4rem;
`;
