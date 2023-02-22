import { Route } from 'react-router-dom';
// import './App.css';
import Mypage from './mypage/Mypage';
import Regist from './regist/Regist';
import MyDiaryList from './mydiary/MyDiaryList';
import TodoList from './todo/TodoList';
import Page from './page/Page';
import Page2 from './page/Page2';
import Login from './login/Login';

function App() {

  return (
    <>
      <Route path="/mypage" component={Mypage} exact={true} />
      <Route path="/mydiarylist" component={MyDiaryList} />
      <Route path="/regist" component={Regist} />
      <Route path="/login" component={Login} />
      <Route path="/todo" component={TodoList} />
      <Route path="/page" component={Page} />
      <Route path="/page2" component={Page2} />
    </>
  );
};

export default App;