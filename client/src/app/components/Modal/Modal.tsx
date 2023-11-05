"use client"

import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure } from "@nextui-org/react";

export default function ModalPopUp({ name }) {

    const {isOpen, onOpen, onClose} = useDisclosure();

    const [size, setSize] = React.useState('xl')

    const sizes = ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "full"];

    const handleOpen = (size) => {
        setSize(size)
        onOpen();
    }

    return (
        <>
            <div className="flex w-[65px] h-[30px] bg-green-700 rounded-[3px]">
                <div className="ml-auto mr-auto self-center text-center text-white text-[11px] font-normal">
                    <a onClick={() => handleOpen('xl')}>Request Ride</a>
                </div>
            </div>
            <Modal
                size={size}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="flex flex-col gap-1">Successfully Requested Ride!</ModalHeader>
                            <ModalBody>
                                <p>
                                    Your driver's name is {name}.
                                </p>
                                <p>
                                    Please press accept to confirm your ride, or decline to remove your request.
                                </p>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}>
                                    Decline
                                </Button>
                                <Button color="primary" onPress={onClose}>
                                    Accept
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
