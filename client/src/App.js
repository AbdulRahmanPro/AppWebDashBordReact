import LoginCard from "./components/loginCard";
import Content from "./components/content";
import './css/App.css';
import "./css/login.css"

export default function App() {
  return (
    <div className=" h-screen-mix flex flex-row-reverse gap-14 justify-center items-center ">
      <LoginCard />
      <Content />
    </div>
  );
}
