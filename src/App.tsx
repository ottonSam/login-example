import { AuthProvider } from "./context/AuthContext";
import { AppRouter } from "./routes";

function App() {
  return (
    <AuthProvider>
      <div className="flex flex-1 h-screen w-screen bg-branco-text">
        <AppRouter />
      </div>
    </AuthProvider>
  );
}

export default App;
