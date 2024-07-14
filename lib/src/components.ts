import {
    LineChart as _LineChartSsr,
    BarChart as _BarChartSsr,
    PieChart as _PieChartSsr
} from '@splitflow/chart/ssr'
import {
    LineChart as _LineChart,
    BarChart as _BarChart,
    PieChart as _PieChart
} from '@splitflow/chart'
import {
    Editor as _EditorSsr,
    Viewer as _ViewerSsr
} from '@splitflow/editor/ssr'
import {
    Editor as _Editor,
    Viewer as _Viewer
} from '@splitflow/editor'
import { createWrapper, createSsrWrapper } from './wrapper'

// chart
export const LineChart =
    typeof window === 'undefined' ? createSsrWrapper(_LineChartSsr) : createWrapper(_LineChart)
export const BarChart =
    typeof window === 'undefined' ? createSsrWrapper(_BarChartSsr) : createWrapper(_BarChart)
export const PieChart =
    typeof window === 'undefined' ? createSsrWrapper(_PieChartSsr) : createWrapper(_PieChart)
// editor
export const Editor =
    typeof window === 'undefined' ? createSsrWrapper(_EditorSsr) : createWrapper(_Editor)
export const Viewer =
    typeof window === 'undefined' ? createSsrWrapper(_ViewerSsr) : createWrapper(_Viewer)