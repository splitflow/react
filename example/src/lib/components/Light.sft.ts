
import { createTheme as _createTheme } from '@splitflow/designer'
import { useTheme as _useTheme } from '@splitflow/designer/react'

export function useTheme() {
    return _useTheme(theme)
}

export const theme = _createTheme('Light', {
    "palette": {
        "primary": [
            30,
            90,
            80,
            100
        ],
        "scheme": [
            278,
            35,
            78,
            100
        ],
        "scheme1": [
            278,
            35,
            78,
            100
        ],
        "scheme2": [
            337,
            100,
            89,
            100
        ],
        "scheme3": [
            338,
            100,
            84,
            100
        ],
        "scheme4": [
            208,
            97,
            87,
            100
        ],
        "scheme5": [
            209,
            100,
            82,
            100
        ]
    }
})
