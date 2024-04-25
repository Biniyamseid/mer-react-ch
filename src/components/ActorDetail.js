// import React from 'react';

// function ActorDetail({ actor }) {
//   if (!actor) return null;

//   return (
//     <div className="actor-detail">
//       <h1>{actor.name}</h1>
//       <p>Height: {actor.height}</p>
//       <p>Birth Year: {actor.birth_year}</p>
//     </div>
//   );
// }

// export default ActorDetail;


import React from 'react';

function ActorDetail({ actor }) {
  if (!actor) return null;

  return (
    <div className="actor-detail">
      <h1>{actor.name}</h1>
      <p>Height: {actor.height}</p>
      <p>Birth Year: {actor.birth_year}</p>
    </div>
  );
}

export default ActorDetail;
