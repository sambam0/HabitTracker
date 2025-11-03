# Parallel Development Tasks

These 5 workstreams can be developed simultaneously by different Claude Code instances without merge conflicts.

---

## 🔷 WORKSTREAM 1: Database Schema & Migrations
**Primary Files**: `shared/schema.ts`, `migrations/`
**No conflicts with**: Any other workstream

### Tasks:
1. ✅ Define `habits` table schema in shared/schema.ts
   - Add table definition with all columns
   - Add Zod validation schemas
   - Export TypeScript types

2. ✅ Define `habit_completions` table schema in shared/schema.ts
   - Add table definition with foreign keys
   - Add Zod validation schemas
   - Export TypeScript types

3. ✅ Generate and test database migration
   - Run `npm run db:push` to create tables
   - Verify tables exist in database
   - Test insert/query operations

**Dependencies**: None
**Blocks**: Workstream 2 (needs types)

---

## 🔶 WORKSTREAM 2: Backend Storage Layer
**Primary Files**: `server/storage.ts`
**No conflicts with**: 1, 3, 4, 5
**Depends on**: Workstream 1 (needs schema types)

### Tasks:
4. ✅ Create `DbStorage` class replacing `MemStorage`
   - Implement IStorage interface with Drizzle
   - Add database connection
   - Replace export at bottom of file

5. ✅ Implement habit CRUD methods in `DbStorage`
   - `getHabits(userId)` - Get all user habits
   - `getHabit(id, userId)` - Get single habit
   - `createHabit(habit, userId)` - Create new habit
   - `updateHabit(id, data, userId)` - Update habit
   - `deleteHabit(id, userId)` - Delete habit
   - `archiveHabit(id, userId)` - Archive habit

6. ✅ Implement completion tracking methods in `DbStorage`
   - `markHabitComplete(habitId, userId, date)` - Mark complete
   - `markHabitIncomplete(habitId, userId, date)` - Unmark complete
   - `getHabitCompletions(habitId, userId, startDate, endDate)` - Get history
   - `getUserCompletionsForDate(userId, date)` - Get all completions for date

7. ✅ Implement analytics query methods in `DbStorage`
   - `getHabitStats(userId)` - Overall stats
   - `getHabitStreaks(habitId, userId)` - Calculate current/best streak
   - `getCompletionHeatmap(userId, days)` - Calendar heatmap data
   - `getWeeklyTrends(userId, weeks)` - Weekly trend data

**Dependencies**: Workstream 1 (schema types)
**Blocks**: Workstream 3 (API routes need storage)

---

## 🔷 WORKSTREAM 3: API Routes
**Primary Files**: `server/routes.ts`
**No conflicts with**: 1, 2, 4, 5
**Depends on**: Workstream 2 (needs storage methods)

### Tasks:
8. ✅ Implement habit CRUD API routes
   - `GET /api/habits` - Get all habits
   - `GET /api/habits/:id` - Get single habit
   - `POST /api/habits` - Create habit
   - `PATCH /api/habits/:id` - Update habit
   - `DELETE /api/habits/:id` - Delete habit

9. ✅ Implement completion API routes
   - `POST /api/habits/:id/complete` - Mark complete
   - `DELETE /api/habits/:id/complete/:date` - Unmark complete
   - `GET /api/habits/:id/completions` - Get completion history
   - `GET /api/completions/:date` - Get all completions for date

10. ✅ Implement analytics API routes
    - `GET /api/analytics/stats` - Overall statistics
    - `GET /api/analytics/heatmap?days=84` - Heatmap data
    - `GET /api/analytics/trends?weeks=8` - Weekly trends
    - `GET /api/analytics/streaks/:habitId` - Habit streak info

**Dependencies**: Workstream 2 (storage layer)
**Blocks**: Workstream 5 (frontend needs API)

---

## 🔶 WORKSTREAM 4: Authentication System
**Primary Files**: `server/index.ts` (add middleware), `server/auth.ts` (new file), `client/src/pages/Login.tsx` (new), `client/src/pages/Register.tsx` (new)
**No conflicts with**: 1, 2, 3, 5

### Tasks:
11. ✅ Add session middleware to server/index.ts
    - Import and configure express-session
    - Add session configuration
    - Add passport initialization
    - Create session store (pg-simple for production)

12. ✅ Create authentication routes in server/auth.ts
    - `POST /api/auth/register` - User registration
    - `POST /api/auth/login` - User login
    - `POST /api/auth/logout` - User logout
    - `GET /api/auth/user` - Get current user
    - Add passport local strategy
    - Import and use in server/routes.ts

13. ✅ Create Login page component
    - `client/src/pages/Login.tsx`
    - Login form with username/password
    - Validation with react-hook-form + zod
    - Error handling
    - Link to register page

14. ✅ Create Register page component
    - `client/src/pages/Register.tsx`
    - Registration form
    - Password confirmation
    - Validation
    - Link to login page

15. ✅ Create protected route wrapper
    - `client/src/components/ProtectedRoute.tsx`
    - Check authentication status
    - Redirect to login if not authenticated
    - Show loading state

**Dependencies**: None
**Blocks**: Workstream 5 (needs auth context)

---

## 🔷 WORKSTREAM 5: Frontend Hooks & Integration
**Primary Files**: `client/src/hooks/` (new files), `client/src/pages/Dashboard.tsx`, `client/src/pages/AllHabits.tsx`, `client/src/pages/Analytics.tsx`, `client/src/components/EditHabitDialog.tsx` (new)
**No conflicts with**: 1, 2, 3, 4
**Depends on**: Workstream 3 (needs API routes), Workstream 4 (needs auth)

