import { ITrack } from "./tracks.data";

export interface IArtist {
    name: string;
    image:string;
    listenersCount: number;
    tracks: ITrack[];
    duration: number; // in seconds
}
