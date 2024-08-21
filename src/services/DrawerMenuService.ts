import React from 'react';

export interface DrawerMenuItem {
    text: string;
    close_key: string;
}

export interface DrawerMenu {
    title: string;
    items: DrawerMenuItem[];
    onClosed: (close_key: string) => void;
}

class DrawerMenuService {
    private drawerMenu: DrawerMenu | null = null;
    private observers: ((drawerMenu: DrawerMenu | null) => void)[] = [];

    private static instance: DrawerMenuService;

    private constructor() {}

    // Singleton pattern: Ensure only one instance of DrawerMenuService
    public static getInstance(): DrawerMenuService {
        if (!DrawerMenuService.instance) {
            DrawerMenuService.instance = new DrawerMenuService();
        }
        return DrawerMenuService.instance;
    }

    // Subscribe to drawer menu changes
    public subscribe(observer: (drawerMenu: DrawerMenu | null) => void): void {
        this.observers.push(observer);
        observer(this.getCurrentDrawerMenu());
    }

    // Unsubscribe from drawer menu changes
    public unsubscribe(observer: (drawerMenu: DrawerMenu | null) => void): void {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    // Notify all observers of the current drawer menu
    private notify(): void {
        this.observers.forEach(observer => observer(this.getCurrentDrawerMenu()));
    }

    // Set a new drawer menu (only one can be open at a time)
    public setDrawerMenu(drawerMenu: DrawerMenu): void {
        this.drawerMenu = drawerMenu;
        this.notify();
    }

    // Close the current drawer menu and notify observers
    public closeCurrent(closeKey: string): void {
        if (this.drawerMenu && this.drawerMenu.onClosed) {
            this.drawerMenu.onClosed(closeKey);
        }
        this.drawerMenu = null;
        this.notify();
    }

    // Get the current drawer menu
    public getCurrentDrawerMenu(): DrawerMenu | null {
        return this.drawerMenu;
    }
}

// Export the singleton instance of DrawerMenuService
export const drawerMenuService = DrawerMenuService.getInstance();
