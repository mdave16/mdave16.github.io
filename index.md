---
title: Mayur Dave
---

# Hey!

I'm Mayur Dave and I am a polyglot software engineer at eBay. I enjoy mathematics, hiking, and board games. I have my old maths notes available online on this website. [Reach out](_contact) if there is anything
you want up! You can also ask about coding and teaching.

Here are some of the things I'm currently working on:
{% assign projects = site.github.public_repositories
	| where_exp: "project", "project.homepage"
	| where_exp: "project", "project.fork == false"
	| where_exp: "project", "project.homepage != ''" %}

{% for project in site.data.projects %}
- [{{project.name | strip }}]({{ project.homepage }}){% endfor %}{% for repository in projects %}
- [{{repository.name | strip }}]({{ repository.homepage }}){% endfor %}

[Warwick Blog](http://blogs.warwick.ac.uk/mdave/)

Give me [feedback](_contact) if there is anything wrong, or if you
feel there is something I could change!

[_contact]: contact "Contact me"