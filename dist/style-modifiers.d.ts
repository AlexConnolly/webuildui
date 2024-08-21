export declare enum StyleModifier {
    Default = 0,
    Primary = 1,
    Success = 2,
    Error = 3
}
export declare function getStyle(style: StyleModifier): "gray-100" | "black" | "green-400" | "red-500";
export declare function getHoverStyle(style: StyleModifier): "black" | "gray-200" | "green-500" | "red-600";
