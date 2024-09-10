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

class ModalService {
    private modals: Modal[] = [];
    private observers: ((modal: Modal | null) => void)[] = [];
  
    private static instance: ModalService;
  
    private constructor() {}
  
    // Singleton pattern: Ensure only one instance of ModalService
    public static getInstance(): ModalService {
      if (!ModalService.instance) {
        ModalService.instance = new ModalService();
      }
      return ModalService.instance;
    }
  
    // Subscribe to modal changes
    public subscribe(observer: (modal: Modal | null) => void): void {
      this.observers.push(observer);
      observer(this.getCurrentModal());
    }
  
    // Unsubscribe from modal changes
    public unsubscribe(observer: (modal: Modal | null) => void): void {
      this.observers = this.observers.filter(obs => obs !== observer);
    }
  
    // Notify all observers of the current modal
    private notify(): void {
      const currentModal = this.getCurrentModal();
      this.observers.forEach(observer => observer(currentModal));
    }
  
    // Push a new modal onto the stack
    public setModal(modal: Modal): void {
      this.modals.push(modal);
      this.notify();
    }
  
    // Pop the current modal off the stack and notify observers
    public closeCurrent(clickedItem?: ModalButton): void {
      const currentModal = this.modals.pop();

      if(currentModal && clickedItem) {
        clickedItem.onClick();
      }

      if (currentModal && currentModal.onClosed) {
        currentModal.onClosed();
      }

      this.notify();
    }
  
    // Get the current modal
    public getCurrentModal(): Modal | null {
      return this.modals.length > 0 ? this.modals[this.modals.length - 1] : null;
    }
  }
  
  // Export the singleton instance of ModalService
  export const modalService = ModalService.getInstance();
  