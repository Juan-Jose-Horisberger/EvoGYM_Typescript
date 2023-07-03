import { type SelectedPage } from '@/types'
import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

type Props = {
    page: string
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

const Link: React.FC<Props> = ({ page, selectedPage, setSelectedPage }) => {
    //We add a alias (SelectedPage) because typescript doesn't understand that loweCasePage was converted to lowercase 
    const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage
    return (
        <AnchorLink
            className={`${(selectedPage.toLowerCase() === lowerCasePage) ? "text-primary-500" : ""} transition duration-500 hover:text-primary-300`}
            href={`#${lowerCasePage}`}
            onClick={() => setSelectedPage(lowerCasePage)}
        >
            {page}
        </AnchorLink>
    )
}

export default Link