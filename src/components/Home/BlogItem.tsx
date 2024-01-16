import styled from "styled-components";
import blogData from "../../blogData.json";
import { Link } from "react-router-dom";

export default function BlogItem() {
  return (
    <>
      <BlogContainer>
        {blogData.map((item) => {
          return (
            <Blog key={item.id}>
              <img src={item.image} alt="image" />
              <Name>{item.author}</Name>
              <Date>{item.publish_date}</Date>
              <Title>{item.title}</Title>
              <Categories>
                {item.categories.map((category) => (
                  <ListItem
                    key={category.name}
                    name={category.name}
                    color={category.color}
                    bgcolor={category.bgColor}
                  >
                    {category.name}
                  </ListItem>
                ))}
              </Categories>
              <Description>{`${item.description.slice(0, 86)}...`}</Description>
              <Link to={`/${item.id}`}>
                <ItselfLink>
                  <p>სრულად ნახვა</p>
                  <img src="/assets/Arrow.svg" />
                </ItselfLink>
              </Link>
            </Blog>
          );
        })}
      </BlogContainer>
    </>
  );
}

const BlogContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3.2rem;
  margin-top: 6.4rem;
`;

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.2rem;
`;

const Name = styled.p`
  color: #1a1a1f;
  font-size: 1.6rem;
  font-weight: 500;
  line-height: 2rem;
  margin-top: 2.4rem;
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
  font-size: 2rem;
  font-weight: 500;
  line-height: 2.8rem;
  margin-top: 1.6rem;
`;

const Categories = styled.ul`
  display: flex;
  gap: 1.6rem;
  list-style-type: none;
  margin-top: 1.6rem;
`;

const ListItem = styled.li<{ name: string; color: string; bgcolor: string }>`
  font-size: 1.2rem;
  font-weight: 500;
  line-height: 1.6rem;
  padding: 0.8rem 1.6rem;
  border-radius: 30px;
  background-color: ${(props) => props.bgcolor};
  color: ${(props) => props.color};
`;

const Description = styled.p`
  color: #404049;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.8rem;
  margin-top: 1.6rem;
`;

const ItselfLink = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.6rem;
  p {
    color: #5d37f3;
    font-size: 1.4rem;
    font-weight: 500;
    line-height: 2rem;
  }
`;
