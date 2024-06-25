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
import { createWrapper, createSsrWrapper } from './wrapper'

export const LineChart =
    typeof window === 'undefined' ? createSsrWrapper(_LineChartSsr) : createWrapper(_LineChart)
export const BarChart =
    typeof window === 'undefined' ? createSsrWrapper(_BarChartSsr) : createWrapper(_BarChart)
export const PieChart =
    typeof window === 'undefined' ? createSsrWrapper(_PieChartSsr) : createWrapper(_PieChart)
