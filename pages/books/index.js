import React, { useEffect, useState } from "react";
import Layout from "../../Layout";
import AnimatedText from "../../components/animated-text";
import BookCard from "../../components/book-card";
import Button from "../../components/button";
import getCategories from "../../components/categories/getCategories";
import getBooksByCategory from "../../components/getBooksCategory/index";

const App = () => {
  const [categories, setCategories] = useState([]);
  const [categoryInput, setCategoryInput] = useState("");
  const [searchInput, setsearchInput] = useState("");
  const [selectedCategory, setSelectedCategory] = useState([]);

  // Hacemos fetch de la API
  const apiCalling = async () => {
    try {
      const newCategories = await getCategories();
      setCategories(newCategories);
      //
    } catch (error) {
      console.log(error);
      throw new Error("Sorry, i can't Fetch the API");
    }
  };

  useEffect(() => {
    apiCalling();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    getBooksByCategory(categoryInput, searchInput).then((selected) =>
      setSelectedCategory(selected)
    );
  };

  return (
    <Layout>
      <div className="container">
        <br />
        <AnimatedText />
        <br />

        <select
          value={categoryInput}
          onChange={(e) => setCategoryInput(e.target.value)}
        >
          <option disabled="disabled">-- Select a Category --</option>
          {categories.map((generes) => (
            <option
              key={generes.list_name_encoded}
              value={generes.list_name_encoded}
            >
              {generes.display_name}
            </option>
          ))}
        </select>

        <form onSubmit={handleSubmit}>
          <br />

          {categoryInput && (
            <>
              <input
                type="text"
                placeholder="Write something or just press Search"
                value={searchInput}
                onChange={(e) => setsearchInput(e.target.value)}
              />
              <br />

              <Button type="submit">
                <p>Search</p>
              </Button>
            </>
          )}
        </form>
        {selectedCategory && <BookCard selectedCategory={selectedCategory} />}

        <style jsx>{`
          .container {
            width: 100vw;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-flow: column;
            background: #ebebeb;
          }
          select,
          input {
            width: 400px;
            height: 40px;
            border: none;
            outline: none;
            padding: 1em;
          }
          p {
            z-index: 100;
          }
          // ===================RESPONSIVE======================================
          @media (max-width: 400px) {
            .container {
              padding: 0 1em;
            }
            select,
            input {
              width: 100vw;
              padding: 0.5em;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default App;
