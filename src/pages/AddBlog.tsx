import img from "/public/folder-add.png";
import styled from "styled-components";

export default function AddBlog() {
  return (
    <Container>
      <BlogForm>
        <div>
          <h1>ბლოგის დამატება</h1>
          <div>
            <h3>ატვირთეთ ფოტო</h3>
            <div className="addPhoto">
              <input type="file" />
              <img src={img} alt="img" />
              <p>
                ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span>
              </p>
            </div>
          </div>
          <div className="sections">
            <section className="author-title">
              <div className="author">
                <h3>ავტორი *</h3>
                <input type="text" placeholder="შეიყვანეთ ავტორი" />
                <ul>
                  <li>მინიმუმ 4 სიმბოლო </li>
                  <li>მინიმუმ ორი სიტყვა</li>
                  <li>მხოლოდ ქართული სიმბოლოები</li>
                </ul>
              </div>
              <div className="title">
                <h3>სათაური *</h3>
                <input type="text" placeholder="შეიყვანეთ სათაური" />
                <ul>
                  <li>მინიმუმ 2 სიმბოლო </li>
                </ul>
              </div>
            </section>
            <section className="describe">
              <h3>აღწერა *</h3>
              <input type="text" placeholder="შეიყვანეთ აღწერა" />
              <ul>
                <li>მინიმუმ 2 სიმბოლო </li>
              </ul>
            </section>
            <section className="date-category-mail">
              <div className="date">
                <h3>გამოქვეყნების თარიღი *</h3>
                <input type="date" />
              </div>
              <div className="category">
                <h3>კატეგორია *</h3>
                <input type="text" placeholder="აირჩიეთ კატეგორია" />
              </div>
              <div className="mail">
                <h3>ელ-ფოსტა *</h3>
                <input type="text" placeholder="Example@redberry.ge" />
              </div>
            </section>
          </div>
        </div>
      </BlogForm>
    </Container>
  );
}

const Container = styled.div`
  font-family: FiraGO;
  width: 100%;
  display: flex;
  justify-content: center;
`;
const BlogForm = styled.form`
  width: 600px;
  display: flex;
  justify-content: center;

  h1 {
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    margin: 40px 0;
  }
  h3 {
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 20px;
  }
  .addPhoto {
    display: flex;
    width: 600px;
    height: 180px;
    border-radius: 12px;
    border: 1px dashed #85858d;
    background: #f4f3ff;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    img {
      margin-bottom: 24px;
    }
    input {
      opacity: 0;
      position: relative;
      z-index: 1;
      top: 83px;
      left: 113px;
    }
    p {
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    span {
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      text-decoration-line: underline;
      cursor: pointer;
    }
  }
  .sections {
    display: flex;
    flex-direction: column;
    width: 600px;

    .author-title {
      display: flex;
      justify-content: space-between;
    }
  }
`;
