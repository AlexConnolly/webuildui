export declare enum StyleModifier {
    Default = 0,
    Primary = 1,
    Success = 2,
    Error = 3
}
export declare function getStyle(style: StyleModifier): "gray-200" | "black" | "green-400" | "red-500";
export declare function getButtonFontColor(style: StyleModifier): "gray-600" | "red-100" | "white" | "green-800";
export declare function getAlertFontColor(style: StyleModifier): "black" | "gray-600" | "green-800" | "red-600";
export declare function getAlertStyle(style: StyleModifier): "gray-200" | "gray-100" | "green-50" | "red-50";
export declare function getHoverStyle(style: StyleModifier): "black" | "red-600" | "gray-300" | "green-500";
