import { type SelectedPage } from "@/types"
import ActionButton from "@/shared/ActionButton"
import {
    HomePageText,
    HomePageGraphic,
    SponsorRedBull,
    SponsorForbes,
    SponsorFortune
} from "../assets/index.ts"
import useMediaQuery from "@/hooks/useMediaQuery.ts"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SELECTED_PAGE } from "@/consts.ts"
import { motion } from "framer-motion"

type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Home: React.FC<Props> = ({ setSelectedPage }) => {
    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
    return (
        <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
            {/* IMAGE AND MAIN HEADER */}
            <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
                onViewportEnter={() => setSelectedPage(SELECTED_PAGE.HOME)} //With this we say that it executes a function when it enters this div
            >
                {/* MAIN HEADER */}
                <div className="z-10 mt-32 md:basis-3/5">
                    {/* HEADINGS */}
                    <motion.div
                        className="md:-mt-20"
                        initial="hidden" //state initial
                        whileInView="visible" //when we can see it
                        viewport={{ once: true, amount: 0.5 }} //once in false, for the repeat the animation all time. amount: 0.5 (when the div it's to the 50% the animation will be shown, and 1 when it's to the 100%)
                        transition={{ duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 }, //the div starts at opacity 0, and with x I drive the EJE x
                            visible: { opacity: 1, x: 0 }, //the div ends.. (its vissible)
                        }}
                    >
                        <div className="relative">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] md:before:content-evolvetext">
                                <img alt="home-page-text" src={HomePageText} />
                            </div>
                        </div>

                        <p className="mt-8 text-sm">
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>
                    </motion.div>

                    {/* ACTIONS */}
                    <motion.div
                        className="mt-8 flex items-center gap-8"
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: -50 },
                            visible: { opacity: 1, x: 0 },
                        }}
                    >
                        <ActionButton setSelectedPage={setSelectedPage}>
                            Join Now
                        </ActionButton>
                        <AnchorLink
                            className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                            onClick={() => setSelectedPage(SELECTED_PAGE.CONTACT_US)}
                            href={`#${SELECTED_PAGE.CONTACT_US}`}
                        >
                            <p>Learn More</p>
                        </AnchorLink>
                    </motion.div>
                </div>

                {/* IMAGE */}
                <div
                    className="flex basis-3/5 justify-center md:z-10
              md:ml-40 md:mt-16 md:justify-items-end"
                >
                    <img alt="home-pageGraphic" src={HomePageGraphic} />
                </div>
            </motion.div>

            {/* SPONSORS */}
            {isAboveMediumScreens && (
                <div className="h-[150px] w-full bg-primary-100 py-10">
                    <div className="mx-auto w-5/6">
                        <div className="flex w-3/5 items-center justify-between gap-8">
                            <img alt="redbull-sponsor" src={SponsorRedBull} />
                            <img alt="forbes-sponsor" src={SponsorForbes} />
                            <img alt="fortune-sponsor" src={SponsorFortune} />
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Home