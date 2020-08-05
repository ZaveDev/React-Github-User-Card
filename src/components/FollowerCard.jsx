import React from 'react';

const UserCard = props => {
  return (
    <>
      <div class="card">
        <img src={props.user.avatar_url}/>
        <div class="follower-info">
          <h2>{props.user.login}</h2>
        </div>
      </div>
    </>
  )
}

export default UserCard