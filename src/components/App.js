import { TodoProvider } from "../context/TodoContext";
import Layout from "./Layout";
import Tasks from "./Tasks.jsx";

function App() {
  return (
    <TodoProvider>
      <Layout>
        <Tasks />
      </Layout>
    </TodoProvider>
  );
}

export default App;
