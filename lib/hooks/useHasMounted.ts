"use client";

import { useState, useEffect } from 'react';

/**
 * V5.0 Hydration Safety Utility
 * Returns true if the component has mounted on the client.
 * Use this to gate rendering of browser-only logic (window, localstorage, etc.)
 */
export function useHasMounted() {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    return hasMounted;
}
