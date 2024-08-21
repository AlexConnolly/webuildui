import React from "react";
interface IconBarProps {
    buttons: IconButton[];
}
interface IconButton {
    icon: string;
    onSelected?: () => void;
}
declare const IconBar: React.FC<IconBarProps>;
export default IconBar;
