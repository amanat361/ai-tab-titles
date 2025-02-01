# Tab Title Progress for AI Chats 🤖

Your AI chat now updates the tab title while you multitask ✨

## Demo

Watch the demo here:
[Loom Video Demo](https://www.loom.com/share/35df1834243245c3be0606c6e9b651ec?sid=04ff6050-3ced-4d1b-be24-b3a41eab4a3c)

[Join the discussion on X/Twitter](https://x.com/amanat361/status/1885491778771615990)

## What is this?

A simple demonstration of using browser tab titles to show AI chat progress. When users switch to another tab while waiting for an AI response, the tab title updates to show the current state:

- 🤔 Thinking...
- ✍️ Writing...
- ✅ Done

No more constantly switching back to check if your AI response is ready!

## Implementation

This repo contains a minimal demo using vanilla JavaScript to demonstrate the concept. The core features:

- Detect when users switch tabs using the Page Visibility API
- Update tab title only when users are in another tab
- Track different AI processing states
- Reset title when users return to the tab

Real implementations should be adapted based on your framework and needs. For example:

```javascript
// React hook example
const useTabTitleNotification = (originalTitle) => {
  useEffect(() => {
    const handleVisibilityChange = () => {
      if (document.hidden && isProcessing) {
        document.title = `🤔 Processing... | ${originalTitle}`;
      } else {
        document.title = originalTitle;
      }
    };

    document.addEventListener('visibilitychange', handleVisibilityChange);
    return () => document.removeEventListener('visibilitychange', handleVisibilityChange);
  }, [originalTitle, isProcessing]);
};
```

## Running the Demo

1. Clone the repo
2. Install Bun (if you haven't already)
3. Run the server:
```bash
bun run index.ts
```
4. Open http://localhost:3000

## Notes

- This is a UX pattern demonstration, not a production library
- Actual implementations should handle edge cases like multiple chats
- Consider combining with other notification methods for better UX
- Test across different browsers and tab management scenarios