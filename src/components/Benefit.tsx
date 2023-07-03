import { SELECTED_PAGE } from "@/consts";
import { type SelectedPage } from "@/types";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";

const childVariant = {
    hidden: { opacity: 0, scale: 0.9 }, //Small scale change, then the component will grow from 0.9 to 1
    visible: { opacity: 1, scale: 1 },
};

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
};

const Benefit: React.FC<Props> = ({ icon, title, description, setSelectedPage }) => {
    return (
        <motion.div
            variants={childVariant}
            className="mt-5 rounded-md border-2 border-gray-100 px-5 py-16 text-center"
        >
            <div className="mb-4 flex justify-center">
                <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                    {icon}
                </div>
            </div>

            <h4 className="font-bold">{title}</h4>
            <p className="my-3">{description}</p>
            <AnchorLink
                className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
                onClick={() => setSelectedPage(SELECTED_PAGE.CONTACT_US)}
                href={`#${SELECTED_PAGE.CONTACT_US}`}
            >
                <p>Learn More</p>
            </AnchorLink>
        </motion.div>
    );
};

export default Benefit;