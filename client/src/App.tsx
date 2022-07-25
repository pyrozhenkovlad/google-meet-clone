import "./App.css";
import Footer from "./components/Footer";
import UsersList from "./components/UsersList";

const App: React.FunctionComponent = () => {
  return (
    <div>
      <UsersList />
      <Footer />
    </div>
  );
};

export default App;
