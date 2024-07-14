import { appConfig, editorConfig } from '@/lib/configs'
import { DocumentManagerProvider, EditorProvider } from '@/lib/contexts'
import { createSplitflowAppKit } from '@splitflow/app'
import { createEditorKit, loadEditorBundle } from '@splitflow/editor'
import { firstError } from '@splitflow/lib'

export default async function DocumentLayout({ children }: { children: React.ReactNode }) {
    const app = createSplitflowAppKit(appConfig)
    const editor = createEditorKit(editorConfig, app)
    const editorBundle = await loadEditorBundle(editor)

    const error = firstError(editorBundle)
    if (error) throw error

    return (
        <EditorProvider editorBundle={editorBundle}>
            <DocumentManagerProvider>{children}</DocumentManagerProvider>
        </EditorProvider>
    )
}
