import React, { Component } from 'react'

export class Video extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.video !== prevProps.video) {
      this.videoRef.src = this.props.video;
    }
  }

  render() {
    return (
      <video className="body-overlay" style="pointer-event:none" muted autoPlay playsinline loop style={{ opacity: 0.2 }} ref={ref => this.videoRef = ref} webkit-playsinline>
        <source src="./assets/images/video1.mp4" type="video/mp4"/>
        </video>
    )
  }
}

export default Video
