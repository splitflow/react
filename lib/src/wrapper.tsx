import { useEffect, useRef } from "react"

export function createWrapper(SvelteComponent: any) {
    return (props: any) => {
        const element = useRef<HTMLDivElement>(null)

        useEffect(() => {
            element.current.replaceChildren()

            const instance = new SvelteComponent({
                props,
                target: element.current
            })
            return () => instance.$destroy()
        })

        return <div style={{ display: 'flex', flex: 1 }} suppressHydrationWarning={true} ref={element} dangerouslySetInnerHTML={{ __html: ' ' }} />

    }
}

export function createSsrWrapper(SvelteComponent: any) {
    return (props: any) => {
        const { html } = SvelteComponent.render(props)

        return <div style={{ display: 'flex', flex: 1 }} suppressHydrationWarning={true} dangerouslySetInnerHTML={{ __html: html.trim() }} />
    }
}