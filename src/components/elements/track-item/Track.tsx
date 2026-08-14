import type { ITrack } from "@/types/track.types"
import { Ellipsis, Heart } from "lucide-react"

interface Props {
    track: ITrack
}

export function Track({ track }: Props) {
    return (
        <div className="">
            <div>
                <div className="w-5 h-5 bg-primary rounded-full" />
                <div>
                    <div className="text-white">{track.name}</div>
                    <div>{track.duration}</div>
                </div>
            </div>

            <div>
                <button>
                    <Heart className="text-primary hover:fill-primary"/>
                    <Ellipsis className="opacity-50"/>
                </button>
            </div>

        </div>
    )
}
