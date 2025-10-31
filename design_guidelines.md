# HabitFlow - Dark Glass Design System

## Overview
HabitFlow features a stunning **dark glass** (glassmorphism) design inspired by Solvance AI, combining deep navy backgrounds, purple accents, and sophisticated glass effects to create an immersive, premium interface.

## Design Philosophy
- **Deep Space Aesthetic**: Dark navy/purple gradient background creates depth
- **Electric Purple Accents**: Vibrant violet tones for CTAs and highlights
- **Glass Surfaces**: Semi-transparent cards with purple-tinted borders
- **Icon Glows**: Gradient-filled icon backgrounds with soft glow effects
- **Premium Feel**: High contrast, sophisticated color palette

## Color Palette

### Primary Colors
- **Primary Purple**: `hsl(255, 64%, 61%)` - Electric violet for CTAs, active states, and accents
- **Foreground**: `hsl(0, 0%, 95-96%)` - Bright white/off-white for maximum contrast

### Background System
**Deep Space Gradient** (both light and dark modes use dark theme):
- Navy to purple spectrum: `hsl(225-270, 55-60%, 4-9%)`
- Smooth 20-second animation cycle
- Creates depth and movement without distraction

### Glass Surface Colors
Three levels of glass intensity (dark purple-tinted):

1. **Glass** (`.glass`)
   - Background: `rgba(20, 22, 48, 0.65-0.7)` + 12px blur
   - Border: `rgba(108, 93, 211, 0.2-0.25)` - Subtle purple glow
   - Shadow: Soft purple-tinted shadows
   - Use: Headers, lightweight overlays

2. **Glass Card** (`.glass-card`)
   - Background: `rgba(20, 22, 48, 0.75-0.8)` + 16px blur
   - Border: `rgba(108, 93, 211, 0.25-0.3)` - Purple glow border
   - Shadow: Medium purple-tinted shadows
   - Use: Main content cards, habit cards, stats

3. **Glass Intense** (`.glass-intense`)
   - Background: `rgba(20, 22, 48, 0.85-0.9)` + 20px blur
   - Border: `rgba(108, 93, 211, 0.3-0.35)` - Strong purple glow
   - Shadow: Pronounced purple-tinted shadows
   - Use: Sidebar, modals, prominent surfaces

### Icon Glow Effect
**`.icon-glow`** - Gradient-filled backgrounds for icons:
- Gradient: `rgba(108, 93, 211, 0.4-0.5)` to `rgba(139, 120, 246, 0.3-0.4)`
- Glow shadow: `0 4px 16-20px rgba(108, 93, 211, 0.35-0.45)`
- Inset highlight: Subtle white overlay
- Use: Icon containers in stat cards and feature cards

### Category Colors
Vibrant semi-transparent badges on dark backgrounds:
- **Health**: `bg-emerald-500/20 text-emerald-300`
- **Productivity**: `bg-blue-500/20 text-blue-300`
- **Fitness**: `bg-orange-500/20 text-orange-300`
- **Learning**: `bg-purple-500/20 text-purple-300`
- **Mindfulness**: `bg-pink-500/20 text-pink-300`
- **Social**: `bg-yellow-500/20 text-yellow-300`
- **Creative**: `bg-indigo-500/20 text-indigo-300`
- **Finance**: `bg-teal-500/20 text-teal-300`

All use 20% opacity backgrounds with bright 300-weight text for optimal readability on dark glass surfaces.

## Typography

### Font Family
- **Primary**: Inter (weights: 300, 400, 500, 600, 700)
- **Fallback**: system-ui, -apple-system, sans-serif

### Type Scale
- **Display**: 3xl (30px) - Page headings
- **Heading**: 2xl (24px), xl (20px), lg (18px)
- **Body**: base (16px), sm (14px)
- **Caption**: xs (12px)

### Font Weights
- Light: 300 - Subtle secondary text
- Regular: 400 - Body text
- Medium: 500 - Emphasis
- Semibold: 600 - Headings
- Bold: 700 - Strong emphasis, numbers

## Spacing System
Based on 4px (0.25rem) grid:
- **xs**: 0.5rem (8px)
- **sm**: 0.75rem (12px)
- **md**: 1rem (16px)
- **lg**: 1.5rem (24px)
- **xl**: 2rem (32px)
- **2xl**: 3rem (48px)

## Components

### Glass Cards
All cards use `.glass-card` class:
```tsx
<Card className="glass-card p-6">
  {/* Content */}
</Card>
```

Features:
- Frosted glass background
- Subtle white border (adapts to theme)
- Soft shadow for depth
- Smooth transitions on hover

### Sidebar
Uses `.glass-intense` for maximum clarity:
- Fixed positioning on larger screens
- Full-height frosted glass effect
- Collapsible on mobile
- Active page indicators with green accent

### Header
Lightweight glass overlay:
- Uses `.glass` class
- Borderless for seamless integration
- Contains theme toggle and sidebar trigger
- Blur effect over gradient background

### Habit Cards
```tsx
<Card className="glass-card p-6">
  - Name and description
  - Category badge (color-coded)
  - Streak counter with fire icon
  - Interactive checkbox (animated)
  - Actions menu (edit/delete)
</Card>
```

