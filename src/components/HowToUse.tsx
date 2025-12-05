import "../styles/HowToUse.css"
import { appVideos } from "../utils/Helpers"
import VideoCard from "./UI/VideoCard"
import appVideo from "../assets/AppVideo1.mp4"

const HowToUse = () => {
  return (
    <section id="how-to-use">
      <h2>Pełna kontrola</h2>
      <div className="flex-between how-to-use-options-wrapper">
        {appVideos.map((videoComponent) => (
          <VideoCard 
          id={videoComponent.id}
          title={videoComponent.title}
          desc={videoComponent.desc}
          icon={videoComponent.icon}
          video={videoComponent.video}
          />
        ))}
      </div>
      <video
        src={appVideo}
        >
        </video>
      </section>
  )
}

export default HowToUse
