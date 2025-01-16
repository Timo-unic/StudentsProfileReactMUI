import React from 'react'

type ModalProps = {
    children: React.ReactNode
    title: string
    onClose: () => void
}
const Modal = ({ children, title, onClose }: ModalProps) => {
    return (
        <>
            <div
                className="fixed bg-black/50 top-0 right-0 bottom-0 left-0"
                onClick={onClose}
            />
            <div className="fixed rounded w-[500px] top-24 left-1/2 -translate-x-1/2 bg-white p-10">
                <h1 className="text-center text-2xl mb-2">{title}</h1>
                {children}
            </div>
        </>
    )
}
export default Modal
