import { Route } from 'react-router-dom';
import './App.css';
import Mypage from './mypage/Mypage';
import Login from './login/Login';
import Regist from './regist/Regist';
import TodoList from './todolist/Todotempletes';
import MyDiaryList from './mydiary/MyDiaryList';

function App() {
  return (
    <>
      <Route path="/mypage" component={Mypage} exact={true} />
      <Route path="/mydiarylist" component={MyDiaryList} />
      <Route path="/regist" component={Regist} />
      <Route path="/login" component={Login} />
      <Route path="/todolist" component={TodoList} />
    </>
  );
};

export default App;