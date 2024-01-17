import img from "/public/folder-add.png";
import styled from "styled-components";

// interface MySchemaTypes {
//   image: File | null;
//   author: string;
//   title: string;
//   description: string;
//   date: Date;
//   categories: string;
//   email: string;
// }

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
                <ul className="first-list">
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
              <input
                className="description"
                type="text"
                placeholder="შეიყვანეთ აღწერა"
              />
              <ul>
                <li>მინიმუმ 2 სიმბოლო </li>
              </ul>
            </section>
            <section className="date-category-mail">
              <div className="date">
                <h3>გამოქვეყნების თარიღი *</h3>
                <input className="date-input" type="date" />
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
            <section>
              <button type="submit" className="publish">
                გამოქვეყნება
              </button>
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
      cursor: pointer;
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
  section {
    margin-top: 24px;
  }
  .sections {
    display: flex;
    flex-direction: column;
    width: 600px;

    .author-title,
    .date-category-mail {
      display: flex;
      justify-content: space-between;
    }
    .date-category-mail {
      flex-wrap: wrap;
      .mail {
        margin-top: 24px;
      }
    }

    input {
      width: 288px;
      padding: 12px 0;
      border-radius: 12px;
      border: 1px solid #e4e3eb;
      background: #fcfcfd;
      margin: 8px 0;
    }
    input::placeholder {
      padding-left: 16px;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    input:not(:placeholder-shown) {
      padding: 10px 16px;
      color: #1a1a1f;
      font-size: 14px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    .description {
      width: 100%;
      padding-bottom: 92px;
    }

    li {
      list-style: none;
      color: #85858d;
      font-family: FiraGO;
      font-size: 12px;
      font-style: normal;
      font-weight: 400;
      line-height: 20px;
    }
    ul.first-list li::before {
      content: "•";
      display: inline-block;
      margin-right: 0.5em;
    }
    .publish {
      width: 288px;
      padding: 10px 20px;
      justify-content: center;
      align-items: center;
      gap: 10px;
      border: none;
      border-radius: 8px;
      background: #e4e3eb;
      margin-top: 16px;
      float: right;
      color: #fff;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
    .date-input {
      position: relative;
      background: url(./public/assets/calendar.svg);
      background-repeat: no-repeat;
      background-position: 5%;
    }
    .date-input::-webkit-calendar-picker-indicator {
      width: 20px;
      height: 20px;
      position: absolute;
      opacity: 0;
      cursor: pointer;
    }
    .date-input::-webkit-datetime-edit-fields-wrapper {
      padding-left: 25px;
    }
  }
`;
