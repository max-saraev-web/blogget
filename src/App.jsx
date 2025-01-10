import { useState } from "react";
import Button from "./components/Button";

function App({techName}) {
  const[counterr, setCounterr] = useState(1);

  function logged() {
    console.log('213');
    setCounterr(counterr + 1);
    console.log(counterr);
  }

  return (
    <header className="App-header">
    <Button text={'Тык!'}/>
    <button onClick={logged}>Кнопка</button>
      <p>Hello {techName}</p>
    </header>
  )
}

export default App;
