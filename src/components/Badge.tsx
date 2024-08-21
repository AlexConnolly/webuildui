import React from "react";
import { getAlertFontColor, getButtonFontColor, getStyle, StyleModifier } from "../modifiers/style-modifiers";

interface BadgeProps {
    text: string;
    style: StyleModifier;
}

const Badge : React.FC<BadgeProps> = ({ text, style }) => {

    var fontColor = getButtonFontColor(style);
    var bgColor = getStyle(style);

    return (
        <div className={`inline-block text-sm px-2 py-1 rounded-lg text-${fontColor} bg-${bgColor}`}>
            {text}
        </div>
    )
}

export default Badge;