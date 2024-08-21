import React from "react";

interface PanelProps {
    title: string;
    children?: React.ReactNode
}

const Panel : React.FC<PanelProps> = ({ title, children}) => {
    return (
        <div className="rounded shadow bg-white mb-4">
            <div className="px-8 pb-3 pt-6 font-bold text-2xl text-slate-900">
                {title}
            </div>
            <div className="px-8 pb-6">
                {children}
            </div>
        </div>
    )
}

export default Panel;