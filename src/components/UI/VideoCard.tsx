import type { FC } from "react"
import type { VideoCardProps } from "../../types/VideoCardProps"
import "../../styles/VideoCard.css"

const VideoCard:FC<VideoCardProps> = ({ id, title, desc, icon, active, onClick }) => {
    return (
    <div 
    key={id}
    onClick={onClick}
    className={`how-to-use-option ${active ? "active" : ""}`}
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
