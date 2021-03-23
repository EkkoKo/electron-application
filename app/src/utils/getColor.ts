import { Colors, colorsArr } from "./constants";

export default function getColor(): Colors {
    return colorsArr[Math.floor(Math.random() * colorsArr.length)] as Colors
}