### Tasks:
16. ✅ Create React Query hooks for habits
    - `client/src/hooks/useHabits.ts`
    - `useHabits()` - Fetch all habits
    - `useHabit(id)` - Fetch single habit
    - `useCreateHabit()` - Create mutation
    - `useUpdateHabit()` - Update mutation
    - `useDeleteHabit()` - Delete mutation

17. ✅ Create React Query hooks for completions
    - `client/src/hooks/useCompletions.ts`
    - `useToggleCompletion()` - Toggle completion
    - `useHabitCompletions(habitId)` - Get habit history
    - `useDateCompletions(date)` - Get completions for date

18. ✅ Create React Query hooks for analytics
    - `client/src/hooks/useAnalytics.ts`
    - `useStats()` - Overall stats
    - `useHeatmap(days)` - Heatmap data
    - `useTrends(weeks)` - Weekly trends
    - `useStreaks(habitId)` - Streak info

19. ✅ Create React Query hooks for authentication
    - `client/src/hooks/useAuth.ts`
    - `useUser()` - Get current user
    - `useLogin()` - Login mutation
    - `useRegister()` - Register mutation
    - `useLogout()` - Logout mutation

20. ✅ Create EditHabitDialog component
    - `client/src/components/EditHabitDialog.tsx`
    - Similar to CreateHabitDialog but pre-filled
    - Form validation
    - Update mutation integration

21. ✅ Integrate Dashboard.tsx with backend
    - Replace mock data with `useHabits()` hook
    - Replace toggle handler with `useToggleCompletion()`
    - Replace create handler with `useCreateHabit()`
    - Replace delete handler with `useDeleteHabit()`
    - Add loading skeleton
    - Add error handling

22. ✅ Integrate AllHabits.tsx with backend
    - Replace mock data with `useHabits()` hook
    - Connect all mutation hooks
    - Add loading/error states
    - Keep search functionality (client-side filter)

23. ✅ Integrate Analytics.tsx with backend
    - Replace mock data with analytics hooks
    - `useStats()` for stats cards
    - `useHeatmap()` for calendar
    - `useTrends()` for chart
    - Add loading skeletons
    - Add error handling

24. ✅ Update App.tsx with authentication routing
    - Add Login/Register routes
    - Wrap protected routes with ProtectedRoute
    - Add redirect logic

**Dependencies**: Workstream 3 (API routes), Workstream 4 (auth system)
**Blocks**: Nothing

---

## 🔶 WORKSTREAM 6: Vercel Deployment Configuration
**Primary Files**: `vercel.json` (new), `package.json` (modify scripts), `api/` folder (new structure - optional)
**No conflicts with**: All other workstreams

### Tasks:
25. ✅ Create vercel.json configuration
    - Define build settings
    - Configure rewrites for API routes
    - Set environment variables
    - Configure serverless function settings

26. ✅ Update build scripts for Vercel
    - Modify `package.json` build scripts if needed
    - Ensure Vite builds to correct output directory
    - Configure serverless function entry points

27. ✅ Create deployment documentation
    - `DEPLOYMENT.md` with step-by-step Vercel setup
    - Environment variables checklist
    - Database setup instructions
    - Troubleshooting guide

**Dependencies**: None (can be done anytime)
**Blocks**: Nothing

---

## 🎯 Recommended Parallel Execution Plan

### Round 1 (All in parallel):
- **Instance 1**: Workstream 1 (Database Schema) - ~30 min
- **Instance 2**: Workstream 4 (Authentication - Tasks 11-15) - ~45 min
- **Instance 3**: Workstream 6 (Vercel Config - Tasks 25-27) - ~20 min

### Round 2 (After Round 1 completes):
- **Instance 1**: Workstream 2 (Backend Storage) - ~60 min
- **Instance 2**: Continue with remaining auth tasks if any

### Round 3 (After Round 2 completes):
- **Instance 1**: Workstream 3 (API Routes) - ~45 min
- **Instance 2**: Start Workstream 5 Task 16-20 (Create hooks and components) - ~60 min

### Round 4 (After Round 3 completes):
- **Instance 1**: Workstream 5 Tasks 21-24 (Frontend integration) - ~45 min
- **Instance 2**: Testing and bug fixes

---

## ⚠️ Important Notes

### Merge Strategy
After each instance completes:
1. Commit and push to separate branch: `claude/workstream-{number}-{description}`
2. Create PR to main feature branch
3. Merge PRs in order: 1 → 2 → 3 → 4 → 5 → 6

### Dependencies Between Workstreams
- Workstream 2 needs Workstream 1 (schema types)
- Workstream 3 needs Workstream 2 (storage methods)
- Workstream 5 needs Workstream 3 & 4 (API + auth)

### File Conflict Matrix
```
           WS1  WS2  WS3  WS4  WS5  WS6
WS1 (DB)    -   No   No   No   No   No
WS2 (Stor)  -    -   No   No   No   No
WS3 (API)   -    -    -   No   No   No
WS4 (Auth)  -    -    -    -   No   No
WS5 (FE)    -    -    -    -    -   No
WS6 (Ver)   -    -    -    -    -    -
```

All workstreams can be developed in parallel with proper dependency management!

---

**Last Updated**: 2025-11-03
