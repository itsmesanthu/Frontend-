import React from 'react'

function Music() {
  let musicdata = {
    kannada: ["kannada_song2.mp3", "kannada_song2.mp3","kannada_song2.mp3"],
    english: ["english_song1.mp3","english_song2.mp3","english_song3.mp3"],
    hindi: ["https://open.spotify.com/track/5MCbGWnNLLjoHpbDO3BOgi?si=b64451a4b0f6419bhindi_song1.mp3","hindi_song2.mp3","hindi_song3.mp3"]
  }

  return (
    <div>
      <table border="2">
        <legend>Kannada</legend>
          <tr>
            {musicdata.kannada.map((src, index) => (
              <td key={index}>
                <audio controls>
                  <source src={src} type="audio/mpeg" />
                </audio>
              </td>
            ))}
          </tr>
      </table>
      <table border="2">
        <legend>English</legend>
          <tr>
            {musicdata.english.map((src, index) => (
              <td key={index}>
                <audio controls>
                  <source src={src} type="audio/mpeg" />
                </audio>
              </td>
            ))}
          </tr>
      </table>
      <table border="2">
        <legend>Hindi</legend>
          <tr>
            {musicdata.hindi.map((src, index) => (
              <td key={index}>
                <audio controls>
                  <source src={src} type="audio/mpeg" />
                </audio>
              </td>
            ))}
          </tr>
      </table>
    </div>
  )
}

export default Music