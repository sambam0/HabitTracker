# HabitTracker - Codebase Overview

## 🎯 Project Summary

A full-stack habit tracking application with a beautiful dark glass design, built with React, Express, and PostgreSQL. Users can create habits, track daily completions, view streaks, and analyze their progress over time.

---

## 🏗️ Architecture

### Tech Stack
- **Frontend**: React 18.3 + TypeScript + Vite
- **Backend**: Express.js + TypeScript
- **Database**: Neon PostgreSQL (serverless)
- **ORM**: Drizzle ORM
- **Styling**: Tailwind CSS + Radix UI
- **State**: TanStack React Query
- **Validation**: Zod + React Hook Form
- **Charts**: Recharts
- **Animation**: Framer Motion

### Project Structure
```
HabitTracker/
├── client/                    # React frontend
│   └── src/
│       ├── components/        # UI components
│       │   ├── ui/           # Radix UI wrappers (50+ components)
│       │   ├── HabitCard.tsx
│       │   ├── CreateHabitDialog.tsx
│       │   ├── WeeklyTrendsChart.tsx
│       │   └── CalendarHeatmap.tsx
│       ├── pages/            # Route pages
│       │   ├── Dashboard.tsx
│       │   ├── AllHabits.tsx
│       │   └── Analytics.tsx
│       ├── hooks/            # Custom hooks
│       └── lib/              # Utils & React Query setup
├── server/                   # Express backend
│   ├── index.ts             # App entry point
│   ├── routes.ts            # API routes (EMPTY - needs implementation)
│   ├── storage.ts           # Data access layer (in-memory - needs DB implementation)
│   ├── db.ts                # Drizzle DB connection
│   └── vite.ts              # Dev server integration
├── shared/                  # Shared code
│   └── schema.ts            # Database schemas (only User schema exists)
└── migrations/              # Drizzle migrations
```

---

## 📊 Current Database Schema

### Implemented Tables

#### `users` (shared/schema.ts:6-10)
```typescript
{
  id: varchar (UUID, primary key)
  username: text (unique, not null)
  password: text (not null)
}
```

### Missing Tables (Need to Implement)
- `habits` - Store habit definitions
- `habit_completions` - Track daily habit completions
- `habit_logs` - Optional: detailed habit activity logs

---

## 🎨 Frontend Pages

### 1. Dashboard (client/src/pages/Dashboard.tsx)
**Status**: ⚠️ Uses mock data, needs backend integration

**Features**:
- Display today's habits
- Check off completed habits
- View current streak
- Create new habits
- Delete habits
- Show completion percentage

**Mock Data**: Lines 12-43 (3 hardcoded habits)

**Key Functions**:
- `handleToggle()` - Mark habit complete/incomplete
- `handleCreateHabit()` - Add new habit
- `handleDelete()` - Remove habit

### 2. All Habits (client/src/pages/AllHabits.tsx)
**Status**: ⚠️ Uses mock data, needs backend integration

**Features**:
- Search/filter habits
- View all habits (not just today)
- Create, delete habits
- Complete habits

**Mock Data**: Lines 14-65 (5 hardcoded habits)

### 3. Analytics (client/src/pages/Analytics.tsx)
**Status**: ⚠️ All hardcoded data

**Features**:
- Stats cards (total habits, completions, avg rate, longest streak)
- Completion rate cards (7 days, 30 days)
- Calendar heatmap (last 84 days)
- Weekly trends chart

**Mock Data**:
- `generateMockHeatmapData()` - Lines 9-28
- `mockWeeklyData` - Lines 30-39
- Hardcoded stats - Lines 52-73

---

## 🔧 Backend Implementation Status

### Server (server/index.ts:1-82)
**Status**: ✅ Fully configured
- Express app setup
- JSON/URL-encoded parsing
- Request logging middleware
- Error handling
- Vite dev server integration
- Production static file serving
- Runs on port 5000

### Routes (server/routes.ts:1-15)
**Status**: ❌ EMPTY - Critical implementation needed
- No API endpoints defined
- Comments indicate `/api` prefix should be used
- Should use `storage` interface for CRUD operations

### Storage (server/storage.ts:1-39)
**Status**: ⚠️ Interface defined, but using in-memory implementation

**Current Interface**:
```typescript
interface IStorage {
  getUser(id: string): Promise<User | undefined>
  getUserByUsername(username: string): Promise<User | undefined>
  createUser(user: InsertUser): Promise<User>
}
```

**Problem**: Uses `MemStorage` class with Map (line 38)
**Solution Needed**: Create `DbStorage` class using Drizzle ORM

