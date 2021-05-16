const GoogleBtn = ({ book }) => {
  return (
    <>
      {book && (
        <a
          className="google-btn"
          href={`https://www.google.com./search?q=ebook+${book.title}+${book.author}`}
          target="_blank"
        >
          <img
            className="google-icon"
            src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
            alt="google button"
          />

          <p>Search in google</p>
        </a>
      )}

      <style jsx>{`
        .google-btn {
          cursor: pointer;
          width: 94%;
          height: 40px;
          background-color: #4285f4;
          border-radius: 4px;
          box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
          transition: box-shadow 0.3s ease;
          position: absolute;
          bottom: 0;
          display: flex;
        }

        img {
          width: 40px;
          height: 100%;
          background-color: white;
        }

        p {
          width: 100%;
          height: 100%;
          color: white;
          text-align: center;
          padding-top: 10px;
        }

        // =================================
        @media (max-width: 520px) {
          .google-btn {
            position: unset;
            width: 200px;
            margin: 0 auto;
          }
        }
        @media (max-width: 400px) {
          .google-btn {
            height: 30px;
          }
          p {
            padding-top: 5px;
          }
        }
      `}</style>
    </>
  );
};

export default GoogleBtn;
