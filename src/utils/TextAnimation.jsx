import {TextRoll } from '../components/motion-primitives/text-roll'
import {AnimatedNumber} from '../components/motion-primitives/animated-number'
import { useEffect, useState } from 'react';

export function TextRollCustomVariants() {
    return (
        <TextRoll
            variants={{
                enter: {
                    initial: { rotateX: 0, filter: 'blur(0px)' },
                    animate: { rotateX: 90, filter: 'blur(2px)' },
                },
                exit: {
                    initial: { rotateX: 90, filter: 'blur(2px)' },
                    animate: { rotateX: 0, filter: 'blur(0px)' },
                },
            }}
        >
            Weather 24 Your Live Forecaster...
        </TextRoll>
    );
}

export function AnimatedNumberBasic() {
    const [value, setValue] = useState(100000);

    useEffect(() => {
        setValue(10);
    }, []);

    return (
        <div>
            <AnimatedNumber
                springOptions={{
                    bounce: 0,
                    duration: 3000,
                }}
                value={value}
            />
        </div>
    );
}