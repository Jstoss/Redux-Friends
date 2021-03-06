import React from 'react';


const FriendDisplay = ({id, name, age, email, edit, del, done}) => {
  return(
    <div>
      <div>{name}</div>
      <div>{age}</div>
      <div>{email}</div>
      <button onClick={edit}>Edit</button>
      <button onClick={()=> del(id)}>Delete</button>
      <button onClick={done}>Done</button>
    </div>
  );
}

export default FriendDisplay;
