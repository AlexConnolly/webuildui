export interface DrawerMenuItem {
    text: string;
    close_key: string;
}
export interface DrawerMenu {
    title: string;
    items: DrawerMenuItem[];
    onClosed: (close_key: string) => void;
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
    closeCurrent(closeKey: string): void;
    getCurrentDrawerMenu(): DrawerMenu | null;
}
export declare const drawerMenuService: DrawerMenuService;
export {};
