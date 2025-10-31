# Habit Tracker Design Guidelines

## Design Approach

**Selected Approach:** Design System + Reference-Based Hybrid

Drawing inspiration from modern productivity tools (Linear, Notion, Todoist) combined with Material Design principles for visual feedback and interactions. This creates a clean, data-focused interface that balances functionality with visual appeal.

**Core Principles:**
- Clarity over decoration: Every element serves a purpose
- Immediate visual feedback: Users always know the state of their habits
- Data accessibility: Analytics and trends are easy to scan and understand
- Encouraging design: Visual rewards for maintaining streaks

---

## Typography

**Font Family:**
- Primary: Inter (via Google Fonts CDN)
- Fallback: system-ui, -apple-system, sans-serif

**Hierarchy:**
- Page Titles: text-3xl font-bold (Dashboard, All Habits, Analytics)
- Section Headers: text-xl font-semibold
- Habit Names: text-lg font-medium
- Body Text: text-base font-normal
- Metadata/Stats: text-sm font-medium
- Helper Text: text-xs text-gray-600

---

## Layout System

**Spacing Primitives:** Use Tailwind units of 2, 4, 6, 8, 12, 16
- Micro spacing (gaps, padding): p-2, p-4, gap-2
- Component spacing: p-6, p-8, m-4, m-6
- Section spacing: py-12, py-16, mb-8

**Grid Structure:**
- Main container: max-w-7xl mx-auto px-4 md:px-6
- Dashboard: Single column on mobile, 2-column grid on tablet (md:grid-cols-2), 3-column on desktop (lg:grid-cols-3)
- All Habits page: Masonry-style card grid with 1-3 columns responsive
- Analytics: Stacked sections on mobile, 2-column split for charts on desktop

**Responsive Breakpoints:**
- Mobile-first approach
- Tablet: md: (768px)
- Desktop: lg: (1024px)

---

## Component Library

### Navigation
**Top Navigation Bar:**
- Fixed position with backdrop blur (backdrop-blur-lg bg-white/80)
- Height: h-16
- Logo/brand on left, nav links center-right, user profile far right
- Active link: border-b-2 with accent color
- Icons: Heroicons (outline for inactive, solid for active)

### Habit Cards
**Card Structure:**
- Rounded corners: rounded-xl
- Border: border border-gray-200
- Padding: p-6
- Shadow: shadow-sm hover:shadow-md transition
- Header: Habit name + category badge
- Body: Description (truncated with "..." if too long)
- Footer: Streak counter, completion checkbox, action menu

**Completion Checkbox:**
- Large, prominent: w-8 h-8
- Rounded: rounded-lg
- Unchecked: border-2 border-gray-300
- Checked: filled with success color, checkmark icon (Heroicons check)
- Pulse animation on click

**Category Badge:**
- Small pill: px-3 py-1 rounded-full text-xs font-medium
- Custom background colors with corresponding text colors
- Position: top-right of card or inline with habit name

**Streak Counter:**
- Flame icon (Heroicons fire) + number
- Bold number display: text-2xl font-bold
- Color intensity based on streak length (gray → yellow → orange → red for long streaks)
- Secondary text showing "Current Streak" and "Best: X days"

### Dashboard Today View
**Date Header:**
- Large, prominent date: text-2xl font-bold
- Format: "Monday, January 15, 2024"
- Quick stats bar below: "X of Y habits completed today • Z% completion rate"

**Habit List:**
- Card-based layout with generous spacing (gap-6)
- Sort: Incomplete first, then completed
- Completed habits: slight opacity reduction (opacity-60) with strikethrough on name
- Empty state: Motivational message with illustration placeholder + "Create Your First Habit" CTA

### Analytics Dashboard

**Calendar Heatmap:**
- GitHub-style contribution graph
- 7 rows (days of week) × weeks display
- Cell size: w-4 h-4 with gap-1
- Gradient intensity: 5 levels from gray-100 (no completion) to green-600 (100% completion)
- Hover tooltip showing date and completion status
- Labels: Days of week on left, months on top

**Completion Rate Cards:**
- Two cards side-by-side: "Last 7 Days" and "Last 30 Days"
- Large percentage: text-4xl font-bold
- Trend indicator: up/down arrow with color (green/red)
- Small chart visualization below percentage (sparkline)

