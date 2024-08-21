import React from "react";
import { StyleModifier } from "../modifiers/style-modifiers";
interface AlertProps {
    title: string;
    message: string;
    style: StyleModifier;
}
declare const Alert: React.FC<AlertProps>;
export default Alert;
