import React from 'react';
import { StateModifier } from '../modifiers/state-modifiers';
import {  getButtonFontColor, getHoverStyle, getStyle, StyleModifier } from '../modifiers/style-modifiers';
import { WidthModifier } from '../modifiers/width-modifiers';

interface ButtonProps {
  style: StyleModifier,
  width?: WidthModifier
  state?: StateModifier
  type?: ButtonType
  children?: React.ReactNode // Add this line,
  onClick? : () => void;
}

export enum ButtonType {
  Default,
  Icon
}

const Button: React.FC<ButtonProps> = ({ children, style, width, state, type, onClick }) => {

  const styleClass = getStyle(style);
  var hoverClass = getHoverStyle(style);
  const fontClass = getButtonFontColor(style);

  const widthStyle = width === WidthModifier.Fill ? "w-full" : "";

  const isDisabled = state === StateModifier.Disabled || state === StateModifier.Loading;

  const isLoading = state === StateModifier.Loading;

  const sizeClass = type === ButtonType.Icon ? "w-12 h-12" : "px-6 h-12";

  if(isDisabled) {
    hoverClass = "";
  }

  return (
    <button onClick={() => {
      if(!isDisabled) {
        if(onClick != null) {
          onClick();
        }
      }
    }} disabled={isDisabled} className={`${isDisabled ? "opacity-60 cursor-not-allowed" : ""} text-${fontClass} ${sizeClass} rounded font-bold bg-${styleClass} hover:bg-${hoverClass} ${widthStyle}`}>
      {isLoading ? 
        <i className="bx bxs-cog animate-spin"></i> : children}
    </button>
  );
};

export default Button;
