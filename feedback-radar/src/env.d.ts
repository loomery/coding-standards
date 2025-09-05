/// <reference types="vite/client" />

declare interface ImportMetaEnv {
    readonly VITE_APP_NAME?: string;
}

declare interface ImportMeta {
    readonly env: ImportMetaEnv;
} 