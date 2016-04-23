# SoundSpice

Play/Pause SoundCloud on a remote Mac using a simple URL.

This should work for anything that BeardedSpice supports.
If you want to use a different shortcut, make sure you update the AppleScript in index.js

## Getting started
1. `npm install`
2. Install BeardedSpice [https://github.com/beardedspice/beardedspice]
3. In the preferences for BeardedSpice, define the shortcut for PlayPause as Shift + Option + Command + Control + B
4. Log into SoundCloud in Safari and shuffle your Likes page and pin it (Window > Pin tab)
5. In Terminal, run `node index`
6. Visit `192.x.x.x:3000` in a browser and have SoundCloud start playing

### Troubleshooting
- Make sure SoundCloud is visible and selected when you click BeardedSpice icon in the menu bar
