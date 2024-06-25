import { ExampleGallery } from '@/lib/components/ExampleGallery'
import styles from './page.module.css'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1 className={styles.title}>Splitflow Example App</h1>
            <ExampleGallery />
        </main>
    )
}
