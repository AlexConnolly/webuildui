import React from "react";
interface HeaderBarProps {
    title?: string;
    onSelectItem: (click_key: string) => void;
    items: HeaderBarItem[];
}
interface HeaderBarItem {
    text: string;
    click_key: string;
}
declare const HeaderBar: React.FC<HeaderBarProps>;
export default HeaderBar;