**Missing Methods for Habits**:
- CRUD operations for habits
- CRUD operations for habit completions
- Analytics queries (streaks, completion rates, trends)

### Database (server/db.ts:1-15)
**Status**: ✅ Configured and ready
- Neon PostgreSQL connection
- Drizzle ORM setup
- WebSocket support
- Requires `DATABASE_URL` env var

---

## 🎯 Data Models Needed

### Habit Type (from HabitCard.tsx)
```typescript
interface Habit {
  id: string
  name: string
  description: string
  category: string
  color: string  // "mindfulness" | "learning" | "fitness" | "health" | "productivity" | "social"
  currentStreak: number
  bestStreak: number
  completedToday: boolean
}
```

### Suggested Database Schema

#### `habits` table
```typescript
{
  id: varchar (UUID, primary key)
  userId: varchar (foreign key -> users.id)
  name: text (not null)
  description: text
  category: text
  color: text
  createdAt: timestamp (default now())
  archived: boolean (default false)
}
```

#### `habit_completions` table
```typescript
{
  id: varchar (UUID, primary key)
  habitId: varchar (foreign key -> habits.id)
  userId: varchar (foreign key -> users.id)
  completedAt: date (not null)
  notes: text (optional)
  createdAt: timestamp (default now())
}
```

---

## 🔌 API Endpoints Needed

### Authentication
- `POST /api/register` - Create user account
- `POST /api/login` - Login user
- `POST /api/logout` - Logout user
- `GET /api/user` - Get current user

### Habits
- `GET /api/habits` - Get all user's habits
- `POST /api/habits` - Create new habit
- `GET /api/habits/:id` - Get single habit
- `PATCH /api/habits/:id` - Update habit
- `DELETE /api/habits/:id` - Delete habit

### Habit Completions
- `GET /api/habits/:id/completions` - Get completion history
- `POST /api/habits/:id/complete` - Mark habit complete for today
- `DELETE /api/habits/:id/complete` - Unmark habit complete for today
- `GET /api/completions/:date` - Get all completions for specific date

### Analytics
- `GET /api/analytics/stats` - Get overall stats (total habits, completions, etc.)
- `GET /api/analytics/heatmap` - Get calendar heatmap data
- `GET /api/analytics/trends` - Get weekly trends data
- `GET /api/analytics/streaks` - Get streak information

---

## 🎨 UI Components

### Core Components (Implemented)
- `HabitCard` - Display habit with toggle, edit, delete
- `CreateHabitDialog` - Form to create new habit
- `EditHabitDialog` - ⚠️ NOT IMPLEMENTED (referenced but missing)
- `EmptyState` - Empty state placeholder
- `StatsCard` - Display single stat
- `CompletionRateCard` - Show completion % with trend
- `CalendarHeatmap` - GitHub-style contribution heatmap
- `WeeklyTrendsChart` - Bar chart for weekly data
- `AppSidebar` - Navigation sidebar

### Radix UI Components (50+ available)
Located in `client/src/components/ui/`:
- Forms: Button, Input, Checkbox, Select, Switch, Slider
- Overlays: Dialog, Popover, Tooltip, DropdownMenu
- Layout: Card, Separator, Tabs, Accordion
- Feedback: Badge, Progress, Toast
- All styled with Tailwind + glass morphism design

---

## 🎨 Design System

### Theme
- **Style**: Dark glass morphism
- **Primary Color**: Purple (`hsl(262.1 83.3% 57.8%)`)
- **Background**: Dark (`hsl(224 71.4% 4.1%)`)
- **Glass Effect**: `backdrop-blur-xl` + `bg-opacity-20`

### Color Categories (for habits)
Defined in `tailwind.config.ts` and used throughout:
- `mindfulness` - Purple tones
- `learning` - Blue tones
- `fitness` - Red/orange tones
- `health` - Green tones
- `productivity` - Yellow tones
- `social` - Pink tones

### Key CSS Classes
- `.glass-card` - Glass morphism card effect
- `.glass-sidebar` - Sidebar with blur
- Custom animations: `float`, `pulse-glow`, `slide-in`

---

## 🔐 Authentication Status

### Current Setup
- Passport.js installed (server/index.ts has imports)
- express-session configured
- OpenID Connect support available

### NOT Implemented
- No auth routes in routes.ts
- No session middleware in server/index.ts
- No protected route middleware
- Frontend has no login/register pages

---

## 🚀 Deployment Configuration

