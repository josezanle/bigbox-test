const baseUrl = "https://api.nytimes.com/svc/books/v3/";
const apiKey = "gvWDWNyUUNnM7jlRUA0axnpyKRs2DizG";

const getBooksCategory = async (categoryInput) => {
  const endpoint = `/lists/current/${categoryInput}.json`;

  const url = `${baseUrl}/${endpoint}?api-key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  const selectBooksCategory = data.results.books;

  return selectBooksCategory;
};

export default getBooksCategory;
