/// <reference types="vite/client" />

interface ImportMetaEnv {
    // removed supabase env vars as they are no longer needed
}

interface ImportMeta {
    readonly env: ImportMetaEnv
} 