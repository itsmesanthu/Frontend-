import React from 'react'
import v1 from '../assets/video1.mp4'
import v2 from '../assets/video2.mp4'
import v3 from '../assets/video3.mp4'
import v4 from '../assets/video4.mp4'
import v5 from '../assets/video5.mp4'
function video() {
    let height="200px"
    let width="250px"
    let videodata={
        video1:v1,
        video2:v2,
        video3:v3,
        video4:v4,
        video5:v5
    }
  return (
    <div>
        <table border="2">
            <tr>
      <td><video src={videodata.video1} height={height} width={width} controls> </video> </td>
      <td><video src={videodata.video2} height={height} width={width} controls></video></td>
      <td><video src={videodata.video3} height={height} width={width} controls></video></td>
      </tr>
      <tr>
      <td><video src={videodata.video4} height={height} width={width} controls></video></td>
      <td><video src={videodata.video5} height={height} width={width} controls></video></td>
      </tr>
      </table>
    </div>
  )
}

export default video
