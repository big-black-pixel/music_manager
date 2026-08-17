import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import type { ITrack } from "@/types/track.types"
import { Ellipsis, Heart } from "lucide-react"

interface Props {
    track: ITrack
}
dayjs.extend(utc)

export function Track({ track }: Props) {
    return (
        <div className="border-b border-player-bg/90 py-6 flex justify-between items-center w-full last:border-0 ">
            <div className="flex items-center gap-3">
                {/* Circle progress-bar */}
                {/* Play/pause button when hover title or cover */}
                <div className="w-12 h-12 bg-white/5 border border-primary rounded-full" />
                <div>
                    <div className="text-white text-lg font-medium">{track.name}</div>
                    <div className="opacity-65 text-left">{dayjs.unix(track.duration).utc().format('mm:ss')}</div>
                </div>
            </div>

            <div className='flex items-center gap-4 '>
                <button className="flex gap-2">
                    <Heart className="text-primary opacity-50 duration-300 hover:opacity-100" />
                </button>
                <button >
                    <Ellipsis className="opacity-30 duration-300 hover:opacity-100 " />
                </button>
            </div>

        </div>
    )
}
