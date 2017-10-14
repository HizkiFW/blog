---
title: "Check your indentation!"
date: 2017-10-14T21:32:50+07:00
draft: false
---

Finally got Travis to deploy this blog to Github! Woo!

When I first set this thing up, I was expecting the process to be really quick and easy, but it took some time before I actually got this blog to deploy properly. I've made other hugo-based pages using Travis before, so my original plan was to just copy-paste existing `.travis.yml` file and be done with it.

So I did that, and the page deployed successfully to the `gh-pages` branch. Great! *First commit and it already works*, I thought. But alas, I had missed one crucial piece of info. Personal GitHub pages are only served from the `master` branch.

So I did what any reasonable person would do, copy the `master` branch to another one, and empty the old `master` branch. Then I watched the logs as Travis builds my blog. It exited with 0, just like the previous one.

*Great, it should work this time*, I thought again. But you guessed it, it's still not working. It just displayed a 404 page. I checked the master branch to make sure that the files are there, but found out that it was still empty. It worked with the `gh-pages` branch before, so why isn't it working now?

I checked the Travis logs again just to make sure, and found one seemingly innocent line, tucked between the others, that stated the reason for failure:

```
Skipping a deployment with the pages provider because this branch is not permitted
```

Very specific. That much info would *totally* help me solve this problem amirite? Well, I went up to Google and hoped that there'd be a StackOverflow question about this one, but most of the results are GitHub issues on hugo's repo, and they're not using the `pages` provider. I added some quotation marks around it so that I'd get the specific string, but it yielded only 2 results, both of which are someone else's Travis logs.

I almost lost hope at this point. Incidentally, I happen to be joining a programming competition thing called BesutKode, so I asked some of the guys there to help me out with this one. They all seem stumped too, but one of them spotted a potential mistake. The indentation was off on my `.travis.yml` file. Specifically, the last line had no indentation, when it was supposed to be 2 levels deep.

So I added four spaces to the last line, pushed it to the repo, and voila! Travis now deployed the page to the master branch!

Lesson learned: *always* check your indentation.

tl;dr: almost nuked a repo because I forgot 4 spaces.
