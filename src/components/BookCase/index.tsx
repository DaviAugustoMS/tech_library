import "./styles.scss";
import { Book } from "../Book";

interface IBookCaseProps {
  data: any;
}

const BookCase = ({ data }: IBookCaseProps) => {
  console.log(data);

  return (
    <div className="book-container">
      <div className="book-container__book-case">
        <div className="book-container__book-case__book-right">
          {data && data.map((book: any) => <Book type={book.type} />)}
        </div>
        <div className="book-container__book-case__book-left">
          {data && data.map((book: any) => <Book type={book.type} />)}
        </div>
      </div>
    </div>
  );
};

export { BookCase };
