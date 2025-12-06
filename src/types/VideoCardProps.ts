import type { JSX } from "react";

export interface VideoCardProps {
    id: number,
    title: string,
    desc: string,
    icon:  JSX.Element,
    active?: boolean,
    onClick: () => void
}