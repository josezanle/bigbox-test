const GoogleBtn = ({ book }) => {
  return (
    <div className="google-btn">
      {book && (
        <a
          href={`https://www.google.com./search?q=ebook+${book.title}+${book.author}`}
          target="_blank"
        >
          <div className="google-icon-wrapper">
            <img
              className="google-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
              alt="google button"
            />
          </div>
          <p className="btn-text">Search in google</p>
        </a>
      )}

      <style jsx>{`
        .google-btn {
          cursor: pointer;
          width: 100%;
          height: 40px;
          background-color: #4285f4;
          border-radius: 2px;
          box-shadow: 0 3px 4px 0 rgba(0, 0, 0, 0.25);
          transition: box-shadow 0.3s ease;
          position: absolute;
          bottom: 0;
        }

        .google-icon-wrapper {
          position: absolute;
          margin-top: 1px;
          margin-left: 1px;
          width: 40px;
          height: 40px;
          border-radius: 2px;
          background-color: white;
        }
        .google-icon {
          position: absolute;
          margin-top: 11px;
          margin-left: 11px;
          width: 18px;
          height: 18px;
        }
        .btn-text {
          float: right;
          margin: 11px 40px 0 0;
          color: white;
          font-size: 14px;
          letter-spacing: 0.2px;
        }
      `}</style>
    </div>
  );
};

export default GoogleBtn;
