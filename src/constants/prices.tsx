import AppIcon from "@/components/AppIcon"
import { size } from "lodash"
import { BsArrowDown } from 'react-icons/bs'
import { IoMdAdd } from 'react-icons/io'

export const percents = [
    {
        text: 'Today',
        percent: 1.2  
    },
    {
        text: '7 Days',
        percent: 4.3
    },
    {
        text: '30 Days',
        percent: -11.8
    }
]

export const buttonList = [
    {
        text: 'Buy',
        iconElement: <IoMdAdd size={24} />
    },
    {
        text: 'Withdraw',
        iconElement: <BsArrowDown size={24} />
    },
    {
        text: 'Convert',
        iconElement: <AppIcon name='transactions' size={24} />
    }
]