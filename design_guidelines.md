# HabitFlow - Liquid Glass Design System

## Overview
HabitFlow features a modern **liquid glass** (glassmorphism) design aesthetic, combining transparency, blur effects, and vibrant gradients to create a sophisticated, depth-rich interface inspired by modern productivity tools.

## Design Philosophy
- **Frosted Glass Surfaces**: Semi-transparent backgrounds with backdrop blur effects
- **Ambient Gradients**: Subtle animated gradient backgrounds that shift over time
- **Depth Through Layers**: Multiple transparency levels create visual hierarchy
- **Clean Typography**: Inter font family for readability and modern feel
- **Smooth Interactions**: Elegant transitions and hover states

## Color Palette

### Primary Colors
- **Primary Green**: `hsl(142, 76%, 36%)` - Used for CTAs, active states, and success indicators
- **Foreground**: 
  - Light mode: `hsl(222, 15%, 12%)` - Deep charcoal
  - Dark mode: `hsl(0, 0%, 95%)` - Off-white

### Background System
- **Light Mode**: Animated gradient background
  - Blue-violet spectrum: `hsl(220-280, 60%, 96%)`
  - Smooth 15-second animation cycle
  
- **Dark Mode**: Animated gradient background
  - Deep blue-violet spectrum: `hsl(220-280, 30%, 8%)`
  - Matches light mode animation

### Glass Surface Colors
Three levels of glass intensity:

1. **Glass** (`.glass`)
   - Light: `rgba(255, 255, 255, 0.7)` + 12px blur
   - Dark: `rgba(30, 30, 45, 0.6)` + 12px blur
   - Use: Headers, lightweight overlays

2. **Glass Card** (`.glass-card`)
   - Light: `rgba(255, 255, 255, 0.75)` + 16px blur
   - Dark: `rgba(30, 30, 45, 0.65)` + 16px blur
   - Use: Main content cards, habit cards, stats

3. **Glass Intense** (`.glass-intense`)
   - Light: `rgba(255, 255, 255, 0.85)` + 20px blur
   - Dark: `rgba(30, 30, 45, 0.75)` + 20px blur
   - Use: Sidebar, modals, prominent surfaces

### Category Colors
Color-coded categories with transparency:
- **Health**: Green (`green-100/700`)
- **Productivity**: Blue (`blue-100/700`)
- **Fitness**: Orange (`orange-100/700`)
- **Learning**: Purple (`purple-100/700`)
- **Mindfulness**: Pink (`pink-100/700`)
- **Social**: Yellow (`yellow-100/700`)
- **Creative**: Indigo (`indigo-100/700`)
- **Finance**: Emerald (`emerald-100/700`)

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
- Fire icon color based on streak:
  - 0 days: Muted foreground
  - 1-6 days: Yellow (500)
  - 7-29 days: Orange (500)
  - 30+ days: Red (500)
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

## Dark Mode

### Toggle Behavior
- Persists to localStorage
- Instant theme switch
- No flash of incorrect theme
- All glass surfaces adapt

### Dark Mode Specifics
- Darker transparent backgrounds
- Increased blur for clarity
- Brighter text colors
- Enhanced shadows
- Category colors use dark variants

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
