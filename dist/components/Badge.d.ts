import React from "react";
import { StyleModifier } from "../modifiers/style-modifiers";
interface BadgeProps {
    text: string;
    style: StyleModifier;
}
declare const Badge: React.FC<BadgeProps>;
export default Badge;
