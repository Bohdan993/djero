import { $headerLayout as headerLayout} from "../../view"
import {
    addClass,
    removeClass
} from "./Helpers"



export default function onLeave(origin, destination, direction) {

        addClass(
            removeClass(
                removeClass(
                    headerLayout, 
                    'white'), 
                'blue'), 
            'blue-full')

        if (destination === 1) {
            removeClass(
            headerLayout, 
            'blue-full')
            return
        }

        if (destination === 5) {
            removeClass(
                addClass(
                    headerLayout, 
                    'blue'), 
                'blue-full')
            return
        }

        if (destination === 6) {
            removeClass(
                addClass(
                    headerLayout, 
                    'white'), 
                'blue-full')
            return
        }

    }