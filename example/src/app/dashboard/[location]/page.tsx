import { Dashboard } from '@/lib/components/Dashboard'
import { DatasourceProvider } from '@/lib/contexts'
import {
    NORTH_AMERICA,
    loadPopulationByAgeDatasource,
    loadPopulationByCountryDatasource,
    loadPopulationByTimeDatasource
} from '@/lib/worldbank'
import styles from './page.module.css'

export default async function DashboardPage() {
    const [populationByTimeData, populationByAgeData, populationByCountryData] = await Promise.all([
        loadPopulationByTimeDatasource(NORTH_AMERICA),
        loadPopulationByAgeDatasource(NORTH_AMERICA),
        loadPopulationByCountryDatasource(NORTH_AMERICA)
    ])

    return (
        <main className={styles.main}>
            <DatasourceProvider
                populationByTimeData={populationByTimeData}
                populationByAgeData={populationByAgeData}
                populationByCountryData={populationByCountryData}
            >
                <Dashboard />
            </DatasourceProvider>
        </main>
    )
}
