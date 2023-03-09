import { ReactNode } from "react";

export interface IGenericDrawerProps {
    bodyContent: ReactNode
    header: string
    place: 'right'|'left'
}