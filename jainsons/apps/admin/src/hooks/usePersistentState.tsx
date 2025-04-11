import { useState, useRef, useEffect } from 'react';

function usePersistentState<T>(initialValue: T) {
    // Create a ref to hold the persistent value across renders
    const valueRef = useRef<T>(initialValue);

    // Create state to trigger re-renders when the value changes
    const [state, setState] = useState<T>(initialValue);

    // Whenever the state changes, update the ref and persist the value
    useEffect(() => {
        valueRef.current = state;
    }, [state]);

    // A setter function that updates both the state and ref
    const setPersistentValue = (newValue: T) => {
        setState(newValue);
    };

    // Return the state value and setter function
    return [state, setPersistentValue] as const;
}

export default usePersistentState;
