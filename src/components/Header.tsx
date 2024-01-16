import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Head>
      <Link to={"/"}>
        <img src="/assets/Logo.png" alt="Logo" />
      </Link>

      <Button>შესვლა</Button>
    </Head>
  );
}

const Head = styled.header`
  padding: 2rem 7.6rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e4e3eb;
`;

const Button = styled.button`
  background: #5d37f3;
  border: none;
  border-radius: 0.8rem;
  padding: 1rem 2rem;
  color: white;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2rem;
`;
