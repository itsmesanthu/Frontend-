import React from 'react'
import MovieTicket from './MovieTicket';
function Movieinfo(){
  return (
    <div style={{ display: "flex", gap: "20px" }}>
      <MovieTicket
        movieName="Avengers: Endgame"
        isBooked={true}
      />

      <MovieTicket
        movieName="Pushpa 2"
        isBooked={false}
      />

      <MovieTicket
        movieName="KGF 2"
        isBooked={true}
      />
    </div>
  );
}

export default Movieinfo
