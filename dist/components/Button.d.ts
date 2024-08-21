import React from 'react';
import { StateModifier } from '../modifiers/state-modifiers';
import { StyleModifier } from '../modifiers/style-modifiers';
import { WidthModifier } from '../modifiers/width-modifiers';
interface ButtonProps {
    style: StyleModifier;
    width?: WidthModifier;
    state?: StateModifier;
    type?: ButtonType;
    children?: React.ReactNode;
    onClick?: () => void;
}
export declare enum ButtonType {
    Default = 0,
    Icon = 1
}
declare const Button: React.FC<ButtonProps>;
export default Button;
