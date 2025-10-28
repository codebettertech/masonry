import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, Image } from '@heroui/react'

export default function MasonryItemModal({ isOpen, onOpenChange, placement, item }: { isOpen: boolean; onOpenChange: (isOpen: boolean) => void, placement: "top" | "center" | "bottom" | "auto", item: { src: string; title: string; } }) {
    return (
        <Modal isOpen={isOpen} placement={placement} onOpenChange={onOpenChange}
            motionProps={{
                variants: {
                    enter: {
                        y: 0,
                        opacity: 1,
                        transition: {
                            duration: 0.3,
                            ease: "easeOut",
                        },
                    },
                    exit: {
                        y: -20,
                        opacity: 0,
                        transition: {
                            duration: 0.2,
                            ease: "easeIn",
                        },
                    },
                },
            }}>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader className="flex flex-col gap-1">{item.title}</ModalHeader>
                        <ModalBody>
                            <Image
                                isZoomed
                                src={item.src}
                                alt={item.title}
                                title={item.title}
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button color="danger" variant="light" onPress={onClose}>
                                Close
                            </Button>
                            <Button color="primary" onPress={onClose}>
                                Action
                            </Button>
                        </ModalFooter>
                    </>
                )}
            </ModalContent>
        </Modal>
    )
}
