import React, { useState, useEffect } from 'react';

function ActorDetail({ actor }) {
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (actor && actor.url) {
      fetch(actor.url)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          setDetails(data.result.properties);
          setLoading(false);
        })
        .catch(error => {
          setError(error.toString());
          setLoading(false);
        });
    }
  }, [actor]);

  if (loading) return <div>Loading details...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!details) return <div>No details available.</div>;

  return (
    <div className="actor-detail">
      <h1>{details.name}</h1>
      <p>Height: {details.height}</p>
      <p>Birth Year: {details.birth_year}</p>
    </div>
  );
}

export default ActorDetail;
