import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { type SelectedPage } from "@/types"
import { SELECTED_PAGE } from "@/consts"

type Props = {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void
}

const ActionButton: React.FC<Props> = ({ children, setSelectedPage }) => {
    return (
        <AnchorLink
            onClick={() => setSelectedPage(SELECTED_PAGE.CONTACT_US)}
            className=" rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white"
            href={`#${SELECTED_PAGE.CONTACT_US}`}
        >

            {children}
        </AnchorLink>
    )
}

export default ActionButton