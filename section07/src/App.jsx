import './App.css'
import Viewer from './components/Viewer'
import Controller from './components/Controller';
import { useState, useEffect } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  useEffect(()=>{
    console.log(`count: ${count} / input: ${input}`)
  }, [count, input]);
  // [count]: 의존성 배열
  // dependency array = deps(뎁스)

  // 비동기로 작동되기 때문에 변경된 state를 사용하여
  // 사이드 이펙트에 해당하는 작업을 하기 위해서는 useEffect를 사용해야 함
  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
  <div className='App'>
    <h1>Simple Counter</h1>
    <section>
      <input value={input} onChange={(e) => {
        setInput(e.target.value);
      }} />
    </section>
    <section>
      <Viewer count= {count}/>
    </section>
    <section>
      <Controller onClickButton={onClickButton}/>
    </section>
  </ div>
  )
}

export default App;
