import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState } from "react";
import { Items } from "../../Items";

export default function Carousel() {
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(2);

  return (
    <>
      <CarouselContainer>
        <SimilarBlogsDiv>
          <SimilarBlogs>მსგავსი სტატიები</SimilarBlogs>
          <ButtonsDiv>
            <Prev
              onClick={() => {
                if (start > 0) {
                  setStart((prev) => --prev);
                  setEnd((next) => --next);
                }
              }}
            >
              {">"}
            </Prev>
            <Next
              onClick={() => {
                if (end < Items.length - 1) {
                  setEnd((next) => ++next);
                  setStart((prev) => ++prev);
                }
              }}
            >
              {">"}
            </Next>

            <ArrowLeft src="/assets/ArrowL.svg" alt="left" />
            <ArrowRight src="/assets/ArrowR.svg" alt="right" />
          </ButtonsDiv>
        </SimilarBlogsDiv>

        <BlogContainer>
          {Items.map((item, index) => {
            if (start <= index && end >= index) {
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
                  <Description>{`${item.description.slice(
                    0,
                    86
                  )}...`}</Description>
                  <Link to={`/${item.id}`}>
                    <ItselfLink>
                      <p>სრულად ნახვა</p>
                      <img src="/assets/Arrow.svg" />
                    </ItselfLink>
                  </Link>
                </Blog>
              );
            }
          })}
        </BlogContainer>
      </CarouselContainer>
    </>
  );
}

const CarouselContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 9.8rem;
`;

const SimilarBlogsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

const SimilarBlogs = styled.p`
  color: #1a1a1f;
  font-size: 3.2rem;
  font-weight: 700;
  line-height: 4rem;
`;

const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 11.2rem;
  position: relative;
`;

const Prev = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  border: none;
  border-radius: 50%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
`;

const Next = styled.button`
  width: 4.5rem;
  height: 4.5rem;
  border: none;
  border-radius: 50%;
  opacity: 0;
  z-index: 1;
  cursor: pointer;
`;

const ArrowLeft = styled.img`
  position: absolute;
`;
const ArrowRight = styled.img`
  position: absolute;
  left: 6.8rem;
`;

const BlogContainer = styled.div`
  display: flex;
  gap: 3.2rem;
  margin-top: 4rem;
`;

const Blog = styled.div`
  display: flex;
  flex-direction: column;
  width: 40.2rem;
  transition: 500ms opacity ease-in-out;
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
