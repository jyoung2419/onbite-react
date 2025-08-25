import './List.css';
import TodoItem from './TodoItem';
import { useState, useMemo } from 'react';

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");

  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    if(search === ""){
      return todos;
    }
    return todos.filter((todo)=>
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  const {totalCount, doneCount, notDoneCount} =
  useMemo(()=>{
    console.log("getAnalyzedData 호출!!!");
    const totalCount = todos.length;
    const doneCount = todos.filter(
      (todo) => todo.isDone
    ).length;
    const notDoneCount = totalCount - doneCount;

    return {
      totalCount,
      doneCount,
      notDoneCount
    };
  }, [todos]);
  // 의존성배열 : deps([])
  // useMemo의 두 번째 인수(deps 배열)에 포함된 값이 바뀔 때만
  // 첫 번째 인수로 전달한 콜백을 다시 실행하고,
  // 그 결과를 메모이제이션(캐싱)해서 재사용한다.

  // const {totalCount, doneCount, notDoneCount} =
  //   getAnalyzedData();

  return (
    <div className='List'>
      <h4>Todo List 🌱</h4>
      <div>
        <div>total: {totalCount}</div>
        <div>done: {doneCount}</div>
        <div>notDone: {notDoneCount}</div>
      </div>
      <input 
        value={search}
        onChange={onChangeSearch}
        placeholder='검색어를 입력하세요'
      />
      <div className='todos_wrapper'>
        {filteredTodos.map((todo)=>{
          return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate} onDelete={onDelete}/>;
        })}
      </div>
    </div>
  );
};

export default List;