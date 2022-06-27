import marked from 'marked';

export default function parseMarkdown(markdown: string) {
  return marked(markdown, {
    gfm: true,
    breaks: true,
  });
}
