// import React, { useState, useEffect } from 'react';
// import ActorDetail from './ActorDetail';

// function ActorsList() {
//   const [actors, setActors] = useState([]);
//   const [selectedActor, setSelectedActor] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     setLoading(true);
//     // fetch('https://swapi.py4e.com/api/people/')
//     fetch('https://swapi.tech/api/people/1')
//       .then(response => response.json())
//       .then(data => {
//         setActors(data.results);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error.toString());
//         setLoading(false);
//       });
//   }, []);

//   if (loading) return <p>Loading...</p>;
//   if (error) return <p>Error: {error}</p>;

//   return (
//     <div>
//       {actors.map(actor => (
//         <div key={actor.name} className="card">
//           <h2>{actor.name}</h2>
//           <p>Height: {actor.height}</p>
//           <p>Birth Year: {actor.birth_year}</p>
//           <button onClick={() => setSelectedActor(actor)}>Detail</button>
//         </div>
//       ))}
//       {selectedActor && <ActorDetail actor={selectedActor} />}
//     </div>
//   );
// }

// export default ActorsList;


import React, { useState, useEffect } from 'react';
import ActorDetail from './ActorDetail';

function ActorsList() {
  const [actors, setActors] = useState([]);
  const [selectedActor, setSelectedActor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

//   useEffect(() => {
//     // fetch('https://swapi.py4e.com/api/people/')
//     fetch('https://swapi.tech/api/people/1')
//       .then(response => {
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         return response.json();
//       })
//       .then(data => {
//         setActors(data.result.properties);
//         setLoading(false);
//       })
//       .catch(error => {
//         setError(error.toString());
//         setLoading(false);
//       });
//   }, []);

useEffect(() => {
    fetch('https://swapi.tech/api/people/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Ensure the data is in an array
        // Since the API fetches one person, wrap it in an array
        if (data && data.result && data.result.properties) {
          setActors([data.result.properties]); // Wrap the single actor object in an array
        } else {
          throw new Error('Invalid data structure');
        }
        setLoading(false);
      })
      .catch(error => {
        setError(error.toString());
        setLoading(false);
      });
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!Array.isArray(actors)) {
    return <div>Error: Actors data is not valid.</div>;
  }
  
  return (
    <div>
      {actors.map(actor => (
        <div key={actor.name} className="card">
          <h2>{actor.name}</h2>
          <p>Height: {actor.height}</p>
          <p>Birth Year: {actor.birth_year}</p>
          <button onClick={() => setSelectedActor(actor)}>Detail</button>
        </div>
      ))}
      {selectedActor && <ActorDetail actor={selectedActor} />}
    </div>
  );
  

//   return (
//     <div>
//       {actors.map(actor => (
//         <div key={actor.name} className="card">
//           <h2>{actor.name}</h2>
//           <p>Height: {actor.height}</p>
//           <p>Birth Year: {actor.birth_year}</p>
//           <button onClick={() => setSelectedActor(actor)}>Detail</button>
//         </div>
//       ))}
//       {selectedActor && <ActorDetail actor={selectedActor} />}
//     </div>
//   );

//   return (
//     <div>
//       {actors.map(actor => (
//         <div key={actor.name} className="card">
//           <h2>{actor.name}</h2>
//           <p>Height: {actor.height}</p>
//           <p>Birth Year: {actor.birth_year}</p>
//           <button onClick={() => setSelectedActor(actor)}>Detail</button>
//         </div>
//       ))}
//       {selectedActor && <ActorDetail actor={selectedActor} />}
//     </div>
//   );
}

export default ActorsList;
