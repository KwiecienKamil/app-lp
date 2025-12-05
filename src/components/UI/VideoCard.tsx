import type { FC } from "react"
import type { VideoCardProps } from "../../types/VideoCardProps"
import "../../styles/VideoCard.css"

const VideoCard:FC<VideoCardProps> = ({id, title, desc, icon, video}) => {
  
    return (
    <div 
    key={id}
    className="how-to-use-option"
    >
      <div className="flex">
        <span>{icon}</span>
        <h3>{title}</h3>
      </div>
      <p>{desc}</p>
    </div>
  )
}

export default VideoCard
