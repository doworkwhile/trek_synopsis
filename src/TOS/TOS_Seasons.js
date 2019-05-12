import React from 'react';
import { Link } from 'react-router-dom';


function isActive(path) {
  if (path === '/' && window.location.pathname === '/') {
    return 'active'
  } else if (path !== '/' && window.location.pathname.includes(path)) {
    return 'active';
  } else {
    return '';
  }
}

function TOS_Seasons() {
  return (
    <div className='seasons tos'>
      <Link to="/TOS/S1" className={isActive("/TOS/S1")}>Season 1</Link>
      <Link to="/TOS/S2" className={isActive("/TOS/S2")}>Season 2</Link>
      <Link to="/TOS/S3" className={isActive("/TOS/S3")}>Season 3</Link>
    </div>
  );
}

export default TOS_Seasons;