import { useState } from "react";

// 함수 이름을 use로 시작하고, 내부에서 다른 Hook(useState 등)을 사용하면 커스텀 훅으로 인식
function useInput() {
  const [input, setInput] = useState("");

  const onChange = (e) => {
    setInput(e.target.value);
  };

  return [input, onChange];
}

export default useInput;