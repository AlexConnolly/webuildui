import React, { useState } from "react";

interface IconBarProps {
    buttons: IconButton[];
}

interface IconButton {
    icon: string;
    onSelected?: () => void; 
}

interface IconBarState {
    selected: IconButton;
}

const IconBar : React.FC<IconBarProps> = ({ buttons }) => {

    const [state, setState] = useState<IconBarState>({
        selected: buttons[0]
    });

    return (
        <div className="w-full bg-gray-300 h-14">
            <div className="mx-auto container flex flex-row justify-center content-center items-center">
                <div className="flex flex-row justify-center content-center items-center">
                    {
                        buttons.map((x) => {

                            var isSelected = state.selected == x;

                            var backgroundClass = isSelected ? "bg-gray-400" : "";

                            return (
                                <div className={`h-12 w-14 my-1 mx-1 ${backgroundClass} cursor-pointer hover:bg-gray-400 hover:text-gray-900 pointer rounded flex flex-col justify-center content-center items-center`} onClick={() => {
                                    setState({
                                        selected: x
                                    });

                                    if(x.onSelected) {
                                        x.onSelected();
                                    }
                                }}>
                                    <i className={`${isSelected ? "text-gray-900" : "text-gray-600"} font-bold text-lg bx ${x.icon}`}></i>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
};

export default IconBar;