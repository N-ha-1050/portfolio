import { useState } from "react"

export const useDisclosure = (initialState: boolean = false) => {
    const [isOpen, setOpen] = useState<boolean>(initialState)
    const onClose = () => setOpen(false)
    const onOpen = () => setOpen(true)
    const onToggle = () => setOpen(!isOpen)
    return { isOpen, onClose, onOpen, onToggle }
}
