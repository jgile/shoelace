import { LitElement } from 'lit';
import { EventEmitter } from '../../internal/decorators';
export default class SlDrawer extends LitElement {
    static styles: import("lit").CSSResult;
    drawer: HTMLElement;
    panel: HTMLElement;
    overlay: HTMLElement;
    private componentId;
    private modal;
    private originalTrigger;
    private hasFooter;
    open: boolean;
    label: string;
    placement: 'top' | 'end' | 'bottom' | 'start';
    contained: boolean;
    noHeader: boolean;
    slShow: EventEmitter<void>;
    slAfterShow: EventEmitter<void>;
    slHide: EventEmitter<void>;
    slAfterHide: EventEmitter<void>;
    slInitialFocus: EventEmitter<void>;
    slRequestClose: EventEmitter<void>;
    connectedCallback(): void;
    firstUpdated(): void;
    disconnectedCallback(): void;
    show(): Promise<void>;
    hide(): Promise<void>;
    private requestClose;
    handleKeyDown(event: KeyboardEvent): void;
    handleOpenChange(): Promise<void>;
    handleSlotChange(): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-drawer': SlDrawer;
    }
}
