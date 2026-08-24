
import type { ITrack } from "@/types/track.types"
import { Ellipsis, Heart } from "lucide-react"
import { TrackInfo } from '@/components/ui/track-info/TrackInfo'
import {transformDuration} from '@/utils/transform-duration'
import { favoriteStore } from "@/store/favorite.store"
import { observer } from "mobx-react-lite/src/observer.js"

interface Props {
    track: ITrack
}

export const Track = observer(({ track }: Props) => {
    return (
        <div className="border-b border-player-bg/90 py-6 
        flex justify-between items-center last:border-0 ">
            <TrackInfo 
            title={track.name}
            subTitle={transformDuration(track.duration)}
            image={track.cover}
            track={track}
            />

            <div className='flex items-center gap-4 '>
                <button 
                    onClick={() => favoriteStore.toggleFavorite(track.name)}
                >
                    <Heart className="text-primary opacity-50 duration-300 hover:opacity-100"
                        fill={favoriteStore.favoritesName.includes(track.name) ? 'var(--color-primary)' : 'none'}
                    />
                </button>
                <button >
                    <Ellipsis className="opacity-30 duration-300 hover:opacity-100 " />
                </button>
            </div>

        </div>
    )
})
