import { useParams } from "react-router";
import blogData from "../blogData.json";
import styled from "styled-components";

export default function Blog() {
  const { blog } = useParams();
  const blogId = blog ? parseInt(blog, 10) : undefined;
  const currentBlog = blogData.find((item: TBlog) => item.id === blogId);

  return <Title>{currentBlog?.author}</Title>;
}

const Title = styled.div``;
