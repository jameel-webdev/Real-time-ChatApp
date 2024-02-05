import "./App.css";
import { HomePage } from "./pages/home/HomePage";
// import { LoginPage } from "./pages/login/LoginPage";
// import { SignUpPage } from "./pages/signup/SignUpPage";

function App() {
  return (
    <>
      <div className="p-4 h-screen flex items-center justify-center">
        <HomePage />
        {/* <LoginPage />
        <SignUpPage /> */}
      </div>
    </>
  );
}

export default App;
