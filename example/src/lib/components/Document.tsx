'use client'

import { useContext } from 'react'
import { EditorContext } from '../contexts'
import Link from 'next/link'
import { useStyle } from './Document.sf'
import { Viewer } from '@splitflow/react'

export function Document() {
    const module = useContext(EditorContext)
    const style = useStyle()

    return (
        <section className={style.root()}>
            <header className={style.header()}>
                <Link className={style.button({ edit: true })} href="/document/edit">
                    Edit
                </Link>
            </header>
            <main className={style.viewer()}>
                <Viewer module={module} />
            </main>
        </section>
    )
}
