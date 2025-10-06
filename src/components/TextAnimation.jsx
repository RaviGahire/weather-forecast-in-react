import { TextRoll } from './motion-primitives/text-roll';

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
        Weather-24 Your Live Forecaster
        </TextRoll>
    );
}
