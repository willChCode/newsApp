async function getTrends() {
  const res = await fetch(
    'https://newsapi.org/v2/everything?q=apple&from=2023-04-15&to=2023-04-15&sortBy=popularity&apiKey=7fc7f6b9f1d9484ebeedffcbedd02264'
  );
  const data = res.json();
  return data;
}
export { getTrends };
