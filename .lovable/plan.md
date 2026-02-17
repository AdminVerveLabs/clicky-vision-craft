

# Make "Next Class" Card Open Class Modal

## What Changes
When clicking the "Next Class: Sat Feb 21" floating card on the homepage hero, it will open the same `ClassModal` used on the Classes & Events calendar, pre-populated with the "Creole Comfort Classics" class data.

## File Changed

**`src/pages/HomePage.tsx`**

1. Import `useState` from React
2. Import `CLASS_DATA` from `@/data/classData`
3. Import `ClassModal` from `@/components/chef/ClassModal`
4. Add state: `const [showClassModal, setShowClassModal] = useState(false)`
5. Make the "Next Class" card clickable by adding `onClick={() => setShowClassModal(true)}` and `cursor-pointer`
6. Render `ClassModal` conditionally at the bottom of the component, passing `CLASS_DATA[0]` (Creole Comfort Classics) as the class data

## Technical Detail

The floating card (lines 63-69) becomes:
```tsx
<div
  onClick={() => setShowClassModal(true)}
  className="absolute -bottom-5 -left-8 bg-white rounded-2xl px-5 py-4 shadow-[0_12px_32px_rgba(0,0,0,0.15)] flex items-center gap-3 cursor-pointer hover:-translate-y-1 transition-transform"
>
  ...
</div>
```

And right before the closing `</div>` of the component:
```tsx
{showClassModal && (
  <ClassModal cls={CLASS_DATA[0]} onClose={() => setShowClassModal(false)} />
)}
```
