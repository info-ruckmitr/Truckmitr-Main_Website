import devPromptMd from '../content/dev-prompt.md?raw';
import { MarkdownDocPage } from './MarkdownDocPage';

export default function DevPromptDocPage() {
  return <MarkdownDocPage markdown={devPromptMd} title="TruckMitr | React Development Prompt" />;
}
