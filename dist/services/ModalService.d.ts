import React from 'react';
import { StyleModifier } from '../modifiers/style-modifiers';
export interface ModalButton {
    text: string;
    onClick: () => void;
    style: StyleModifier;
}
export interface Modal {
    title: string;
    children: React.ReactNode;
    onClosed: () => void;
    buttons: ModalButton[];
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
    closeCurrent(clickedItem?: ModalButton): void;
    getCurrentModal(): Modal | null;
}
export declare const modalService: ModalService;
export {};
