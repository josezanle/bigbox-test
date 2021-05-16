const Button = ({ children }) => (
  <button>
    {children}
    <style jsx>
      {`
        button {
          width: 100px;
          height: 30px;
          background: grey;
          color: white;
          border-radius: 9px;
          cursor: pointer;
          outline: none;
          border: none;
          margin: 1em 0;
          position: relative;
          left: 35%;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
        button::before {
          content: "";
          position: absolute;
          width: 100%;
          height: 100%;
          background: #1c1c1c;
          transform: scaleX(0);
          transform-origin: left;
          transition: 0.3s;
          top: 0;
          left: 0;
        }
        button:hover::before {
          transform: scaleX(1);
        }
      `}
    </style>
  </button>
);

export default Button;
