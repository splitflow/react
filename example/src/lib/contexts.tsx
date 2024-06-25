'use client'

import { createContext, useContext, useRef, useState } from 'react'
import { AppBundle, SplitflowApp, createSplitflowApp } from '@splitflow/app'
import { useServerInsertedHTML } from 'next/navigation'
import { SSRRegistry, formatCss } from '@splitflow/designer'
import { SplitflowDesignerContext } from '@splitflow/designer/react'
import {
    ChartBundle,
    ChartModule,
    DatasourceModule,
    DatasourceNode,
    createBarChartModule,
    createDatasourceModule,
    createLineChartModule,
    createPieChartModule
} from '@splitflow/chart'

export const SsrRegistryContext = createContext<SSRRegistry>(undefined)

export function SsrRegistryProvider({ children }: { children: React.ReactNode }) {
    const [ssrRegistry] = useState(() => ({ style: {}, theme: {} }))
    const isServerInserted = useRef(false)

    useServerInsertedHTML(() => {
        if (!isServerInserted.current) {
            isServerInserted.current = true

            return (
                <>
                    <style type="text/css" data-splitflow-id="style">
                        {formatCss(ssrRegistry.style)}
                    </style>
                    <style type="text/css" data-splitflow-id="theme">
                        {formatCss(ssrRegistry.theme)}
                    </style>
                </>
            )
        }
    })

    return <SsrRegistryContext.Provider value={ssrRegistry}>{children}</SsrRegistryContext.Provider>
}

export const SplitflowAppContext = createContext<SplitflowApp>(undefined)

export function SplitflowAppProvider({
    bundle,
    children
}: {
    bundle: AppBundle
    children: React.ReactNode
}) {
    const ssrRegistry = useContext(SsrRegistryContext)

    const [app] = useState(() => {
        const app = createSplitflowApp(bundle, ssrRegistry)
        app.initialize()
        return app
    })

    return (
        <SplitflowAppContext.Provider value={app}>
            <SplitflowDesignerContext.Provider value={app.designer}>
                {children}
            </SplitflowDesignerContext.Provider>
        </SplitflowAppContext.Provider>
    )
}

export const ChartContext = createContext<{
    lineChart: ChartModule
    barChart: ChartModule
    pieChart: ChartModule
}>(undefined)

export function ChartProvider({
    lineChartBundle,
    barChartBundle,
    pieChartBundle,
    children
}: {
    lineChartBundle: ChartBundle
    barChartBundle: ChartBundle
    pieChartBundle: ChartBundle
    children: React.ReactNode
}) {
    const app = useContext(SplitflowAppContext)

    const [value] = useState(() => {
        const lineChart = createLineChartModule(lineChartBundle, app)
        const barChart = createBarChartModule(barChartBundle, app)
        const pieChart = createPieChartModule(pieChartBundle, app)

        lineChart.initialize()
        barChart.initialize()
        pieChart.initialize()

        pieChart.updateDefinition({
            datasourceName: 'PopulationByCountry',
            series: {
                'Population, total': { type: 'pie' }
            }
        })

        lineChart.updateDefinition({
            datasourceName: 'PopulationByTime',
            series: {
                Canada: { type: 'line' },
                'United States': { type: 'line' }
            }
        })

        barChart.updateDefinition({
            datasourceName: 'PopulationByAge',
            series: {
                Canada: { type: 'bar' },
                'United States': { type: 'bar' }
            }
        })

        return { lineChart, barChart, pieChart }
    })

    return <ChartContext.Provider value={value}>{children}</ChartContext.Provider>
}

export const DatasourceContext = createContext<{
    populationByTime: DatasourceModule
    populationByAge: DatasourceModule
    populationByCountry: DatasourceModule
}>(undefined)

export function DatasourceProvider({
    populationByTimeData,
    populationByAgeData,
    populationByCountryData,
    children
}: {
    populationByTimeData: DatasourceNode
    populationByAgeData: DatasourceNode
    populationByCountryData: DatasourceNode
    children: React.ReactNode
}) {
    const app = useContext(SplitflowAppContext)

    const [value] = useState(() => {
        const populationByTime = createDatasourceModule({ datasourceName: 'PopulationByTime' }, app)
        const populationByAge = createDatasourceModule({ datasourceName: 'PopulationByAge' }, app)
        const populationByCountry = createDatasourceModule(
            { datasourceName: 'PopulationByCountry' },
            app
        )

        populationByTime.updateDatasource(populationByTimeData)
        populationByAge.updateDatasource(populationByAgeData)
        populationByCountry.updateDatasource(populationByCountryData)

        return { populationByTime, populationByAge, populationByCountry }
    })

    return <DatasourceContext.Provider value={value}>{children}</DatasourceContext.Provider>
}
