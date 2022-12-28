import Todo from "./assets/todo";

function App() {
  return (
    <div className="App">
      <h1>My Todos</h1>
      <Todo text='learn react'/>
      <Todo text='finish react'/>
      <Todo text='love react' />
      
    </div>
  );
}

export default App;