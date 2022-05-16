import Counter from "./components/Counter";
import CounterBy from "./components/CounterBy";

function App() {
  return (
    <div>
      <h1>App React</h1>
      <hr />

      <Counter initialValue={5} />
      <hr />
      <CounterBy />
    </div>
  );
}

export default App;
