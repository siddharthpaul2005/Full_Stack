
import Header from "./Header";

function App() {
  const username = "Siddharth";

  return (
    <div>
      <h1>Prop Drilling Demo</h1>
      <Header username={username} />
    </div>
  );
}

export default App;