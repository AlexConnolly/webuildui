import React from "react";
import { WidthModifier } from "../modifiers/width-modifiers";

// Define a type for valid HTML input types
export type InputType = 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'radio' | 'submit' | 'button' | 'date' | 'range' | 'tel' | 'url' | 'search';

interface InputProps {
    placeholder?: string;
    type?: InputType;
    width?: WidthModifier;
    label?: string;
    icon?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // Added onChange
}

const Input: React.FC<InputProps> = ({ placeholder, type = 'text', width, label, icon, onChange }) => {
    const widthClass = width === WidthModifier.Fill ? "w-full" : "";

    return (
        <div className="flex flex-col">
            {label && <label className="mt-3 mb-2 ml-1 text-sm font-medium">{label}</label>}
            <div className="relative">
                <input 
                    type={type} 
                    placeholder={placeholder} 
                    className={`border-2 px-3 py-2 rounded ${widthClass} ${icon ? "pl-10" : ""}`} 
                    onChange={onChange} // Added onChange handler
                />
                {icon && (
                    <i className={`bx ${icon} absolute top-1/2 left-3 transform -translate-y-1/2`} />
                )}
            </div>
        </div>
    );
}

export default Input;
