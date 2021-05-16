const AnimatedText = () => {
  return (
    <div className="container">
      <p>Choose One Category</p>

      <style jsx>{`
        .container {
          overflow-x: hidden;
          background: #1c1c1c;
          margin-top: 2em;
          width: 600px;
        }

        p {
          text-align: right;
          color: white;
          font-size: 2em;
          animation: move 15s infinite linear;
        }

        @keyframes move {
          0% {
            transform: translateX(0);
            opacity: 0;
          }
          5% {
            opacity: 1;
          }
          100% {
            transform: translateX(-100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default AnimatedText;
