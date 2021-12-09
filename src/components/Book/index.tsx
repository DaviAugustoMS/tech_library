import "./styles.scss";
import ABook from "../../assets/book_a.svg";
import BBook from "../../assets/book_b.svg";
import CBook from "../../assets/book_c.svg";
import DBook from "../../assets/book_d.svg";
import EBook from "../../assets/book_e.svg";
import FBook from "../../assets/book_f.svg";
import GBook from "../../assets/book_g.svg";
import HBook from "../../assets/book_h.svg";
import IBook from "../../assets/book_i.svg";
interface IBookProps {
  type: "A" | "B" | "C" | "D" | "E" | "F" | "G" | "H" | "I";
}

const eBook = (type: string) => {
  switch (type) {
    case "A":
      return ABook;
    case "B":
      return BBook;
    case "C":
      return CBook;
    case "D":
      return DBook;
    case "E":
      return EBook;
    case "F":
      return FBook;
    case "G":
      return GBook;
    case "H":
      return HBook;
    case "I":
      return IBook;
  }
};

const Book = ({ type }: IBookProps) => {
  return (
    <div
      className="container-book"
      style={{ background: `url(${eBook(type)}) no-repeat` }}
    ></div>
  );
};

export { Book };
