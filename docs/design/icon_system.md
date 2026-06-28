# Icon System & Asset Conventions

This document outlines the standard icon convention and asset optimization pipeline for the Learnault project to ensure visual consistency, tree-shaking efficiency, and low bandwidth usage.

## 1. Icon Convention Standard

The primary icon convention for the project is **Lucide React** (`lucide-react`). 
- **Rule**: All standard UI icons (buttons, alerts, inputs, forms) must be imported from the unified `<Icon />` wrapper or directly from `lucide-react`.
- **Constraint**: Do not introduce dependencies on `@iconify/react` or `react-icons` for new UI changes.

## 2. Icon Wrapper Component (`<Icon />`)

To ensure consistent sizing and color tokens, a shared wrapper component is provided at [Icon.tsx](file:///c:/Users/user/Downloads/learnault/src/components/ui/Icon.tsx).

### Sizes
Size tokens map directly to pixel values:
- `xs`: 12px (used for micro indicators, character limits)
- `sm`: 16px (standard for inline text, small buttons)
- `md`: 20px (default; standard button icons, FAQ indicators)
- `lg`: 24px (large buttons, cards)
- `xl`: 32px (large alert headers, feature callouts)
- Or pass a custom `number` directly.

### Colors
Colors can be specified using styling or standard theme classes. The wrapper supports custom colors dynamically via the `color` prop or Tailwind class utilities.

### Design Mappings
The `<Icon />` wrapper maps semantic names to standard Lucide icons or custom inline SVGs:

| Icon Name | Direct Equivalent | Source / Custom Details |
| :--- | :--- | :--- |
| `envelope` | `Mail` | Lucide React |
| `pencil` | `Pencil` | Lucide React |
| `checkmark` | `Check` | Lucide React |
| `error` | `AlertCircle` | Lucide React |
| `info` | `Info` | Lucide React |
| `arrow-right` | `ArrowRight` | Lucide React |
| `chevron-down` | `ChevronDown` | Lucide React |
| `chevron-right`| `ChevronRight` | Lucide React |
| `chevron-left` | `ChevronLeft` | Lucide React |
| `chevron-up` | `ChevronUp` | Lucide React |
| `globe` | `Globe` | Lucide React |
| `clock` | Custom pocket-watch | Inline Custom SVG (replaces static clock.svg) |
| `money-bag` | Custom gold bag | Inline Custom SVG (replaces static money-bag.svg) |
| `article` | Custom page vector | Inline Custom SVG (replaces static article.svg) |
| `play` | Custom play arrow | Inline Custom SVG (replaces static play.svg) |
| `sprout` | Custom growing leaf | Inline Custom SVG (replaces static sprout.svg) |

---

## 3. Usage Example

```tsx
import { Icon } from "@/components/ui/Icon";

// Standard input icon
<Icon name="envelope" size="sm" className="text-[#64748B]" />

// Custom optimized illustration icon
<Icon name="money-bag" size="lg" className="h-6 w-6" />
```
