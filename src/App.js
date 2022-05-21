import "./App.css";
import "./Components/UserTable";
import UserList from "./Components/UserTable";
import UserForm from "./Components/UserFormModal";

function App() {
  return (
    <div className="App">
      <div className="jumbotron text-center header">
        <h1>We Manage Your Users</h1>
        <p>Manage and edit the list of your users using this app.</p>
      </div>
      <UserForm />
      <UserList />
    </div>
  );
}

export default App;
