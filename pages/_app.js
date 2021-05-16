import { NextSeo } from "next-seo";
import "aos/dist/aos.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <NextSeo
        title="BigBox Challenge"
        description="This example uses more of the available config options."
        canonical="https://bigbox-test.vercel.app/"
        openGraph={{
          url: "https://bigbox-test.vercel.app/",
          title: "FrontEnd Challenge",
          description: "Welcome to the Bigbox's Frontend Challenge 2021",
          images: [
            {
              url:
                "https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-challenge.jpg?alt=media&token=49878795-6d6c-465a-ba63-2d05dad5bc78",
              width: 551,
              height: 344,
              alt: "Og Image Alt",
            },
            {
              url: "/icons/gem.svg",
              width: 96,
              height: 96,
              alt: "Og Image Alt Second",
            },
            {
              url:
                "https://firebasestorage.googleapis.com/v0/b/zanle-group.appspot.com/o/banner-challenge.jpg?alt=media&token=49878795-6d6c-465a-ba63-2d05dad5bc78",
            },
          ],
          site_name: "BigBox Challenge",
        }}
      />
    </>
  );
}

export default MyApp;
