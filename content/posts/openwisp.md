---
title: "Introducing OpenWISP2"
date: 2017-12-30T10:11:06+07:00
tags:
- open source
- networking
- google code in

draft: false
---

Aw yeah, another blog post! I was actually writing a post about open source competitions, but I moved that aside in favour of this one. Introducing [OpenWISP2](http://openwisp.org).

# What's OpenWISP2?

![OpenWISP logo](https://camo.githubusercontent.com/6d1e33ea8ae0283be731dfc90c5cfab952fbbc90/687474703a2f2f6e65746a736f6e636f6e6669672e6f70656e776973702e6f72672f656e2f6c61746573742f5f696d616765732f6f70656e776973702e6f72672e737667)

In short, it's a set of tools to help *create and manage networking devices*. It might seem a bit boring at first. *Why do I need to use more software just to control my network?* you may ask. Well, OpenWISP might not prove useful for a network made of a single router and a few nodes, but once your network scales to tens or even hundreds of routers and devices, it'll be a hassle configuring and fixing things if something goes wrong, or if you simply want to change a setting and apply it to all the devices.

## The History

OpenWISP began as a project to support [WiFimetropolitano](http://www.cittametropolitanaroma.gov.it/homepage/elenco-siti-tematici/wifimetropolitano/), a project started by the province of Rome in 2008 to make a free public WiFi for everyone.

Since the start they've decided to build the project to be *completely open*, and allow the community to make whatever modifications and improvements they want to the system.

The size of the network kept on increasing, and so OpenWISP was developed to help manage the large scale networks. It allowed the network to grow to over 1200 active nodes.

The [full history](http://openwisp.org/history.html) is available on OpenWISP's website.

## Core values and goals

OpenWISP, like many other organizations, have their own set of [values and goals](http://openwisp.io/docs/general/values.html) too.

In short, they support a free, open, and private internet access for everyone, allowing for a reliable channel for communication. And to achieve that, they've set several goals, such as releasing free and open software to ease the creation and management of low-cost networks around the world.

Personally, I strongly agree with all 5 of their values. Communication is an essential part of being human, and since the Internet, like speech and text, is a communication medium, it needs to be free and open for all.

## So what does it do?

One of the main features of OpenWISP2 is OpenWISP2 Controller, which allows you to manage multiple networking devices in one interface. Let me give you an example. Say you manage a big network for a huge building composed of many nodes (i.e. routers, switches, wireless APs, etc.), and you configured all of those devices to use DNS server A, when all of a sudden, that DNS server goes down. None of the devices in your network can do any DNS queries, which means it's unusable for end-users.

In this situation, the only options are to wait for DNS server A to come back online, or change the DNS servers in the routers' settings to point to another one. It's easy to fix just a single router, but in this scenario where you have hundreds of those things, it's going to take *way* too long to change the settings one by one. This is where OpenWISP2 comes in.

OpenWISP2 provides the tools you need to connect your entire networking infrastructure to a single control center, where you can change the settings of multiple, or even all, of the devices at once. By installing [openwisp-config](http://downloads.openwisp.org/openwisp-config/) on your routers, you can have it connect to your OpenWISP2 server without that much configuring. It'll automatically register your device to the controller, where you can control its settings in just a few clicks.

## Custom firmware

Furthermore, if you want to install openwisp-config on a bunch of routers at once, you can compile your own version of [OpenWRT](https://openwrt.org/) or [LEDE](http://lede-project.org/) with openwisp-config pre-installed, including your own configurations, so that you can simply flash the firmware on your devices, and they'll automatically register to your OpenWISP2 controller instance, where you can manage them. By flashing the custom firmware on your devices, they'll retain default settings even after resetting them, so you don't have to reconfigure each device manually when you reset the device to factory settings. Flashing devices is also much easier and faster than installing and configuring them by hand, so it will also save you a lot of time.

You can see a guide on how to do it [in there repo here](https://github.com/openwisp/openwisp-config#compiling-a-custom-lede--openwrt-image). They even provide a tool to do it for you, called [ansible-openwisp2-imagegenerator](https://github.com/openwisp/ansible-openwisp2-imagegenerator).

## Is that it?

Well of course not! Not only can OpenWISP2 manage your devices, it can also monitor them! With OpenWISP2 Monitoring, you can get notified of when any of your devices go down. It can keep a record of when your devices go offline, and with [netjsongraph](https://github.com/netjson/django-netjsongraph), you can see a visualization of the network topology, which links are active, etc.

![Screenshot of netjsongraph](/images/openwisp-netjsongraph.png)

In the screenshot above, you can see that netjsongraph can visualize the connections between devices and their link status, so that you can get a clear picture of what's happening in your network.

NetJSONGraph is actually just a django app, but since OpenWISP2 is also built on django, it could be easily integrated. You can even make your own app that suits your needs and integrate it to OpenWISP2.

# Some examples

Now that you've got the basic idea of what it does, allow me to show you around one of OpenWISP's projects, OpenWISP2 Controller. This is where all of your networking devices connect to, and where you can manage them.

![OpenWISP2 Controller admin panel login screen](/images/openwisp-login.png)

Once installed, you can access the admin panel using a web browser. Simply log in and you'll be greeted with a variety of things to do.

![OpenWISP2 Controller menu](/images/openwisp-menu.png)

## Video demo

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/MY097Y2cPQ0" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

As seen in the short demo above, we are provided with a variety of tools, from general things like setting the timezone, DNS servers, and routing, to things such as VPNs and controlling the device LEDs.

Not only can we change the settings per device, but OpenWISP comes with another cool feature called Templates. Templates are basically presets that you can apply to devices, so whenever you have a new device, you can easily apply those templates so that you don't have to change the settings manually. You can also make multiple templates and combine them together, allowing you to configure your devices really quickly.

The templates are also synced with the device you apply it to, so when you change a setting in the template, all devices which have that template applied will also have that setting changed. This makes it really easy to group devices and configure them all at once, while still allowing for flexible per-device configuration.

# Contributing

Since OpenWISP is open source, you can write your own custom extensions and modify OpenWISP2's code to your liking. It's fully customizable, and many people (including me!) contribute to it by adding features, fixing bugs, etc. I'm joining OpenWISP for [Google Code-In](https://g.co.gci), and with the help of the mentors, I've [fixed bugs](https://github.com/openwisp/ansible-openwisp2/pull/66), [added features](https://github.com/openwisp/openwisp-utils/pull/5), and [wrote guides](https://github.com/openwisp/openwisp2-docs/pull/41) for OpenWISP. You can even contribute yourself by checking out [their GitHub](https://github.com/openwisp). You too can help contribute to OpenWISP's development. Check out these links for more information, and if you still have any questions, feel free to hop on their chat!

- [GitHub](https://github.com/openwisp)
- [Support channels](http://openwisp.org/support.html)

## Further resources

If you're *really* that interested and would like to know more, well you're pretty lucky because Federico Capoano, OpenWISP's core developer, has done a talk about it.

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/n531yTtJimU" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>

The slides shown in the video are also [available on his website](http://static.nemesisdesign.net/openwisp2-openwrt-summit-2017).

<iframe src="//www.slideshare.net/slideshow/embed_code/key/dHCyR6Ze8Q3Ygq" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/FedericoCapoano/applying-the-unix-philosophy-to-django-projects-a-report-from-the-real-world" title="Applying the Unix Philosophy to Django projects: a report from the real world" target="_blank">Applying the Unix Philosophy to Django projects: a report from the real world</a> </strong> from <strong><a href="https://www.slideshare.net/FedericoCapoano" target="_blank">Federico Capoano</a></strong> </div>
