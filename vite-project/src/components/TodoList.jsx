
// src/components/TodoList.jsx
const TodoList = () => {
  return (
	  // 시맨틱 html 태그인 ul(unordered list), li(list item)를 사용하여 리스트를 만듭니다.
    <ul>
      {todos.map((todo) => (
        <li key={todo.id}>{todo.text}</li>
      ))}
    </ul>
  );
};