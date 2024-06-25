'use client'

import { useContext } from 'react'
import { BarChart, LineChart, PieChart } from '@splitflow/react'
import { ChartContext } from '../contexts'
import { useStyle } from './Dashboard.sf'

export function Dashboard() {
    const { lineChart, barChart, pieChart } = useContext(ChartContext)
    const style = useStyle()

    return (
        <section className={style.root()}>
            <div className={style.row()}>
                <div className={style.chart({ populationByTime: true })}>
                    <h1 className={style.title()}>Population history</h1>
                    <LineChart module={lineChart} />
                </div>
                <div className={style.chart({ populationByCountry: true })}>
                    <h1 className={style.title()}></h1>
                    <PieChart module={pieChart} />
                </div>
            </div>
            <div className={style.row()}>
                <div className={style.chart({ populationByAge: true })}>
                    <h1 className={style.title()}>Age distribution</h1>
                    <BarChart module={barChart} />
                </div>
            </div>
        </section>
    )
}
