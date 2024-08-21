import React from "react";

interface HeaderBarProps {
    title?: string;
}

const HeaderBar : React.FC<HeaderBarProps> = ({title}) => {
    return (
        <div className="h-12 w-full bg-gray-200">
            <div className="h-12 mx-auto container text-slate-600 font-bold flex flex-row justify-center items-center content-center">
                <div>
                {title}
                </div>
            </div>
        </div>
    )
};

export default HeaderBar;