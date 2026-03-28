import designSystemMd from '../content/design-system.md?raw';
import { MarkdownDocPage } from './MarkdownDocPage';

export default function DesignSystemDocPage() {
  return <MarkdownDocPage markdown={designSystemMd} title="TruckMitr | Design System" />;
}
