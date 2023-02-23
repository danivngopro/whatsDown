import { useEffect } from "react";
import "./App.css";
import { useUser } from "./context/userContext";
import Home from "./pages/homePage/Home";
import { AuthService } from "./services/shraga/authService";

function App() {
  const { user, setNewUser } = useUser();
  
  useEffect(() => {
    const initUser = async () => {
      const newUser = AuthService.getUser() as any;
      if (user) {
        setNewUser(newUser);
      }
    };

    initUser();
  }, []);

  return <Home />;
}

export default App;
