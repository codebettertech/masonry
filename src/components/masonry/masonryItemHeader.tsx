import { CheckIcon, PlusIcon } from '@heroicons/react/24/outline'
import { CardHeader, Avatar, Button } from '@heroui/react'
import React from 'react'

export default function MasonryItemHeader() {
    const [isFollowed, setIsFollowed] = React.useState(false);
    return (
        <CardHeader className="bg-white/30 bottom-0 border-zinc-100/50 z-10 justify-between" style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
            <div className="flex gap-5">
                <Avatar
                    isBordered
                    color="danger"
                    radius="full"
                    size="md"
                    src="https://heroui.com/avatars/avatar-1.png"
                />
                <div className="flex flex-col gap-1 items-start justify-center">
                    <h4 className="text-small font-bold leading-none text-white">Zoey Lang</h4>
                    <h5 className="text-small tracking-tight text-white">@zoeylang</h5>
                </div>
            </div>
            <Button
                className={isFollowed ? "bg-danger text-foreground" : ""}
                color="default"
                radius="full"
                startContent={isFollowed ? <CheckIcon className="w-4 h-4 text-white" /> : <PlusIcon className="w-4 h-4" />}
                variant={isFollowed ? "bordered" : "solid"}
                onPress={() => setIsFollowed(!isFollowed)}
            >
                {isFollowed ? "Unfollow" : "Follow"}
            </Button>
        </CardHeader>
    )
}
