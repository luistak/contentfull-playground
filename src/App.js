import React, { useEffect, useState } from 'react';

import ContentfulApi from './api/contentful';

import './App.css';

function App() {
  const [ninjas, setNinjas] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const newNinjas = await ContentfulApi.getEntries({
          'content_type': 'ninja'
        });

        setNinjas(newNinjas);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        {
          !ninjas.length ? (
            <h1> Loading... </h1>
          ) : (
            <>
              <h1>Ninjas!</h1>
              {
                ninjas.map((ninja, key) => (
                  <div key={key}>
                    <p>{ninja.fields.name}</p>
                    <img
                      src={ninja.fields.photo.fields.file.url}
                      alt={ninja.fields.photo.fields.description}
                      style={{ widht: '100%', maxWidth: '200px' }}
                    />
                  </div>
                ))
              }
            </>
          )
        }
      </header>
    </div>
  );
}

export default App;
