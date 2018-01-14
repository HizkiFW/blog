---
title: "GCI With OpenWISP"
date: 2018-01-14T17:09:55+07:00
draft: false
tags:
- open source
- google code in
- openwisp
---

![Google Code-In Logo](/images/gci-new-logo.png)

Over the past month or so, I've been participating in an online programming competition called [Google Code-In](https://codein.withgoogle.com/). The competition features 25 organizations, each of which has their own set of tasks for the students to complete. Out of all of them, I chose [OpenWISP](http://openwisp.org/). It was initially a random choice, since I didn't really know which one to join, but I eventually stuck with them because of the really warm and supportive community.

# Things I've learned

Of course, everyone's bound to learn something when exposed to the right environment, and boy was I exposed to the perfect one! The mentors there were really nice and caring, and the community has taught me much more than if I were to learn alone by trial and error. The mentors were really patient in leading all the participants, so I'm sure everyone has also learned new things. Out of all the things I've learned so far, here are the 10 most significant ones.

## Being active in the community

The most important component in the open source world. Being a lone developer isn't fun, especially when you've come across a problem that isn't on [StackOverflow](https://stackoverflow.com/). I've learned so much just chatting with the mentors and other participants in the chat!

Tweeting things you've made also helps you to get recognized as a developer. Build your reputation enough and you might have a job offering waiting for you :grinning:.

## Git

![Screenshot of vim on a terminal editing a git commit message](/images/git-commit.png)

I've just recently learned to use Git, and so being forced to use it in this competition has really sped up my learning process.

## Python

Believe it or not, I've learned quite a lot of Python from trying to [implement a feature in openwisp-utils](https://github.com/openwisp/openwisp-utils/pull/5) (even though I gave up, since it was taking too long and I stopped progressing after the 3-day mark :pensive:). But from that experience, I've learned so much more about Python, and I'm now able to write much better code in it!

## Reading source code

![Photo of a computer screen with vim running, editing Python code](/images/code.jpg)

I was not used to reading other people's code. In one of the tasks, I had to improve on OpenWISP's code, and the only way of understanding its internal structure is by reading the source code. From there I've realized that the code I've written so far has been quite a mess, so I hope I'll be able to improve :smile:.

## The importance of open source

Sometimes documentation could be ambiguous, or maybe there aren't any at all. The only other way to understand how something works is by reading code. Open source code is also trustable, since you can verify that it's doing what it's supposed to do and nothing more. It also means that you can adapt and improve upon the code to fit your needs.

## The importance of documentation

I love to write, and being able to fix and write documentation has made me realize its importance. Reading source code is a tedious task, so having complete documentation for everything is crucial.

## Writing a Wikipedia article

![Screenshot of a notice on my Wikipedia user talk page stating the rejection of my article because the citations weren't independent from the organization](/images/wiki-rejected.png)

Most people don't trust Wikipedia, since it's freely editable. Anyone can write a fake article and insert lies in existing ones. But after taking up a task on writing a [Wikipedia article about OpenWISP](https://en.wikipedia.org/wiki/Draft:OpenWISP), I soon realized how strict their content policy and guidelines are. They are simply not going to accept things without proof.

## Test your code!

This is one of the most emphasized point the mentors made. If you submit untested code and it breaks when the reviewers test it, you'll have to test it yourself and fix the problem, and that just wastes everyone's time.

## The solution is usually very obvious

And yes, I couldn't believe it when I finally tackled the networking problem in my Linux install. I've been trying to dual boot my PC with Ubuntu since the past year, but have always come across various problems with it. The solution? Turn it off and on again. Seriously. As it turns out, Windows doesn't do a full reboot when the restart button is pressed, which means that some part of the RAM isn't cleared. That caused some serious problems preventing my Linux installation from connecting to the network.

## Sometimes it's not your fault

Bugs aren't that rare, and when you can't get something working, the problem might not be with you, but with the software you're using. I've discovered a few bugs while doing GCI, and have reported them to the issue tracker.

# Challenges

Learning new things isn't that easy, and of course, I've also faced quite a few challenges.

## Timezone differences

GCI is a global competition, meaning anyone anywhere could join. The mentors and other participants might be on a different timezone, making it difficult to communicate with them effectively. Before joining OpenWISP, I was actually on CloudCV, however the timezone differences were quite far. I had to break my sleep cycle quite often just to talk with the mentors for a few minutes, and so to preserve my sanity, I moved to OpenWISP.

## Balancing with school

Everyone goes to school, and so do I. And as much as I'd love to learn in school, I'd also like to win this year's GCI, so I had to find a delicate balance to keep my momentum on both. During school days, I'd do some quick and easy tasks, so that I could focus on studying during the exams without thinking much about GCI.

## Learning a new framework

This is still one of my biggest hurdles, and I still think about it sometimes. I had a task on designing a navigation bar for OpenWISP Controller's admin panel. I submitted it and got it accepted, but then one of my mentors offered me to do the back-end part. *Django is just Python, it's fine*, I thought. But I got stuck. I spent *days* digging through the source code and trying to make sense of it, but in the end, I wasn't able to complete it. I did manage to dynamically add the menu bar buttons with Django, though, but it wasn't *exactly* as the task said. So I [pushed the source code](https://github.com/openwisp/openwisp-utils/pull/5) for other participants to continue.

# Closing words

One thing I didn't like about this was the fact that only a few of the mentors are actively guiding the participants in chat. Next year, I hope that more mentors will be able to participate and be more involved in the competition, thus guiding more students and equipping them with the knowledge to be able to participate in the open source community.

Overall, it's been a really fun ride with everyone on the OpenWISP community. I look forward to competing with you guys again next year! And hopefully we can meet on the Googleplex later :wink:.
