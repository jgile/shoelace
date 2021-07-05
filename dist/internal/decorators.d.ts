export declare function event(eventName?: string): (protoOrDescriptor: any, name: string) => any;
export declare class EventEmitter<T> {
    private target;
    private eventName;
    constructor(target: HTMLElement, eventName: string);
    emit(eventOptions?: CustomEventInit): CustomEvent<T>;
}
interface WatchOptions {
    waitUntilFirstUpdate?: boolean;
}
export declare function watch(propName: string, options?: WatchOptions): (protoOrDescriptor: any, name: string) => any;
export {};
