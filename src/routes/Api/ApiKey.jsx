import React, { useState, useEffect } from 'react'
import Header from '../header/Header.jsx';
import styleApi from './ApiKey.module.css';

export default function ApiKey() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    fetch('https://api.allorigins.win/get?url=' + encodeURIComponent('https://api.namefake.com'))
      .then(res => res.json())
      .then(data => {
        let rasParse = JSON.parse(data.contents);
        setName(rasParse.name);
        setPassword(rasParse.password);
        setAddress(rasParse.address);
        setUserName(rasParse.username);
        console.log(rasParse);
      })
  }, [])

  return (
    <div>
      <div>
        <Header />
      </div>
      <div className={styleApi.parent}>
        <div className={styleApi.block}>
          <p className={styleApi.text}>name: <br /> {name}</p>
          <p className={styleApi.text}>username: <br /> {username}</p>
          <p className={styleApi.text}>password: <br /> {password}</p>
          <p className={styleApi.text}>address: <br /> {address}</p>
        </div>
      </div>
    </div>
  )
}
