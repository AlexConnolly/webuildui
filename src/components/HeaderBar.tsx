import React from "react";
import { StyleModifier } from "../index";
import { drawerMenuService } from "../services/DrawerMenuService";
import Button, { ButtonType } from "./Button";

interface HeaderBarProps {
    title?: string;
    onSelectItem: (click_key: string) => void;
    items: HeaderBarItem[];
}

interface HeaderBarItem {
    text: string;
    click_key: string;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, items, onSelectItem }) => {
    return (
        <div className="h-12 md:h-20 w-full bg-gray-200">
            {/* Mobile Header (Visible below md) */}
            <div className="md:hidden h-12 mx-auto container text-slate-600 font-bold flex flex-row justify-center items-center">
                <div className="w-10 h-10 bg-gray-300 rounded ml-2 opacity-0"></div>

                <div className="grow text-center">
                    {title}
                </div>

                <div className="w-10 h-10 bg-gray-300 rounded mr-2 flex justify-center items-center" onClick={() => {
                    drawerMenuService.setDrawerMenu({
                        title: "",
                        items: items.map((x) => ({
                            text: x.text,
                            close_key: x.click_key
                        })),
                        onClosed: (close_key: string) => {
                            if (onSelectItem) onSelectItem(close_key);
                        }
                    });
                }}>
                    <i className="text-gray-400 font-bold text-lg bx bx-menu"></i>
                </div>
            </div>

            {/* Desktop Header (Visible above md) */}
            <div className="hidden md:flex h-20 mx-auto container text-slate-600 items-center">
                <div className="text-xl font-bold text-left px-4 text-slate-700">
                    {title}
                </div>

                <div className="px-4 flex-grow flex justify-end">
                    {items?.map((x) => (
                        <div key={x.click_key} className="px-2 hover:text-slate-800 cursor-pointer select-none" onClick={() => onSelectItem(x.click_key)}>
                            {x.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;
