
import type { ITrack } from "@/types/track.types"
import { Ellipsis, Heart } from "lucide-react"
import { TrackInfo } from '@/components/ui/track-info/TrackInfo'
import {transformDuration} from '@/utils/transform-duration'

interface Props {
    track: ITrack
}

export function Track({ track }: Props) {
    return (
        <div className="border-b border-player-bg/90 py-6 
        flex justify-between items-center w-full last:border-0 ">
            <TrackInfo 
            title={track.name}
            subTitle={transformDuration(track.duration)}
            image={undefined}
            />

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
