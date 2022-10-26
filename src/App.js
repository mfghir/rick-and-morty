import { useQuery } from "@apollo/client";
import Card from "./components/Card";
import { GET_ALL_CHARACTERS } from "./graphql/queries";

function App() {
  const { loading, error, data } = useQuery(GET_ALL_CHARACTERS, {
    variables: { page: 20 },
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error {error.message}</p>;

  return (
    <main className="p-5">
      <header>
        <h1 className="text-center">Rick and Morty GraphQL App</h1>
      </header>
      <div className="row d-flex justify-content-evenly">
        {data?.characters?.results.map((character) => (
          <Card character={character} key={character.id} />
        ))}
      </div>
    </main>
  );
}

export default App;
