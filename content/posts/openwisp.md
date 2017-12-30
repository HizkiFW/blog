---
title: "Introducing OpenWISP2"
date: 2017-12-30T10:11:06+07:00
tags:
- open source

draft: true
---

Aw yeah, another blog post! I was actually writing a post about open source competitions, but I moved that aside in favour of this one. Introducing [OpenWISP2](http://openwisp.org).

# What's OpenWISP2?

![OpenWISP logo](https://camo.githubusercontent.com/6d1e33ea8ae0283be731dfc90c5cfab952fbbc90/687474703a2f2f6e65746a736f6e636f6e6669672e6f70656e776973702e6f72672f656e2f6c61746573742f5f696d616765732f6f70656e776973702e6f72672e737667)

In short, it's a set of tools to help *create and manage networking devices*. It might seem a bit boring at first. *Why do I need to use more software just to control my network?* you may ask. Well, OpenWISP might not prove useful for a network made of a single router and a few nodes, but once your network scales, it'll be a mess configuring and fixing things if something goes wrong, or if you want to change the configuration.

## The History

OpenWISP began as a project to support [WiFimetropolitano](http://www.cittametropolitanaroma.gov.it/homepage/elenco-siti-tematici/wifimetropolitano/), a project started by the province of Rome in 2008 to make a free public WiFi for everyone. From there, it's obvious that the whole thing needs to be open source, to let the community make whatever modifications and improvements they want to the system.

The size of the network kept on increasing, and so OpenWISP was developed to help manage the large scale networks. It allowed the network to grow to over 1200 active nodes.

The [full history](http://openwisp.org/history.html) is available on OpenWISP's website.

## So what does it do?

One of the main features of OpenWISP2 is OpenWISP2 Controller, which allows you to manage multiple networking devices in one interface. Let me give you an example. Say you manage a big network for a huge building composed of many nodes (i.e. routers, switches, wireless APs, etc.), and you configured all of those devices to use DNS server A, when all of a sudden, that DNS server goes down. None of the devices in your network can do any DNS queries, which means it's unusable for end-users.

In this situation, the only options are to wait for DNS server A to come back online, or change the DNS servers in the routers' settings to point to another DNS server. It's quick to fix on a single router, but in this scenario where you have hundreds of routers, it's going to take too long to change the settings one by one. This is where OpenWISP2 comes in.

OpenWISP2 provides the tools you need to connect your entire networking infrastructure to a single control center, where you can change the settings of multiple, or even all, of the devices at once. By installing openwisp-config on your routers, you can have it connect to your OpenWISP2 server without that much configuring. It'll automatically register your device to the server, where you can control its settings in just a few clicks.

**[[[You can even install OpenWISP2 on multiple servers, so that when one goes down, openwisp-config can connect to another one.]]] (waiting verification from @nemesisdesign)**

## Custom firmware

Furthermore, if you want to install openwisp-config on a bunch of routers at once, you can compile your own version of [OpenWRT](https://openwrt.org/) with openwisp-config pre-installed, including your own configurations, so that you can simply flash the firmware on your devices, and they'll automatically register to your OpenWisp2 Controller instance, where you can manage them. By flashing the custom firmware on your devices, they'll retain default settings even after resetting them, so you don't have to reconfigure each device manually when you reset the device to factory settings.

You can see a guide on how to do it [here](https://github.com/openwisp/openwisp-config#compiling-a-custom-lede--openwrt-image). They even provide a tool to do it for you, called [ansible-openwisp2-imagegenerator](https://github.com/openwisp/ansible-openwisp2-imagegenerator).

## Is that it?

Well of course not! Not only can OpenWISP2 manage your devices, it can also monitor them! With OpenWISP2 Monitoring, you can get notified of when any of your devices go down. It can keep a record of when your devices go offline, and with [netjsongraph](https://github.com/netjson/django-netjsongraph), you can see a visualization of the network topology, which links are active, etc. NetJSONGraph is actually just a django app, but since OpenWISP2 is also built on django, both can be connected easily. 

# Some examples

Now that you've got the basic idea of what it does, allow me to show you around one of OpenWISP's projects, OpenWISP2 Controller. This is where all of your networking devices connect to, and where you can manage them.

![OpenWISP2 Controller admin panel login screen](/images/openwisp-login.png)

Once installed, you can access the admin panel using a web browser. Simply log in and you'll be greeted with a variety of things to do.

![OpenWISP2 Controller menu](/images/openwisp-menu.png)

**[[[ insert video demo of openwisp2 admin panel ]]]**

As seen in the short demo, we are provided with a variety of tools, from general things like setting the timezone, DNS servers, and routing, to things such as VPNs and controlling the device LEDs.

# Contributing

Since OpenWISP is open source, you can write your own custom extensions and modify OpenWISP2's code to your liking. It's fully customizable, and many people (including me!) contribute to it by adding features, fixing bugs, etc. I'm joining OpenWISP for [Google Code-In](https://g.co.gci), and with the help of the mentors, I've [fixed bugs](https://github.com/openwisp/ansible-openwisp2/pull/66), [added features](https://github.com/openwisp/openwisp-utils/pull/5), and [wrote guides](https://github.com/openwisp/openwisp2-docs/pull/41) for OpenWISP. You can even contribute yourself by checking out [their GitHub](https://github.com/openwisp). You too can help contribute to OpenWISP's development. Check out these links for more information, and if you still have any questions, feel free to hop on their chat!

- [GitHub](https://github.com/openwisp)
- [Chat](http://openwisp.org/support.html)
