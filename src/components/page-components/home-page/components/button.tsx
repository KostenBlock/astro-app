import React from "react";
import { useStore } from '@nanostores/react';
import { counter, setState } from "~/store/counter.ts";

import classes from "./button.module.scss";

interface Props {
    text: string;
}

export default function Button({ text }: Props) {
    const store = useStore(counter);

    return (
        <div className={`row`}>
            <button
                onClick={() => setState({ value: store.value + 10 })}
                className={`${classes.button}`}
            >
                {text}
            </button>
            <p>{store.value}</p>
        </div>
    );
};
