import React from 'react';
import './style.scss';
const Notification = () => {
  return (
    <div className="overlay">
      <div className="notification-content">Character wasn't found, please try another name</div>
    </div>
  );
};

export default Notification;
