import type { JSX } from "react";
import type { IconType } from "react-icons";

export interface VideoCardProps {
    id: number,
    title: string,
    desc: string,
    icon:  JSX.Element,
    video: string
}