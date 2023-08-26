import React, { useState, useRef } from "react"

const httpLinkPrefix = "https://sexypoolz.com/videos/"

export const VideoThumbnail = ({ url }) => {
  const [thumbnailUrl, setThumbnailUrl] = useState("")
  const videoRef = useRef(null)
  const videoUrl = `${httpLinkPrefix}${url}`
  const generateThumbnail = () => {
    if (videoRef.current) {
      const video = videoRef.current
      video.currentTime = video.duration / 10 // Set to 10% of video duration
      video.addEventListener("seeked", () => {
        const canvas = document.createElement("canvas")
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        canvas
          .getContext("2d")
          .drawImage(video, 0, 0, canvas.width, canvas.height)
        const thumbnailDataUrl = canvas.toDataURL()
        setThumbnailUrl(thumbnailDataUrl)
      })
    }
  }

  return (
    <div>
      <video ref={videoRef} controls preload="metadata">
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button onClick={generateThumbnail}>Generate Thumbnail</button>
      {thumbnailUrl ? (
        <img src={thumbnailUrl} alt="Thumbnail" />
      ) : (
        <p>No thumbnail generated yet.</p>
      )}
    </div>
  )
}
