import { observer } from "mobx-react-lite/src/observer.js"

interface Props {
    image: string
    title: string
    subTitle: string
}

export const TrackInfo = observer(({title, subTitle, image,}: Props) => {
    return (
        <div className="flex items-center gap-3">
            {/* Circle progress-bar */}
            {/* Play/pause button when hover title or cover */}
            <div className="w-12 h-12 bg-white/5 border border-primary border-2 rounded-full p-0.5 " >

            <img
                src={image}
                alt={title}
                className="w-full h-full rounded-full"
            />
            </div>

            <div>
                <div className="text-white text-lg font-medium">{title}</div>
                <div className="opacity-65 text-left">{subTitle}</div>
            </div>
        </div>
    )
})