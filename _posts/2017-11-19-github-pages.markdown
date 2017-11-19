---
layout: post
title:  "Github Pages"
date:   2017-11-16 20:38:00 +0100
categories: jekyll
comments: true
---
Finally got the page out on the internet and it was. surprisingly easy. Incredibly powerful tool there, good on github.
I imagine that if you are doing a serious web page, you want similar tools installed to help the publishing of your pages.
To make things easier, I added my own NPM command: `"post": "git subtree push --prefix src public master --squash"`.
I guess I could just made a bash file to do that same thing for me, but eh, work with what you have rather than add more things, right?

Also, a final note. Robots.txt is no doubt super useful, Im not sure I get the ramifications on it yet, but its going to be good.
Humans.txt is probably somethign Im going to revisit later.

Final notes on Open Graph. Easy enough to work with. In this implementation, its just showing my github icon, as I opted to make that the site default.
I bet standard crawlers are actually better at picking images, but meh? I can make it smarter down the line. probably by expanding the page properties.

That should be all for the minimum requirements of this assignment, if its not. Im sure I'll hear about it.