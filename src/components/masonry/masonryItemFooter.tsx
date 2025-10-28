import { HeartIcon, ChatBubbleBottomCenterTextIcon, ArrowDownTrayIcon } from '@heroicons/react/24/outline'
import { CardFooter, Button } from '@heroui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import { HeartFilledIcon } from '../icon/icons'

export default function MasonryItemFooter({item, onOpen}: { item: any, onOpen?: () => void }) {
    const [isFavorite, setIsFavorite] = React.useState(false);

    return (
        <CardFooter className="absolute bg-white/30 bottom-0 border-t-1 border-zinc-100/50 z-10 justify-between is-hidden h-[64px]">
            <Button className="text-tiny" radius="full" size="lg" isIconOnly aria-label="Like" color={isFavorite ? 'danger' : 'default'} variant="flat" onPress={() => setIsFavorite(!isFavorite)}>
                {!isFavorite ? <HeartIcon className="w-6 h-6" /> : <HeartFilledIcon className="w-6 h-6" color="danger"/>}
            </Button>
            <Button className="text-tiny" radius="full" size="lg" isIconOnly aria-label="Like" color="default" variant="flat" onPress={onOpen}>
                <ChatBubbleBottomCenterTextIcon className="w-6 h-6" />
            </Button>
            <Button className="text-tiny" radius="full" size="lg" isIconOnly aria-label="Like" color="default" variant="flat">
                <Link to={item.src} target="_blank" state={item.src} key={item.title}>
                    <ArrowDownTrayIcon className="w-6 h-6" /> 
                </Link>
            </Button>
        </CardFooter>
    )
}
