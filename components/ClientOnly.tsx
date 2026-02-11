"use client";

import React, { useState, useEffect } from 'react';

/**
 * ClientOnly component to ensure that the children are only rendered on the client side.
 * This is a fundamental fix for HMR and SSR mismatch issues in Next.js + Turbopack.
 */
export function ClientOnly({ children, fallback = null }: { children: React.ReactNode; fallback?: React.ReactNode }) {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(() => {
        setHasMounted(true);
    }, []);

    if (!hasMounted) {
        return <>{fallback}</>;
    }

    return <>{children}</>;
}
