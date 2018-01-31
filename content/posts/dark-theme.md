---
title: "Dark Blog Theme"
date: 2018-01-30T17:35:21+07:00
tags: ["Programming", "CSS", "Hugo", "Theme"]
categories: ["Programming"]
draft: false
---

Being a dark-theme fanatic, I always look for a setting to enable the dark theme whenever I use a new app. I also have a Firefox extension that allows you to change any website's stylesheet, and I use it to apply dark themes to websites I frequent. It's really nice when they do provide a dark theme, but in most cases they don't. And my blog theme doesn't come with dark colors, so I made my own CSS theme for it!

```css
body {
    background-color: #222;
    color: #DDD;
}
.profile h1, #post-list a,
.post h1, .post h2, .post h3, .post h4, .post h5, .post h6,
h1, h2, h3, h4, h5, h6 {
    color: #FFF;
}
#post-body, p {
    text-align: justify;
}
a, #title, #post-list a:hover, #title:hover {
    color: #5096ff;
}
nav.main-nav {
    background: rgba(34, 34, 34, .9);
}
```

After that, I replaced the default `highlight.css` file with the [Monokai](https://github.com/isagalaev/highlight.js/blob/master/src/styles/monokai.css) theme. This makes the code blocks look dark too.

As it turns out, it's not that difficult to style this theme. There are relatively few elements to change, and that really sped up the process.

Anyways, feel free to use the code for your own blog if you happen to have the same theme.
