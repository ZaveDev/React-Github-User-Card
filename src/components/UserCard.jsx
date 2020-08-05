import React from 'react';

const UserCard = props => {
  return (
    <>
      <div class="card">
        <img src={props.user.avatar_url}/>
        <div class="card-info">
          <h3 class="name">{props.user.name}</h3>
          <div>
            <p>Username: <br/>{props.user.login}</p>
            <p>location: <br/> {props.user.location}</p>
            <p>Profile: <br/> <a href={props.user.html_url}>github link</a></p>
            <p>Followers: <br/> {props.user.followers}</p>
            <p>Following: <br/> {props.user.following}</p>
            <p>Bio: <br/> {props.user.bio}</p>
            <p>Repo count: <br/> {props.user.public_repos}</p>  
          </div>
        </div>
      </div>
    </>
  )
}

export default UserCard



