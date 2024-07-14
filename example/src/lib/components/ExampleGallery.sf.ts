
import { createStyle as _createStyle } from '@splitflow/designer'
import { useStyle as _useStyle } from '@splitflow/designer/react'

export function useStyle() {
    return _useStyle(style)
}

export const style = _createStyle('ExampleGallery', {
    "example": {
        "background": {
            "color": [
                0,
                0,
                91,
                100
            ]
        },
        "padding": {
            "top": 1,
            "bottom": 1,
            "left": 1,
            "right": 1
        },
        "corner": {
            "topLeft": 0.75,
            "topRight": 0.75,
            "bottomLeft": 0.75,
            "bottomRight": 0.75
        },
        "layout": {
            "direction": "column",
            "mainAxisAlignment": "start",
            "crossAxisAlignment": "stretch",
            "spacing": 0.5
        },
        ":hover": {
            "background": {
                "color": [
                    0,
                    0,
                    95,
                    100
                ]
            }
        }
    },
    "root": {
        "layout": {
            "direction": "row",
            "mainAxisAlignment": "center",
            "crossAxisAlignment": "center",
            "spacing": 1
        },
        "position": {
            "mainAxisAlignment": "stretch",
            "crossAxisAlignment": "start"
        }
    },
    "title": {
        "typography": {
            "fontWeight": 500,
            "fontSize": 1.25
        }
    }
})
