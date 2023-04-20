import { marked } from 'marked'
import hljs from 'highlight.js'
import 'highlight.js/styles/github-dark-dimmed.css'

marked.setOptions({
    renderer: new marked.Renderer(),
    highlight: function(code, lang) {
      const language = hljs.getLanguage(lang) ? lang : 'plaintext';
      return hljs.highlight(code, { language }).value;
    },
    langPrefix: 'hljs language-', // highlight.js css expects a top-level 'hljs' class.
    pedantic: false,
    gfm: true,
    breaks: false,
    sanitize: false,
    smartypants: false,
    xhtml: false
})

export function useMarkdown(markdown: string) {
    return marked(markdown)
}