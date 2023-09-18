import { useState } from "react";
import Buttons from "./components/Buttons";
import SearchForm from "./components/SearchForm";
import Stories from "./components/Stories";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <SearchForm />
      <Buttons />
      <Stories />
    </>
  );
}

export default App;
