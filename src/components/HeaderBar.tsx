import React from "react";
import { drawerMenuService } from "../services/DrawerMenuService";

interface HeaderBarProps {
    title?: string;
    items: HeaderBarItem[];
}

interface HeaderBarItem {
    text: string;
    onClick: () => void;
}

const HeaderBar: React.FC<HeaderBarProps> = ({ title, items  }) => {
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
                            onClicked: () => {

                            }
                        }))
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
                        <div key={x.text} className="px-2 hover:text-slate-800 cursor-pointer select-none" onClick={() => x.onClick() }>
                            {x.text}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default HeaderBar;
