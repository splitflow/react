import { appConfig, barChartConfig, lineChartConfig, pieChartConfig } from '@/lib/configs'
import { ChartProvider } from '@/lib/contexts'
import { createSplitflowAppKit } from '@splitflow/app'
import {
    createBarChartKit,
    createLineChartKit,
    createPieChartKit,
    loadChartBundle
} from '@splitflow/chart'
import { firstError } from '@splitflow/lib'

export default async function DashboardLayout({ children }: { children: React.ReactNode }) {
    const app = createSplitflowAppKit(appConfig)

    const [lineChartBundle, barChartBundle, pieChartBundle] = await Promise.all([
        loadChartBundle(createLineChartKit(lineChartConfig, app)),
        loadChartBundle(createBarChartKit(barChartConfig, app)),
        loadChartBundle(createPieChartKit(pieChartConfig, app))
    ])

    const error = firstError({
        ...lineChartBundle,
        ...barChartBundle,
        ...pieChartBundle
    })
    if (error) throw error

    return (
        <ChartProvider
            lineChartBundle={lineChartBundle}
            barChartBundle={barChartBundle}
            pieChartBundle={pieChartBundle}
        >
            {children}
        </ChartProvider>
    )
}
