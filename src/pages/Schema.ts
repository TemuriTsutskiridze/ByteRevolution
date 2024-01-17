import * as yup from "yup";
const OnlyGeorgian = /^[ა-ჰ]+$/;

const MySchema = yup.object().shape({
  image: yup.mixed().required("დაამატე სურათი"),
  author: yup
    .string()
    .required()
    .min(4)
    .matches(OnlyGeorgian)
    .test({
      test: function (value?: string) {
        if (!value) {
          return false;
        }
        const words = value.split(" ");
        return words.length > 1;
      },
    }),
  title: yup.string().required().min(2).matches(OnlyGeorgian),
  description: yup.string().required().min(2).matches(OnlyGeorgian),
  date: yup.date().required(),
  categories: yup.string().required(),
  email: yup
    .string()
    .email()
    .test(
      "მეილი უნდა მთავრდებოდეს @redberry.ge-ით",
      (value) => !value || value.endsWith("@redberry.ge")
    ),
});

export default MySchema;

// ბლოგის სურათი - ფაილის ასატვირთი ველი
// ვალიდაცია:
// სავალდებულო

// სათაური - ტექსტური ველი
// ვალიდაცია:
// სავალდებულო
// მინიმუმ 2 სიმბოლო

// ბლოგის აღწერა - ტექსტური ველი
// ვალიდაცია:
// სავალდებულო
// მინიმუმ 2 სიმბოლო

// ავტორი - ტექსტური ველი
// ვალიდაცია:
// სავალდებულო
// მინიმუმ 4 სიმბოლო
// მინიმუმ ორი სიტყვა
// მხოლოდ ქართული სიმბოლოები

// გამოქვეყნების თარიღი
// ვალიდაცია:
// სავალდებულო
// კატეგორია - ამოსარჩევი ველი
// ვალიდაცია:
// სავალდებულო
// მეილი - ტექსტური ველი
// ვალიდაცია:
// არასავალდებულო
// თუ შეყვანილია, უნდა მთავრდებოდეს @redberry.ge-თ (ეს მეილი შესაძლოა არ იყოს მონაცემთა ბაზაში შეყვანილი, აქ შეგვიძლია ნებისმიერი მეილის შეყვანა, რომელიც @redberry.ge-ით მთავრდება).
