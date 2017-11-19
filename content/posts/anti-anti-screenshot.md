---
title: "Circumventing Android's Anti Screenshot"
date: 2017-11-19T14:37:24+07:00
tags:
- android
- adb

draft: false
---

Quick story. A while back, I discovered that Telegram has this feature called "Secret chats". It adds end-to-end encryption to the person you're talking to, and it also disables screenshots using Android's security policy. I wondered if I could take a screenshot anyways, so I tried to hit the screenshot button on many different situations to try to find a bug. But it never worked.

So I turned to StackOverflow (of course) and found out that you can take screenshots using `adb` with a simple command:

```
$ adb shell /system/bin/screencap -p | perl -pe 's/\x0D\x0A/\x0A/g' > screencap.png
```

([source](https://blog.shvetsov.com/2013/02/grab-android-screenshot-to-computer-via.html))

And it works flawlessly! It could bypass Android's no-screenshot security policy, and Telegram doesn't even know it happened! Usually, when you take a screenshot, Telegram informs the recipient of what happened. But with this, it's completely undetected!

Sometimes it might not work (returns an empty output), but most times it works really well. I might make an issue, but I haven't been able to replicate it perfectly, so I'll probably do it later.
