import { TrackInfo } from "@/components/ui/track-info/TrackInfo";
import { musicPlayerStore } from "@/store/store";
import { transformDuration } from '@/utils/transform-duration'
import { Pause, Play, SkipBack, SkipForward, Volume, Volume1, Volume2 } from "lucide-react";

interface Props {

}

export function AudioPlayer({ }: Props) {

    if (!musicPlayerStore.currentTrack) {
        return null
    }


    return (
        <div className="w-full py-5 px-10 bg-player-bg border-t border-white/10 
        grid grid-cols-[1fr_5.8fr] fixed bottom-0 left-0 ">
            <TrackInfo
                title={musicPlayerStore.currentTrack.name}
                subTitle={musicPlayerStore.currentTrack.artist.name}
                image={undefined}
            />

            <div className="grid grid-cols-[1fr_8fr_1fr] items-center gap-8">
                <div className="flex items-center gap-2.5">
                    <button className="opacity-70 hover:opacity-100 duration-300">
                        <SkipBack size={25} />
                    </button>

                    <button
                        className="rounded-full bg-gradient-to-r from-[#3C3D41] to-[#1F2026] 
                        p-3.5 border border-white/10 border-solid  hover:shadow   
                        text-primary  ">

                        {musicPlayerStore.isPlaying ? (
                            <Pause size={20} />
                        ) : (
                            <Play
                                size={20}
                            />)}
                    </button>

                    <button className="opacity-70 hover:opacity-100 duration-300">
                        <SkipForward size={25} />
                    </button>
                </div>

                <div className="flex items-center gap-2">
                    <span className="w-20">
                        {transformDuration(musicPlayerStore.currentTime)}
                    </span>

                    <div className="bg-white/20 w-full rounded relative h-1 ">

                        <div className="absolute top-0 left-0 h-full rounded bg-gradient-to-r
                        from-primary to-secondary  "
                            style={{
                                width: `${musicPlayerStore.progress}%`
                            }}
                            
                        />
                        {/* thumb */}
                        <div className="w-3.5 h-3.5 bg-secondary rounded-full absolute top-1/2
                        -translate-y-1/2 -translate-x-1/2"
                        style={{
                            left: `${musicPlayerStore.progress}%`
                        }}/>
                        <input
                            type="range"
                            min={0}
                            max={musicPlayerStore.currentTrack.duration}
                            className=""
                            onChange={e => musicPlayerStore.seek(+e.target.value)}
                            value={musicPlayerStore.currentTime}
                        />
                    </div>

                    <span className="text-white/70">{
                        transformDuration(musicPlayerStore.currentTrack.duration)}
                    </span>
                </div>

                <div className="">
                    {
                        musicPlayerStore.volume === 0 ? <Volume /> :
                            musicPlayerStore.volume < 50 ? <Volume1 /> :
                                <Volume2 />
                    }

                    {/* ProgressBar */}
                </div>

            </div>
        </div>
    )
}