import { SELECTED_PAGE } from "./consts"

export type SelectedPage = typeof SELECTED_PAGE[keyof typeof SELECTED_PAGE]

export interface Benefit {
    icon: JSX.Element
    title: string
    description: string
}
export type ListOfBenefit = Benefit[]



export interface Class {
    name: string
    description?: string
    image: string
}
export type ListOfClasses = Class[]



// enum SelectedPage {
//    Home = "home",
//    Benefits = "benefits",
//    OurClasses = "ourclasses",
//    ContactUs = "contactus"
// }


// In the component App.tsx = const [selectedPage, setSelectedPage] = useState<SectionsPage>(SELECTED_PAGE.HOME)
