import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/Logo.png"
import Link from "./Link"
import { type SelectedPage } from "@/types"
import { SELECTED_PAGE } from "@/consts"
import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"


type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
    isTopOfPage: boolean
}

const Navbar: React.FC<Props> = ({ selectedPage, setSelectedPage, isTopOfPage }) => {
    const flexBetween = "flex items-center justify-between"
    const [isMenuToggle, setIsMenuToggle] = useState<boolean>(false)
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shodow"

    return (
        <nav>
            <div className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}>
                <div className={`${flexBetween} mx-auto w-5/6`}>
                    <div className={`${flexBetween} w-full gap-16`}>
                        {/* LEFT SIDE*/}
                        <img src={Logo} alt="logo" />

                        {/* RIGHT SIDE*/}
                        {
                            isAboveMediumScreens ? (
                                <div className={`${flexBetween} w-full`}>
                                    <div className={`${flexBetween} gap-8 text-sm`}>
                                        {
                                            Object.entries(SELECTED_PAGE).map((section) => {
                                                return (
                                                    <>
                                                        <Link
                                                            key={section[1]}
                                                            page={section[1][0].toUpperCase() + section[1].substring(1).split(/(?=[A-Z])/).toString().replace(",", " ")}
                                                            selectedPage={selectedPage}
                                                            setSelectedPage={setSelectedPage}
                                                        />
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                    <div className={`${flexBetween} gap-8`}>
                                        <p>Sign In</p>
                                        <ActionButton setSelectedPage={setSelectedPage}>Become a Member</ActionButton>
                                    </div>
                                </div>
                            ) : (
                                <button
                                    onClick={() => setIsMenuToggle(!isMenuToggle)}
                                    className="rounded-full bg-secondary-500 p-2"
                                >
                                    <Bars3Icon className="h-6 w-6 text-white" />
                                </button>
                            )
                        }

                    </div>
                </div>
            </div>

            {/* MOBILE MENU MODAL */}
            {
                !isAboveMediumScreens && isMenuToggle && (
                    <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                        {/* CLOSE ICON */}
                        <div className="flex justify-end p-12">
                            <button onClick={() => setIsMenuToggle(!isMenuToggle)}>
                                <XMarkIcon className="h-6 w-6 text-gray-400" />
                            </button>
                        </div>

                        {/* MENU ITEMS */}
                        <div className="ml-[33%] flex flex-col gap-10 text-2xl">
                            {
                                Object.entries(SELECTED_PAGE).map((section) => {
                                    return (
                                        <>
                                            <Link
                                                key={section[1]}
                                                page={section[1][0].toUpperCase() + section[1].substring(1).split(/(?=[A-Z])/).toString().replace(",", " ")}
                                                selectedPage={selectedPage}
                                                setSelectedPage={setSelectedPage}
                                            />
                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }
        </nav>
    )
}

export default Navbar