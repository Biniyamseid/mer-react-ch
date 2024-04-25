import React, { useState, useEffect } from 'react';
import ActorDetail from './ActorDetail';

function ActorsList() {
  const [actors, setActors] = useState([]);
  const [selectedActor, setSelectedActor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://swapi.tech/api/people/')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setActors(data.results);  // directly use the results array from the response
        setLoading(false);
      })
      .catch(error => {
        setError(error.toString());
        setLoading(false);
      });
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {actors.map(actor => (
        <div key={actor.uid} className="card">
          <h2>{actor.name}</h2>
          <button onClick={() => setSelectedActor(actor)}>Detail</button>
        </div>
      ))}
      {selectedActor && <ActorDetail actor={selectedActor} />}
    </div>
  );
}

export default ActorsList;
