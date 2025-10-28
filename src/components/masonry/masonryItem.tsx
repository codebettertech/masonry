import { Card, Skeleton, useDisclosure } from '@heroui/react';
import { useNetwork } from '@/hook/useNetwork';
import MasonryItemDetail from './masonryItemDetail';
import MasonryItemFooter from './masonryItemFooter';
import MasonryItemHeader from './masonryItemHeader';
import MasonryItemModal from './masonryItemModal';

type MasonryItemProps = {
    item: {
        src: string;
        title: string;
    }
}

export default function MasonryItem({ item }: MasonryItemProps) {
    const { isOnline } = useNetwork();
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <Skeleton className="bg-default-300" isLoaded={isOnline}>
            <Card isPressable isFooterBlurred className="card-masonry" key={item.title} style={{ borderTopLeftRadius: '16px', borderTopRightRadius: '16px' }}>
                <MasonryItemHeader />
                <MasonryItemDetail item={item} />
                <MasonryItemFooter item={item} onOpen={onOpen} />
                <MasonryItemModal isOpen={isOpen} onOpenChange={onOpenChange} placement="top" item={item} />
            </Card>
        </Skeleton>
    )
}
