import "../styles/HowToUse.css"
import { appVideos } from "../utils/Helpers"
import VideoCard from "./UI/VideoCard"
import { useState } from "react"

const HowToUse = () => {
   const [activeCard, setActiveCard] = useState<number | null>(1)
   const [currentVideo, setCurrentVideo] = useState<string>(appVideos[0].video)

  return (
    <section id="how-to-use">
      <h2>Pełna kontrola</h2>
      <div className="flex-between how-to-use-options-wrapper">
        {appVideos.map((videoComponent) => (
          <VideoCard 
          key={videoComponent.id}
          id={videoComponent.id}
          title={videoComponent.title}
          desc={videoComponent.desc}
          icon={videoComponent.icon}
          active={activeCard === videoComponent.id}
          onClick={() => {
            setActiveCard(videoComponent.id)
            setCurrentVideo(videoComponent.video)
          }
          }
          />
        ))}
      </div>
      <video
        src={currentVideo}
        controls
        autoPlay
        >
        </video>
      </section>
  )
}

export default HowToUse
