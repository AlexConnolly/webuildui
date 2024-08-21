import React from "react";
import { WidthModifier } from "../modifiers/width-modifiers";
export type InputType = 'text' | 'password' | 'email' | 'number' | 'checkbox' | 'radio' | 'submit' | 'button' | 'date' | 'range' | 'tel' | 'url' | 'search';
interface InputProps {
    placeholder?: string;
    type?: InputType;
    width?: WidthModifier;
    label?: string;
    icon?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
declare const Input: React.FC<InputProps>;
export default Input;
