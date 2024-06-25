'use client'

import { useRouter } from 'next/navigation'
import { useStyle } from './ExampleGallery.sf'

export function ExampleGallery() {
    const router = useRouter()
    const style = useStyle()

    return (
        <section className={style.root()}>
            <article
                className={style.example()}
                onClick={() => router.push('/dashboard/north-america')}
            >
                <h1 className={style.title()}>Dashboard</h1>
                <p className={style.description()}>Showcase the Splitflow Chart module</p>
            </article>
        </section>
    )
}
