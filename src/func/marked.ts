import { marked } from 'marked'

export function useMarkdown(markdown: string) {
    return marked(markdown)
}