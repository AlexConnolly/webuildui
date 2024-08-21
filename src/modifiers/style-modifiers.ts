export enum StyleModifier {
    Default,
    Primary,
    Success,
    Error
}

export function getStyle(style: StyleModifier) {
    switch(style) {
        case StyleModifier.Default:
            return "gray-200";
        break;

        case StyleModifier.Primary:
            return "black";
        break;

        case StyleModifier.Success:
            return "green-400";
        break;

        case StyleModifier.Error:
            return "red-500";
        break;
    }
}

export function getButtonFontColor(style: StyleModifier) {
    switch(style) {
        case StyleModifier.Default:
            return "gray-600";

        case StyleModifier.Error:
            return "red-100";
        
        case StyleModifier.Primary:
            return "white";
        
        case StyleModifier.Success:
            return "green-800";
    }
}

export function getAlertFontColor(style : StyleModifier) {
    switch(style) {
        case StyleModifier.Default:
            return "gray-600";

        case StyleModifier.Error:
            return "red-600";
        
        case StyleModifier.Primary:
            return "black";
        
        case StyleModifier.Success:
            return "green-800";
    }
}

export function getAlertStyle(style: StyleModifier) {
    switch(style) {
        case StyleModifier.Default:
            return "gray-100";
        break;

        case StyleModifier.Primary:
            return "gray-200";
        break;

        case StyleModifier.Success:
            return "green-50";
        break;

        case StyleModifier.Error:
            return "red-50";
        break;
    }
}

export function getHoverStyle(style: StyleModifier) {
    switch(style) {
        case StyleModifier.Default:
            return "gray-300";
        break;

        case StyleModifier.Primary:
            return "black";
        break;

        case StyleModifier.Success:
            return "green-500";
        break;

        case StyleModifier.Error:
            return "red-600";
        break;
    }
}