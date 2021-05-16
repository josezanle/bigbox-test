import Image from "next/image";
import GoogleBtn from "../google-btn";

const BookCard = ({ selectedCategory }) => {
  return (
    <div className="book-card">
      {selectedCategory.map((book, i) => (
        <div className="card" key={i}>
          <div className="image">
            <Image
              src={book.book_image}
              alt={book.title}
              width={400}
              height={300}
            />
          </div>
          <div className="text">
            <h2>{book.title}</h2>
            <h5>Description:</h5>
            <p>{book.description}</p>
            <h5>Author:</h5>
            <p>{book.author}</p>

            <GoogleBtn book={book} />
          </div>
        </div>
      ))}

      <style jsx>{`
        .book-card {
          width: 100vw;
          min-height: 100vh;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          padding-right: 0.8em;
        }
        .card {
          width: 500px;
          height: 320px;
          display: flex;
          justify-content: center;
          align-items: center;
          border: 2px solid silver;
          box-shadow: 0.3em 0.3em 0.5em silver;
          margin: 1em 0.5em;
          padding: 1em;
          background: white;
          border-radius: 0.5em;
        }
        // ===============================
        .image {
          width: 100%;
          height: 100%;
          flex: 1;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.3em;
        }
        //===============================
        .text {
          width: 100%;
          height: 100%;
          flex: 1;
          padding-left: 0.5em;
          display: flex;
          flex-flow: column;
          position: relative;
          background: white;
        }
        h2 {
          color: #f8ac30;
          margin-bottom: 0.5em;
        }
        .text p:nth-child(3) {
          font-style: italic;
          padding-left: 0.5em;
          margin-bottom: 1em;
        }
        .text h5:nth-child(4) {
          display: inline;
        }
        .text p:nth-child(5) {
          padding: 0 0 0 0.5em;
          display: inline;
          margin-bottom: 1em;
        }
        //================RESPONSIVE===================================
        @media (max-width: 520px) {
          .book-card {
            padding-right: 0.3em;
          }
          .card {
            width: 500px;
            height: 550px;
            display: flex;
            flex-flow: column;
            padding: 0;
          }
          .image {
            width: 100%;
            display: flex;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          img {
            display: none;
          }
          .text {
            width: 100%;
            height: 300px;
            padding-left: 0;
            padding: 0.5em;
            flex: 1;
            justify-content: center;
            background: hsla(0, 0%, 100%, 0.9);
            border-radius: 0.5em;
          }
        }
        @media (max-width: 465px) {
          .text {
            height: 210px;
          }
          .text,
          .image {
            flex: 0;
          }
          .image{
            margin-bottom:1em;
            }
          }
        }
        @media (max-width: 372px) {
          .text {
            height: 210px;
          }

          h2 {
            font-size: 1em;
          }
        }



        }
      `}</style>
    </div>
  );
};

export default BookCard;
