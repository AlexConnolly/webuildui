import React from 'react';
import { StyleModifier } from '../modifiers/style-modifiers';
export interface Button {
    text: string;
    close_key: string;
    style: StyleModifier;
}
export interface Modal {
    title: string;
    children: React.ReactNode;
    onClosed: (closeKey: string) => void;
    buttons: Button[];
}
declare class ModalService {
    private modals;
    private observers;
    private static instance;
    private constructor();
    static getInstance(): ModalService;
    subscribe(observer: (modal: Modal | null) => void): void;
    unsubscribe(observer: (modal: Modal | null) => void): void;
    private notify;
    setModal(modal: Modal): void;
    closeCurrent(closeKey: string): void;
    getCurrentModal(): Modal | null;
}
export declare const modalService: ModalService;
export {};
