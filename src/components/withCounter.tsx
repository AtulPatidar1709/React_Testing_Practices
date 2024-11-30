import React, { ComponentType } from 'react';

interface WithCounterProps {
    count: number;
    increaseCount: () => void;
}

const withCounter = <P extends WithCounterProps>(
    WrappedComponent: ComponentType<P>
) => {
    const EnhancedComponent = (props: Omit<P, keyof WithCounterProps>) => {
        const [count, setCount] = React.useState(0);

        const increaseCount = () => {
            setCount(count + 1);
        };

        return (
            <WrappedComponent
                {...(props as P)}
                count={count}
                increaseCount={increaseCount}
            />
        );
    };

    // Add a display name for debugging and Fast Refresh compatibility
    EnhancedComponent.displayName =
        WrappedComponent.displayName || WrappedComponent.name || 'Component';

    return EnhancedComponent;
};

export default withCounter;
