
import { createStyle as _createStyle } from '@splitflow/designer'
import { useStyle as _useStyle } from '@splitflow/designer/react'

export function useStyle() {
    return _useStyle(style)
}

export const style = _createStyle('Document', {
    "button": {
        "background": {
            "color": [
                0,
                0,
                100,
                100
            ]
        },
        "padding": {
            "top": 0.5,
            "bottom": 0.5,
            "left": 1,
            "right": 1
        },
        "corner": {
            "topLeft": 0.5,
            "topRight": 0.5,
            "bottomLeft": 0.5,
            "bottomRight": 0.5
        }
    },
    "header": {
        "layout": {
            "direction": "row",
            "mainAxisAlignment": "end",
            "crossAxisAlignment": "stretch",
            "spacing": 1
        },
        "padding": {
            "top": 1,
            "bottom": 1
        }
    },
    "root": {
        "padding": {
            "top": 1,
            "bottom": 1,
            "left": 1,
            "right": 1
        }
    },
    "viewer": {
        "corner": {
            "topLeft": 1,
            "topRight": 1,
            "bottomLeft": 1,
            "bottomRight": 1
        }
    }
})
