import './App.css';
import PageHeader from './Components/pageHeader/pageHeader';
import SideBar from './Components/sidebar/sidebar';
import TodoHeader from './Components/todoHeader/TodoHeader';
import TodoItemContainer from './Components/todoMain/todoItemContainer';


function TodoList() {
  return (
    <div className="mainPage">
      <PageHeader />
      <main className="mainContentsContainer">
        <SideBar />
        <div className="todoContainer">
          <TodoHeader />
          <div className='grayLine'></div>
          <TodoItemContainer />
        </div>
      </main>
    </div>
  );
}

export default TodoList;
