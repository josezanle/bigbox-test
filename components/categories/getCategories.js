const baseUrl = "https://api.nytimes.com/svc/books/v3/";
const apiKey = "gvWDWNyUUNnM7jlRUA0axnpyKRs2DizG";

export default async function getCategories() {
  const endpoint = "lists/names.json";

  const url = `${baseUrl}/${endpoint}?api-key=${apiKey}`;
  const res = await fetch(url);
  const data = await res.json();
  const newCategories = data.results.slice(0, 10);
  return newCategories;
}
