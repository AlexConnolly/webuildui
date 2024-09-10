export interface DrawerMenuItem {
    text: string;
    onClicked: () => void;
}
export interface DrawerMenu {
    title: string;
    items: DrawerMenuItem[];
    onClosed?: () => void;
}
declare class DrawerMenuService {
    private drawerMenu;
    private observers;
    private static instance;
    private constructor();
    static getInstance(): DrawerMenuService;
    subscribe(observer: (drawerMenu: DrawerMenu | null) => void): void;
    unsubscribe(observer: (drawerMenu: DrawerMenu | null) => void): void;
    private notify;
    setDrawerMenu(drawerMenu: DrawerMenu): void;
    closeCurrent(closeItem?: DrawerMenuItem): void;
    getCurrentDrawerMenu(): DrawerMenu | null;
}
export declare const drawerMenuService: DrawerMenuService;
export {};
