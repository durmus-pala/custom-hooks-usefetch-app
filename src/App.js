import { useFetch } from "./hooks/UseFetch";
import "./App.css";

function App() {
  const { response, loading, error } = useFetch(
    "https://jsonplaceholder.typicode.com/users",
    {}
  );
  return (
    <div className="App">
      <h2>Custom Hook</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error.message}</p>
      ) : (
        response?.map((result) => (
          <p key={result.id}>
            {result?.id} - {result?.name}
          </p>
        ))
      )}
    </div>
  );
}

export default App;
