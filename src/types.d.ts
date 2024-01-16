type TBlog = {
  id: number;
  title: string;
  description: string;
  image: string;
  publish_date: string;
  categories: {
    id: number;
    name: string;
    color: string;
    bgColor: string;
  }[];
  author: string;
};
