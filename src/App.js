import "./styles.css";
import Todo from "./Todo";

export default function App() {
  const todos = [
    "HTML Forms",
    "Responsive Web Design",
    "JS Promises",
    "React Hooks"
  ];

  return (
    <div className="App">
      <h1>Using map() in React</h1>
      <h2>My Todos</h2>
      <ul>
        {todos.map((todo) => (
          <Todo todo={todo} />
        ))}
      </ul>
    </div>
  );
}
