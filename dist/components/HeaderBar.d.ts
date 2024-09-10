import React from "react";
interface HeaderBarProps {
    title?: string;
    items: HeaderBarItem[];
}
interface HeaderBarItem {
    text: string;
    onClick: () => void;
}
declare const HeaderBar: React.FC<HeaderBarProps>;
export default HeaderBar;
