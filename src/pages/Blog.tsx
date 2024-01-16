import { useParams } from "react-router";
import blogData from "../blogData.json";
import styled from "styled-components";

export default function Blog() {
  const { blog } = useParams<string>();
  const currentBlog = blogData.find((item) => item.id === blog);

  return <Title>{currentBlog?.name}</Title>;
}

const Title = styled.div``;
