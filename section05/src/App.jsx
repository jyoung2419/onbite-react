import './App.css'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Button from './components/Button';

function App() {  // App 컴포넌트 (부모 컴포넌트)

  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  }
  return (
    <>
      <Button {...buttonProps} />  {/* spread 연산 통해 전달 가능 */}
      <Button text={"카페"} />
      <Button text={"블로그"} >
        <Header /> {/* 이렇게 자식 요소로 사용된 HTML 태그는children 이름의 props로 자동으로 전달 */}
      </Button>
    </>
  )
}

export default App;
