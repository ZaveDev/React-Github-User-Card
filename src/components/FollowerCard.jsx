import React from 'react';

const UserCard = props => {
  return (
    <>
      <div className="card">
        <img src={props.user.avatar_url}/>
        <div className="follower-info">
          <h2>{props.user.login}</h2>
        </div>
      </div>
    </>
  )
}

export default UserCard