const Button = ({ children, text, color = "black" }) => { // props 구조분해할당
  // 이벤트 핸들러
  // 이벤트 객체
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  }
  
  return (
    <button 
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text} - {color.toUpperCase()}
      {children}
    </button>
  );
};

export default Button;