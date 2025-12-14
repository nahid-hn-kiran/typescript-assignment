## What is the use of enums in TypeScript? Provide an example of a numeric and string enum.

\*\* Enums ব্যবহার করে আমরা এমন কিছু ফিক্সড ভ্যালু বা কনস্ট্যান্ট একজায়গায় রাখতে পারি, যা কোডকে অর্গানাইজড রাখে এবং ডিবাগ করা সহজ করে।

## Provide an example of using union and intersection types in TypeScript.

\*\* (|) ব্যবহার করলে একটি ভ্যালু একাধিক টাইপের মধ্যে যেকোনো একটি হতে পারে (যেমন: স্ট্রিং অথবা নাম্বার)। Intersection Type (&) একাধিক টাইপকে একত্রিত করে, ফলে অবজেক্টটিতে সবগুলোর প্রপার্টি থাকা বাধ্যতামূলক।

**Example:**

```typescript
// Union Type
type ID = string | number;

// Intersection Type
type UserBasicInfo = { name: string };
type UserDetails = { age: number };

type User = UserBasicInfo & UserDetails; // Must have both name and age
```
