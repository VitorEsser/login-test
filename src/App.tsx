import './App.css';
import { Emojify } from './components/emojify/emojify';
import Increment from './components/increment/increment';
import LoginForm from './components/login/loginform';

function App() {
  return (
    <div className="page">
      <Increment />
      <LoginForm />
      <Emojify inputString="I like to eat apple, banana and cherry."/>
    </div>
  )
}

export default App;
