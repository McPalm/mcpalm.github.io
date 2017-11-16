---
layout: post
title:  "Reflections around Jekyll and C/O"
date:   2017-11-16 16:30:00 +0100
categories: jekyll
comments: true
---
Now when im getting warm into jekyll and how to compose a page with it, I got to say.
It's rather neat. I guess its similar to how you write larger programs.
Each document focus on one small aspect of the whole, and then the compiler combines everything and cook a program for you.
The posts I write now is done in markdown, wich is a suitable tool for creating content.
Im familiar with game development, and the assest you make in that is never just code, its image files, yarn dialogue trees etc.
It makes it easy to just add more content to the page. You just write it out, check a few flags and BAM. You got a web page.

SASS, a type of precompiled CSS adds to this as well. Honestly, some the functions I get out of it and used so far are things that should just be a part of CSS.
Setting constants at the start of a document and reusing them is a nobrainer.
Splitting up documents in several might be a performance issue, tho honestly. at the end of the day we are looking at a few kilobytes that are hashed in when you first visit a page, not a big deal.

Im not neccecarely on board with static page generators as is. It would make more sense to me if pages could be futher broken down into partial pages.
For example this page. When you load it, you are being sent the whole pages html code, even tho you navigated here from the index page. And most of the data sent to you recieving this is just the same code over and over again. Its slow for you, it doubles the servers load.

There is one problem in my current workflow tho, that I have to fix. Putting a picture on a page uses some code shenanigans that I rather keep to html or similar locations, NOT in a markdown document. Like so `![alt text]({{"/assets/BitAssembly.png" | absolute_url}})`, this is what I have to do to show that picture down below. I would rather see it be like so `![alt text]["BitAssembly.png"]` and just have it figure out that it should look for that png in the assets folder. Current workflow defeats the purpose of using markdown to begin with.

![alt text]({{"/assets/BitAssembly.png" | absolute_url}})