Interactions:
- Smooth opacity change when completed (70%)
- 300ms transition duration
- Line-through on completed habit names

### Buttons
Variants work seamlessly on glass:
- **Primary**: Solid green with matching border
- **Ghost**: Transparent with elevation on hover
- **Outline**: Border with transparent background
- **Icon**: Minimal square, size="icon"

### Category Badges
```tsx
<Badge className="bg-{color}-100 dark:bg-{color}-900/30 text-{color}-700 dark:text-{color}-300">
  Category
</Badge>
```

Features:
- Category-specific colors
- Transparent backgrounds for glass aesthetic
- No borders for clean look
- Small text size (xs)

### Stats Cards
```tsx
<Card className="glass-card p-6">
  - Title (muted foreground)
  - Large value (3xl, bold)
  - Icon in subtle colored circle
  - Optional subtitle
</Card>
```

### Calendar Heatmap
GitHub-style activity visualization:
- 7-day weeks in columns
- 12 weeks of history (84 days)
- 6 intensity levels based on completion
- Tooltips show exact date and counts
- Glass card container with rounded cells

### Charts
- Uses Recharts library
- Primary color for bars/lines
- Subtle grid with border color
- Glass card container
- Responsive sizing

## Interactions

### Hover States
- Uses `hover-elevate` utility class
- Subtle brightness increase
- 200ms smooth transitions
- No layout shifts

### Active States
- `active-elevate-2` for press feedback
- More pronounced than hover
- Immediate visual response

### Animations
```css
/* Background gradient shift */
@keyframes gradientShift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Checkbox pulse */
@keyframes pulse-check {
  0%, 100% { scale: 1; opacity: 1; }
  50% { scale: 1.1; opacity: 0.8; }
}

/* Content fade in */
@keyframes fade-in {
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Checkbox Interaction
- Pulse animation on toggle (300ms)
- Checkmark appears with primary color
- Rounded square (rounded-lg)
- 2px border thickness
- 8x8 size (w-8 h-8)

### Streak Counter
- Fire icon color based on streak (purple theme):
  - 0 days: Muted foreground
  - 1-6 days: Purple (400)
  - 7-29 days: Violet (400)
  - 30+ days: Fuchsia (400)
- Current streak (large, bold)
- Best streak (smaller, muted)

## Layout

### Grid System
- **Dashboard**: Single column, max-width 5xl
- **All Habits**: Single column with search
- **Analytics**: 
  - 4-column grid for stats
  - 2-column for completion rates
  - Full-width for heatmap and charts
- **Responsive**: Collapses to single column on mobile

### Page Structure
```
┌──────────────────────────────────┐
│ Glass Sidebar (16rem)            │
│  ┌────────────────────────────┐  │
│  │ Glass Header               │  │
│  ├────────────────────────────┤  │
│  │                            │  │
│  │ Scrollable Content         │  │
│  │ (gradient background)      │  │
│  │                            │  │
│  └────────────────────────────┘  │
└──────────────────────────────────┘
```

### Sidebar
- Width: 16rem expanded, 3rem collapsed
- Glass intense background
- Menu items with active states
- Smooth expand/collapse animation

### Content Padding
- Pages: 1.5rem (24px) all sides
- Cards: 1.5rem (24px) internal padding
- Component gaps: 1rem (16px)
- Section spacing: 1.5rem (24px)

## Theme System

### Dark-First Design
- Application defaults to dark theme
- Deep navy/purple gradient background
- High contrast white text
- Purple accent colors throughout
- Glass surfaces with purple tints

### Light Mode (Optional)
- Can be toggled via theme switcher
- Uses same dark aesthetic but slightly lighter
- Maintains purple accent theme
- Glass effects remain consistent

## Accessibility

### Focus States
- Visible focus rings: `ring-2 ring-primary`
- Keyboard navigation support
- Tab order follows visual hierarchy

### Color Contrast
- All text meets WCAG AA
- Primary green: 4.5:1 minimum
- Muted text: readable on glass
- Icons reinforce meaning

### Screen Readers
- Descriptive data-testid attributes
- Semantic HTML structure
- ARIA labels where needed
- Alt text for visual elements

## Performance

### Glass Effects
- Use predefined classes only
- Limit backdrop-filter to 3 layers
- Hardware acceleration enabled
- Smooth 60fps animations

### Optimization
- Lazy load analytics charts
- Virtualize long habit lists
- Debounce search inputs
- Optimize gradient animation

## Best Practices

### Glass Usage
1. Use `.glass`, `.glass-card`, `.glass-intense` classes
2. Don't nest glass layers excessively
3. Ensure text contrast on glass
4. Test in both themes

### Component Patterns
1. Extend shadcn components
2. Add glass classes for aesthetic
3. Maintain consistent spacing
4. Follow interaction guidelines

### Responsive Design
1. Mobile-first approach
2. Test on actual devices
3. Touch targets: 44x44px minimum
4. Simplify on smaller screens

## Future Enhancements
- Celebration animations on streaks
- Confetti effects for milestones
- Sound feedback (optional toggle)
- Custom theme colors
- Advanced visualizations
- Social sharing features
