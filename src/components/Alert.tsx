import React from "react";
import { getAlertFontColor, getAlertStyle, getStyle, StyleModifier } from "../modifiers/style-modifiers";

interface AlertProps {
    title: string;
    message: string;
    style: StyleModifier;
}

const Alert : React.FC<AlertProps> = ( {title, message, style }) => {

    const borderColor = getStyle(style);
    const fontColor = getAlertFontColor(style);
    const bgColor = getAlertStyle(style);

    return (
        <div className={`bg-${bgColor} rounded border-2 border-${borderColor} text-${fontColor} px-6 py-4`}>
            <div className="font-semibold text-lg">
                {title}
            </div>

            <div className="text-base mt-2">
                {message}
            </div>
        </div>
    )
}

export default Alert;