**Weekly Trends Chart:**
- Bar chart or line chart showing last 4-8 weeks
- Chart library: Chart.js via CDN
- Height: h-64
- Clean axis labels, grid lines: stroke-gray-200
- Bar colors: gradient or solid accent color

**Stats Grid:**
- 3-4 stat cards in row: Total habits, Total completions, Average completion rate, Longest streak
- Card: p-6, border, rounded-lg
- Icon + label + large number

### Forms (Create/Edit Habit)

**Form Layout:**
- Modal overlay OR dedicated page with max-w-2xl container
- Field spacing: space-y-6
- Labels: text-sm font-medium mb-2
- Inputs: p-3 border border-gray-300 rounded-lg focus:ring-2 focus:border-transparent
- Required field indicator: asterisk in label

**Input Fields:**
- Habit Name: text input, full width
- Description: textarea, rows-4
- Category: Select dropdown OR custom tag input with pills
- Color picker: Grid of color swatches (8-12 preset colors), w-10 h-10 rounded-full with border on selected

**Buttons:**
- Primary CTA: px-6 py-3 rounded-lg font-medium
- Secondary: px-6 py-3 rounded-lg border font-medium
- Icon buttons (delete, edit): p-2 rounded-md hover:bg-gray-100

### Empty States
- Centered content: flex flex-col items-center justify-center py-16
- Icon: w-24 h-24 text-gray-400 (Heroicons outline)
- Heading: text-xl font-semibold mt-4
- Description: text-gray-600 mt-2
- CTA button: mt-6

---

## Interaction Design

**Hover States:**
- Cards: elevation increase (shadow-sm → shadow-md)
- Buttons: slight scale (scale-105) or background darkening
- Checkboxes: border color change + scale
- Links: underline decoration

**Active/Completion States:**
- Checkbox completion: Scale pulse animation, checkmark fade-in
- Habit card on complete: Subtle confetti effect OR success toast notification
- Streak milestone: Brief celebration animation (optional)

**Loading States:**
- Skeleton screens for habit cards during data fetch
- Spinner for form submissions
- Disabled state on buttons: opacity-50 cursor-not-allowed

**Transitions:**
- Default: transition-all duration-200
- Modal enter/exit: fade + scale animation
- Page transitions: Subtle fade between views

---

## Visual Feedback System

**Success Indicators:**
- Toast notifications: slide-in from top-right, auto-dismiss
- Green checkmarks, success icons
- Completion percentage increases

**Streak Visualizations:**
- Fire emoji/icon that intensifies with streak length
- Color progression for milestone achievements (3, 7, 14, 30, 100 days)
- "Don't break the chain" visual motivation on calendar

**Data Visualization Colors:**
- Completion gradient: gray-100 → green-200 → green-400 → green-600
- Chart accent: Single primary color with opacity variations
- Category colors: Consistent palette (8-12 distinct colors)

---

## Accessibility

**Focus Management:**
- Visible focus rings: ring-2 ring-offset-2
- Keyboard navigation: Full support for tab, enter, space
- Skip to content link for screen readers

**Color Contrast:**
- Minimum WCAG AA compliance
- Don't rely solely on color for completion status (use icons + text)

**ARIA Labels:**
- Habit checkboxes: Clear labels with habit name
- Navigation: aria-current for active page
- Charts: aria-label with data description

---

## Responsive Behavior

**Mobile (<768px):**
- Single column layouts
- Collapsible navigation menu (hamburger)
- Larger touch targets (min h-12 w-12)
- Calendar heatmap: Scroll horizontally OR show last 30 days only
- Charts: Simplified, taller aspect ratio

**Tablet (768px-1024px):**
- 2-column habit grid
- Side-by-side analytics cards
- Full navigation visible

**Desktop (>1024px):**
- 3-column habit grid
- Analytics dashboard: 2-column layout with heatmap full-width
- Hover states fully utilized

---

## Images

This application does not require hero images or decorative photography. Visual interest comes from:
- Data visualizations (charts, heatmaps)
- Iconography (Heroicons)
- Empty state illustrations (simple line art placeholders)
- Category color coding
- Streak animations

Use icon-based visual communication rather than photos.