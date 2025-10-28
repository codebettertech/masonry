import { Image } from '@heroui/react'

export default function MasonryItemDetail({ item }: { item: any }) {
    return (
        <div className="hover:opacity-30" key={item.title}>
                <Image
                className='rounded-large'
                    isZoomed
                    src={item.src}
                    alt={item.title}
                    title={item.title}
                />
        </div>
    )
}
