import Counter from "./components/Counter";
import CounterBy from "./components/CounterBy";
import CounterCustomHook from "./components/CounterCustomHook";
import CounterEffect from "./components/CounterEffect";

function App() {
  return (
    <div>
      <h1>App React</h1>
      <hr />

      <Counter initialValue={5} />
      <hr />
      <CounterBy />
      <hr />
      <CounterEffect />
      <hr />
      <CounterCustomHook />
    </div>
  );
}

export default App;
