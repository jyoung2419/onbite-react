import { useState } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개

const Register = () => {
  // 객체 형태로 관리하는 방법
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: ""
  });

  // 통합 이벤트 핸들러
  // 입력 필드(name 속성 기준)의 값을 변경하면 해당 [key]만 업데이트해서 input 상태를 갱신
  const onChange = (e) =>{
    console.log(e.target.name, e.target.value)
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div>
      <div>
      <input
        name="name"
        value={input.name}
        onChange={onChange}
        placeholder={"이름"}
      />
      </div>

      <div>
      <input 
        name="birth"
        value={input.birth}
        onChange={onChange}
        type="date" />
      </div>

      <div>
        <select 
          name="country"
          value = {input.country}
          onChange={onChange}
          >
          <option value = ""></option>
          <option value = "kr">한국</option>
          <option value = "us">미국</option>
          <option value = "uk">영국</option>
        </select>
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}/>
      </div>
    </div>
  );
};

export default Register;