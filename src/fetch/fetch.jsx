const fetchData = async (question) => {
  // Perform your data fetching logic here
  // For example, you can use the fetch API to make an HTTP request
  const response = await fetch('https://unruly-pan-production.up.railway.app/chat', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // Add any other headers you need
    },
    body: JSON.stringify({ query: text }),
  });
  const data = await response.json();
  return data;
};
export default fetchData;
