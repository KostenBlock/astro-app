import { atom } from 'nanostores';

interface CounterStoreI {
    value: number;
    second: string;
}

const initialValue: CounterStoreI = {
    value: 0,
    second: "2"
};

const counter = atom(initialValue);

function setState(payload: Partial<CounterStoreI>) {
    let key: keyof CounterStoreI;
    for (key in counter.value) {
            if (Object.hasOwnProperty.call(payload, key) && Object.hasOwnProperty.call(counter.value, key)) {
                counter.set({
                    ...counter.get(),
                    ...payload
                })
            }
        }
}

export { counter, setState };
