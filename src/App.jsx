import { useState } from "react";
import Button from "./components/Button";
import { Header } from "./components/Header/Header";
import { Main } from "./components/Main/Main";

function App({techName}) {
  const[counterr, setCounterr] = useState(1);

  function logged() {
    console.log('213');
    setCounterr(counterr + 1);
    console.log(counterr);
  }

  return (
    <>
      <Header/>
      <Main/>
    </>
  )
}

export default App;
