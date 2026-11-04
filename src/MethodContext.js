import { EventEmitter } from './EventEmitter';

export const obj = {
    count: 0,

    _handler: null,

    subscribe() {
        this._handler = () => {
            this.count += 1;
        };
        EventEmitter.on('click', this._handler);
    },

    unsubscribe() {
        EventEmitter.off('click', this._handler);
    },
};

export const obj1 = {
    first(...args) {
        this.second(...args.reverse());
    },
    second() {},
};
