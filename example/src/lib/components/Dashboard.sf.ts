
import { createStyle as _createStyle } from '@splitflow/designer'
import { useStyle as _useStyle } from '@splitflow/designer/react'

export function useStyle() {
    return _useStyle(style)
}

export const style = _createStyle('Dashboard', {
    "chart": {
        "size": {
            "height": 35
        },
        "layout": {
            "direction": "column",
            "mainAxisAlignment": "start",
            "crossAxisAlignment": "stretch",
            "spacing": 1
        },
        ":populationByTime": {
            "position": {
                "mainAxisAlignment": "shrink",
                "crossAxisAlignment": "stretch",
                "mainAxisSize": 70
            }
        }
    },
    "root": {
        "position": {
            "mainAxisAlignment": "stretch",
            "crossAxisAlignment": "stretch"
        },
        "layout": {
            "direction": "column",
            "mainAxisAlignment": "stretch",
            "crossAxisAlignment": "stretch",
            "spacing": 1
        }
    },
    "row": {
        "layout": {
            "direction": "row",
            "mainAxisAlignment": "stretch",
            "crossAxisAlignment": "stretch",
            "spacing": 1
        }
    },
    "title": {
        "typography": {
            "fontSize": 2,
            "fontWeight": 300,
            "color": [
                0,
                0,
                42,
                100
            ]
        }
    }
})
