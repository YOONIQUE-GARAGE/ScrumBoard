import React from 'react';
import './Header.css';
// 시간, 날짜, 날씨 정보란

const Header = () => {

  // useState

  // 날씨시간 간단히 하는 방법은?
  const today = new Date();
  const year = today.getFullYear();
  const month = ('0' + (today.getMonth() + 1)).slice(-2);
  const day = ('0' + today.getDate()).slice(-2);
  const hours = ('0' + today.getHours()).slice(-2); 
  const minutes = ('0' + today.getMinutes()).slice(-2);
  const seconds = ('0' + today.getSeconds()).slice(-2); 
  const timeString = hours + ':' + minutes  + ':' + seconds;
  const dateString = year + ' . ' + month  + ' . ' + day;

  
  const getWeather = (lat, lng) => {

  }
  
  return (
    <header>
      <div>{timeString}</div>
      <div>{dateString}</div>
      <div>날씨</div>
    </header>
    );
};

export default Header;
