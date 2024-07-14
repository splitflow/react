'use client'

import { useCallback, useContext } from 'react'
import { useRouter } from 'next/navigation'
import { Editor } from '@splitflow/react'
import { DocumentManagerContext, EditorContext } from '../contexts'
import { useStyle } from './DocumentEditor.sf'

export function DocumentEditor() {
    const router = useRouter()
    const module = useContext(EditorContext)
    const manager = useContext(DocumentManagerContext)
    const style = useStyle()

    const save = useCallback(() => {
        manager.save()
        router.push('/document')
    }, [manager])

    return (
        <section className={style.root()}>
            <header className={style.header()}>
                <button className={style.button({ save: true })} onClick={() => save()}>
                    Save
                </button>
            </header>
            <main className={style.editor()}>
                <Editor module={module} />
            </main>
        </section>
    )
}
