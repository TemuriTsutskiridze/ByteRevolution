import img from "/public/folder-add.png";

export default function AddBlog() {
  return (
    <form>
      <div>
        <h1>ბლოგის დამატება</h1>
        <div>
          <h3>ატვირთეთ ფოტო</h3>
          <div>
            <img src={img} alt="img" />
            <p>
              ჩააგდეთ ფაილი აქ ან <span>აირჩიეთ ფაილი</span>
              <input type="file" />
            </p>
          </div>
        </div>
        <div>
          <div>
            <h3>ავტორი *</h3>
            <input type="text" placeholder="შეიყვანეთ ავტორი" />
            <ul>
              <li>მინიმუმ 4 სიმბოლო </li>
              <li>მინიმუმ ორი სიტყვა</li>
              <li>მხოლოდ ქართული სიმბოლოები</li>
            </ul>
          </div>
          <div>
            <h3>სათაური *</h3>
            <input type="text" placeholder="შეიყვანეთ სათაური" />
            <ul>
              <li>მინიმუმ 2 სიმბოლო </li>
            </ul>
          </div>
          <div>
            <h3>აღწერა *</h3>
            <input type="text" placeholder="შეიყვანეთ აღწერა" />
            <ul>
              <li>მინიმუმ 2 სიმბოლო </li>
            </ul>
          </div>
          <div>
            <h3>გამოქვეყნების თარიღი *</h3>
            <input type="date" />
          </div>
          <div>
            <h3>კატეგორია *</h3>
            <input type="text" placeholder="აირჩიეთ კატეგორია" />
          </div>
          <div>
            <h3>ელ-ფოსტა *</h3>
            <input type="text" placeholder="Example@redberry.ge" />
          </div>
        </div>
      </div>
    </form>
  );
}
