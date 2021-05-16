import Layout from "../Layout";

const Home = () => {
  return (
    <Layout>
      <div className="home">
        <h2>
          Hello, this is the New York Times <br /> API challenge.
        </h2>
        <br />
        <h5>Hope you like this.</h5>
        <p>Jose Rios FrontEnd</p>
        <style jsx>{`
          .home {
            width: 100vw;
            min-height: 90vh;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            background-image: linear-gradient(
                to left,
                hsla(0, 0%, 100%, 0.7),
                hsla(0, 0%, 100%, 0.7)
              ),
              url(/images/banner.jpg);
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            padding: 0 2em;
          }
          h2 {
            color: #4d58de;
            font-size: 2em;
          }
          h5 {
            background: #feaa48;
            color: white;
            padding: 0 3px;
            font-size: 1.7em;
          }
          p {
            color: #1c1c1c;
            font-size: 1.7em;
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default Home;
