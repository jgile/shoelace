import { LitElement } from 'lit';
import { EventEmitter } from '../../internal/decorators';
export default class SlSwitch extends LitElement {
    static styles: import("lit").CSSResult;
    input: HTMLInputElement;
    private switchId;
    private labelId;
    private hasFocus;
    name: string;
    value: string;
    disabled: boolean;
    required: boolean;
    checked: boolean;
    invalid: boolean;
    slBlur: EventEmitter<void>;
    slChange: EventEmitter<void>;
    slFocus: EventEmitter<void>;
    firstUpdated(): void;
    click(): void;
    focus(options?: FocusOptions): void;
    blur(): void;
    reportValidity(): boolean;
    setCustomValidity(message: string): void;
    handleBlur(): void;
    handleCheckedChange(): void;
    handleClick(): void;
    handleDisabledChange(): void;
    handleFocus(): void;
    handleKeyDown(event: KeyboardEvent): void;
    handleMouseDown(event: MouseEvent): void;
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'sl-switch': SlSwitch;
    }
}
