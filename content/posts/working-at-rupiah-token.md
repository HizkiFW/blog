---
title: "My Experience Working at a Startup"
date: 2019-09-16T21:00:00+07:00
tags: ["Internship", "Startup", "Rupiah Token"]
categories: ["Life"]
draft: false
---

It was back in April. I had just finished my final high school examinations, and a *very* long holiday awaited. So long that I knew I had to look for something to do. But, knowing my utter lack of self-motivation on holidays, I knew that doing personal projects would only work for the first few days, as I'd quickly get bored and end up surfing reddit for the rest of the holiday. So I looked for a job.

I started compiling some of the little things I did, my achievements, projects, and other things into a neat two-page Curriculum Vitae. At about the same time, my mom told me about her acquaintance's startup. It was called [Rupiah Token](https://rupiahtoken.com/?utm_source=hizkifw_blog), and they're working on a Rupiah-backed [stablecoin](https://en.wikipedia.org/wiki/Stablecoin) on the [Ethereum Blockchain](https://en.wikipedia.org/wiki/Ethereum). Back then I only knew about Bitcoin, and only had vague ideas on what Ethereum was. I knew it's some sort of [cryptocurrency](https://en.wikipedia.org/wiki/Cryptocurrency) but I didn't know much else. I was intrigued, so I got in contact. I sent my CV, and was later invited to their office for a quick chat.

I found out that their product, IDRT, was just like any other cryptocurrency, except the amount of IDRT in circulation is controlled by the company, who holds the reserves for the actual Rupiahs. One Rupiah can be exchanged for one Rupiah Token, and vice versa. This basically fixes the price of IDRT to be the same as IDR, as each and every IDRT in circulation can always be redeemed back to IDR.

I was immediately interested. Sure Bitcoin is interesting, but this was even better. All the safety and speed benefits of cryptocurrencies, combined with the stability of fiat money. *This is perfect*, I thought. So I went ahead with it.

They asked me what I wanted to do there. To be honest I didn't think I'd have that question asked. I just sent in my CV and thought they'd find a suitable role for me based on my past experience. At that time, they were developing an Android app, so I thought I could help in that aspect, but in the end, that project was pushed back and my role was changed to a web developer.

## Working with Websites

I had previous experience dealing with websites, and back then, I've only ever used Bootstrap and JQuery. I didn't know anything about React or Vue or any of those fancy stuff. They told me that it's going to be a great learning experience, which is exactly what I'm here for. And I agreed, so I started learning React. They bought an online course for me and I watched a bit of it, but that didn't really help. I'm more of a hands-on learner, and I *need* to make something in order to learn.

So I thought, *hey, I can just learn React while building the website itself!*

And that's exactly what I did.

I didn't know any of the best practices. I just glanced over some examples, used `create-react-app` to start a template and worked my way up. Just like any other projects, I'd try to use my intuition when possible, but when I'm stuck I'd just Goole what I want to do. In the span of less than a few days, and with the help of random answers from StackOverflow, the project had become more tangled than [that Enterprise-grade Fizz Buzz implementation](https://github.com/EnterpriseQualityCoding/FizzBuzzEnterpriseEdition).

Luckily someone in my company knew someone else who knows React very well. And so they invited that person, who I'll refer to as J, to be an advisor, working remotely to help me in my struggle to learn this new tech stack. So I sent J the GitHub repo, and as expected, got a barrage of helpful messages back. So I continued to improve my code, restructured the project, and kept asking for advice until, eventually, the website was done.

Just the bare functionality. No fancy CSS. It wasn't even responsive, but it works.

I've had quite a bad experience trying to figure out CSS and making things work on arbitrary screen sizes, so I thought I'd do it last, after all the functionality had been complete. Thankfully though, they decided to hire an external party to redo the design and implement all the CSS, using `styled-components` and other fancy new tech.

At that point, I've already learned *a lot* more than if I were to do projects by myself. Heck, I think I'd have sticked with good ol' Bootstrap and JQuery if I were to do things alone. I'm not against any of those libraries, and in fact they're quite useful when you're just doing some quick prototyping, but being stuck to using one thing over and over again is definitely not good, especially when the tech ecosystem evolves so quickly.

The website also had to support user authentication, and initially, I was thinking of deploying my own backend with MySQL to store user auth, until they mentioned Firebase Auth. *Wait, there's already a service that does that for you?* Yes. Yes there absolutely are services that handle auth, and Firebase is just one of them. Well color me surprised. It's safe to say that I realized I'd been living under a rock until that point. There were *so many* new things that I should have known, but didn't. I almost couldn't keep up.

But in the end, after a long path of learning, googling, debugging, and lots of trial and error, the website is done. Well, not *completely* done, just good enough to be usable to the general public. Of course, I still did a lot of minor improvements and tweaks, bug fixes, and general maintenance, but since the company hired J as a full-timer, I've handed that task over to him and was assigned another role.

## Fiddling with Cryptography

The company wanted to expand, and was planning to run their stablecoin on the Binance chain too. Not the centralized [Binance.com](https://binance.com) exchange, but the decentralized [Binance.org](https://binance.org) [DEX](https://en.wikipedia.org/wiki/Decentralized_exchange). Unlike Ethereum, which requires [*smart contracts*](https://en.wikipedia.org/wiki/Smart_contract) to create alternative currencies, the Binance Chain supports the issuance of tokens natively on-chain. Creating IDRTB (IDRT-on-Binance) was actually as simple as issuing a command through their CLI. Plus a bunch of BNB for the fees, but that's outside the point.

The only issue with using the Binance Chain is that there's no native multisignature wallet support. In the Ethereum smart contract, to *mint* (create) or *burn* (destroy) IDRT requires the approval of 2 pre-set administrators. This provides an additional layer of protection, such as if one of the administrator's wallet credentials got stolen, or if the admin goes rogue. *A single wallet does not have the authority to do anything without the approval of another*. That's called multisignature, because multiple signatures (approvals) are required to perform certain actions.

In the Binance Chain, however, there is no native multisignature support. There are no *smart contracts* either, so we can't use the same solution we had for the Ethereum blockchain. I started to think about potential solutions for this issue.

Initially I thought of using [*secret sharing*](https://en.wikipedia.org/wiki/Secret_sharing), a method in which a *secret* (in this case the wallet credentials which will hold IDRTB) can be split apart into multiple pieces, such that each individual piece is useless without the presence of the other pieces. I also found out about [Threshold Signature Scheme (TSS)](https://en.wikipedia.org/wiki/Threshold_cryptosystem), but for various reasons, we did not use these methods.

What we settled on was using a [Hardware Security Module (HSM)](https://en.wikipedia.org/wiki/Hardware_security_module) to store our private keys. I'm not going to go into the details, but basically, the HSM allows us to securely store not only our wallet credentials, but also other keys that we might need in the future.

Now in theory, what the HSM does is it keeps the *private key* in its internal storage, and perform all cryptographic operations using its hardware. The private key will never leave the HSM. To generate transactions in the blockchain, such as moving funds, minting, or burning IDRTB, it needs to be *signed* using the *private key* that holds the funds. The way it's done with a HSM is we give the transaction data to the HSM, and the HSM returns the signature for the transaction.

Essentially, we're offloading the Private Key to the HSM to lower the chances of it getting stolen if, say, our workstations get compromised, stolen, or infected with a virus.

It sounds simple. And it is simple. But implementing it... not so much.

I spent days trying to figure out a connection issue with the HSM. The web UI says it's online, but I can't connect to it. Only to find out that I wasn't connected to the network the HSM was in.

Another few days was wasted trying to figure out the multisignature implementation, messing with OpenSSL to generate private keys, checking out various online sources to try to figure out the binary structure of those keys and signatures, etc.

Then I sat looking through Binance's `javascript-sdk`'s source code to figure out what kind of inputs it's looking for, since the documentation is subpar at best. (*Yes, I know you need a signature to be attached to the transaction, but what's a signature? Is it a Buffer? A hex-encoded string? Or is it a 2-element array containing the <r,s> values as a number?*)

After some digging I figured out that Binance wants the raw `r` and `s` values for the signatures, concatenated into one 64-byte Node.js `Buffer` object. On the other hand, our HSM packs the signatures as DER, which requires a bit more decoding before it could be used. A quick look on Stack Overflow showed how it's done. Easy peasy. So I plugged it in the Binance library and guzzah!

![Screenshot of a message on Slack about the CloudHSM transaction, with multiple joyful reactions](/images/cloudhsm_tx.png)

[First Binance transaction on the testnet, sent using our HSM!](https://testnet-explorer.binance.org/tx/29CCCD00044E0014219A23F57F8B886B9D385B640A9C02DCE7508B4635EBC5CC)

The signatures from the HSM work fine during the first few runs. I was ecstatic. All of that hard work wasn't for nothing! But of course, things always go wrong.

After a few tries, the signatures stopped working. That killed my happiness. I've even verified the signatures manually, and OpenSSL says that it's all good. But for some reasons, Binance did not accept those signatures. After requesting some insight from some other Binance tech, I was given a link to this [issue about transaction malleability](https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki), which requires that the `s` value of the signatures be [below a certain value](https://github.com/bitcoin/bips/blob/master/bip-0062.mediawiki#low-s-values-in-signatures) to prevent it. Who would've known?

That was the final piece of the puzzle. After I implemented the fix for it, everything worked flawlessly. Multiple transactions went through smoothly with no issues whatsoever.

Until I discovered a weird behavior in the Binance library, which I patched up by manually modifying its internal variables from the outside. But aside from that minor hiccup, everything else went smooth as butter.

Anyway it doesn't appear as dramatic in writing but those few weeks when I was tackling with this issue was probably the toughest I've experienced. Every single day was both physically and mentally taxing. Many times I thought I'd never be able to do it, but thankfully my curiosity and passion for this type of problem solving kept pushing me forward. In the end, I was glad I went through with it, up until its completion. This is probably one of my achievements I'm most proud of.

## Work culture

Throughout all of that, the joys and the pain, the busy times and the boring times, I was always given the opportunity to learn and discover things by myself, at my own pace. It was fun. The whole experience of working in a startup, being able to freely express myself, and tackling difficult problems that I'm interested in and I care about, was very unique on its own.

Whenever I had any issues I was free to just stroll over to the next person who I think can help, and when they had issues they'd come to me too. Whenever we had new ideas, the discussion was absolutely fluid, with opinions freely being thrown here and there. Everyone was allowed to join in the conversation, and nobody was ever silenced for saying something against the popular opinion.

Honestly working there have probably been one of the best days of my life. I don't get homework so that's already much better than school. And I get to spend my time working on things that I truly enjoy.

If I get another opportunity, I'd love to be able to work somewhere with the amazing work culture that Rupiah Token has provided. But alas, the time has come for me to pursue higher education, and so I had to stop my work.

Well, I'm sure another time would come. But for now,

さようなら！
