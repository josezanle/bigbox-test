import GoogleBtn from "../google-btn";

const BookCard = ({ selectedCategory }) => {
  return (
    <div className="book-card">
      {selectedCategory.map((book, i) => (
        <div className="card" key={i}>
          <div className="image">
            <img src={book.book_image} alt={book.title} />
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
        }
        .card {
          width: 500px;
          height: 320px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-wrap: wrap;
          border: 2px solid silver;
          box-shadow: 0.3em 0.3em 0.5em silver;
          margin: 1em;
          padding: 1em;
          background: white;
          border-radius: 1em;
        }
        // ===============================
        .image {
          width: 100%;
          height: 100%;
          flex: 1;
          display: flex;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 0.5em;
        }
        //===============================
        .text {
          width: 100%;
          height: 100%;
          flex: 1;
          padding-left: 0.5em;
          display: flex;
          justify-content: center;
          flex-flow: column;
          position: relative;
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
        }
        //================RESPONSIVE===================================
        @media (max-width: 520px) {
          .card {
            width: 300px;
            height: 550px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            flex-wrap: wrap;
          }
          .image {
            width: 100%;
            flex: 0;
            height: 200px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
          .text {
            width: 100%;
            flex: 0;
            height: 200px;
          }
        }
      `}</style>
    </div>
  );
};

export default BookCard;
