'use client'

import React from 'react'
import { useTheme } from './Light.sft'

export function Light({ children }: { children: React.ReactNode }) {
    const theme = useTheme()

    return <div className={theme()}>{children}</div>
}