### Current (Replit)
- `.replit` file configured for Replit hosting
- Auto-scaling deployment
- Port 5000 → 80 mapping

### Needed for Vercel
- `vercel.json` configuration file
- API routes as serverless functions
- Environment variable setup
- Build script adjustments

---

## 📦 Key Dependencies

### Frontend
- `react-query` (TanStack Query) - Server state management
- `wouter` - Routing (not React Router)
- `react-hook-form` + `zod` - Form handling & validation
- `recharts` - Charts and graphs
- `framer-motion` - Animations
- `lucide-react` - Icons

### Backend
- `express` - Web framework
- `drizzle-orm` - Database ORM
- `@neondatabase/serverless` - PostgreSQL client
- `passport` - Authentication (installed but not used)
- `ws` - WebSocket support

---

## 🐛 Known Issues & TODOs

### Critical (Blocking)
1. ❌ No habit database schema defined
2. ❌ No API routes implemented
3. ❌ Using in-memory storage instead of database
4. ❌ No authentication implemented
5. ❌ Frontend not connected to backend (all mock data)

### High Priority
6. ⚠️ Edit habit functionality missing (referenced but not implemented)
7. ⚠️ No error handling in frontend
8. ⚠️ No loading states in UI
9. ⚠️ Streak calculation logic not implemented
10. ⚠️ Analytics calculations need backend implementation

### Medium Priority
11. 📝 No form validation error messages
12. 📝 No confirmation dialogs for delete actions
13. 📝 No toast notifications for success/error
14. 📝 Habit color selection could be improved
15. 📝 No pagination for large habit lists

### Nice to Have
16. ✨ Habit reminders/notifications
17. ✨ Habit notes/journal entries
18. ✨ Export data functionality
19. ✨ Dark/light mode toggle (theme package installed but not used)
20. ✨ Habit categories management

---

## 🔍 Quick Reference - File Locations

### Need Immediate Work
- `server/routes.ts` - Empty, needs all API endpoints
- `server/storage.ts` - Replace MemStorage with DbStorage
- `shared/schema.ts` - Add habits and completions tables

### Need Frontend Integration
- `client/src/pages/Dashboard.tsx:12-43` - Replace mock data with API calls
- `client/src/pages/AllHabits.tsx:14-65` - Replace mock data with API calls
- `client/src/pages/Analytics.tsx:9-73` - Replace all mock data with API calls

### Configuration Files
- `vite.config.ts` - Vite configuration
- `drizzle.config.ts` - Database migrations config
- `tailwind.config.ts` - Tailwind + theme config
- `tsconfig.json` - TypeScript config
- `.replit` - Current deployment config

---

## 🎯 Next Steps Priority Order

1. **Define Database Schema** (shared/schema.ts)
   - Add habits table
   - Add habit_completions table
   - Run migrations

2. **Implement Database Storage** (server/storage.ts)
   - Create DbStorage class
   - Implement habit CRUD methods
   - Implement completion tracking methods
   - Add analytics query methods

3. **Create API Routes** (server/routes.ts)
   - Authentication endpoints
   - Habit CRUD endpoints
   - Completion endpoints
   - Analytics endpoints

4. **Add Authentication** (server/index.ts)
   - Session middleware
   - Passport configuration
   - Protected route middleware

5. **Frontend Integration**
   - Create React Query hooks
   - Replace mock data with API calls
   - Add loading/error states
   - Implement edit habit functionality

6. **Vercel Deployment**
   - Create vercel.json
   - Test serverless functions
   - Configure environment variables
   - Deploy!

---

## 💡 Tips for Navigation

### Finding Components
```bash
# UI primitives
client/src/components/ui/*

# Feature components
client/src/components/HabitCard.tsx
client/src/components/CreateHabitDialog.tsx

# Pages
client/src/pages/Dashboard.tsx
client/src/pages/AllHabits.tsx
client/src/pages/Analytics.tsx
```

### Database & Backend
```bash
# Database connection
server/db.ts

# Schema definitions
shared/schema.ts

# Storage interface
server/storage.ts

# API routes (empty)
server/routes.ts
```

### Configuration
```bash
# Build & scripts
package.json

# Database migrations
drizzle.config.ts
migrations/

# Styling
tailwind.config.ts
client/src/index.css
```

---

## 🎨 Design Guidelines

See `design_guidelines.md` for detailed visual design specifications, including:
- Color system
- Typography
- Component patterns
- Glass morphism effects
- Animation principles

---

**Last Updated**: 2025-11-03
**Status**: 🚧 In Development - Core UI complete, backend implementation needed
