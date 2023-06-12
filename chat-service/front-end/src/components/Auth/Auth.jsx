import s from './Auth.module.scss';
import { useState } from 'react';
import Button from '../Ui/Button';

const Auth = () => {
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(login);
    console.log(password);
  }
  return (
    <form onSubmit={(e) => handleSubmit(e)} className={ s.form }>
      <input type='text' value={login} onChange={(e) => {setLogin(e.target.value)}}/>
      <input type='password' value={password} onChange={(e) => {setPassword(e.target.value)}} autoComplete='off'/>
      <Button type='submit'>submit</Button>
    </form>
  )
}

export default Auth;