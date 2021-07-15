---
title: Information Systems
tags:
  - Programming Tools
  - Information Systems
---

I have had this idea, but have been unable to come up for the vocabulary for it.

Consider the following framework for thinking about our work as software engineers. There is a product that you
maintain, and something is not working as the customer wants it to, either since it's a bug or a feature they want or
need. The first step is to use information at our disposal in order to learn about our product, so to make a decision of
the solution. The second step is to optimally implement that solution.

Given this framework, there are lots of books that tell you how to do the second step, for instance Clean Code or Design
Patterns. I'm more interested in the first step. Some examples of the first step:

- Should I add a rate limit on my application? Should I remove this feature, is it unused or being misused? ... which
  falls under the camp of Should I add a feature?
- Why does this feature show for this customer but not for this customer? Why does this customer get an NPE?... which
  fall under the camp of Why is there a bug?
- How is the payment mechanism working and can I use it to add my feature more easily? Is there an internal api that
  already does this job? aka Can I add this feature cheaper?

Now when we want to answer these questions, we actually have systems that can give us this information. By system, I
mean either a set of habits, so can be relied upon e.g. git commits or a programmatic system e.g. an API.

Some examples of such systems:

- The code itself; you can always read the code, whether you can understand it is an unrelated question. A benefit is
  that the code never lies, this is what is in production (after checking out the correct version).
- A work tracking tool, e.g. Jira, maybe you can search through the history and why find a certain change was made or
  why a decision was made. This is just an organised wiki, since it's all edited by humans and can be updated by anyone
  at anytime.
- A wiki, a disorganised work tracking tool, with the added disadvantage that it is easy to not keep up to date. A pro
  is that if people are effective writers, then the wiki can be really useful.
- Official documentation of a tool.
- A historian, like a wiki but worse since humans are worse at remembering things than machines are, but better since
  only one editor is allowed.
- git commits - pro: very close to the code, con: relies on humans and effective communication, also has multiple
  styles.
- pull requests - similar to git commits but better for providing a higher level overview of a change
- source code host search, e.g. github search or gitlab search
- slack messages - since slack is a Searchable Log of All Communication and Knowledge, it is certainly a place to look
  for information.
- Cloud provider API/UI - e.g. AWS that can tell you the version that is currently in prod
- Metrics - e.g. ELK, Prometheus + Grafana
- Direct db queries

Each system has a certain cost, to maintain it, and each system gets us some information with some degree of
reliability. One of the problems I would like to think about is how to manage the set of systems an engineering team
leverages in order to get the information they need for minimal cost? Another question, is that if one were to move to a
new team, where the set of systems is different, or perhaps organised differently, how quickly can one orient themselves
to the new set of systems.

Picture this scenario: You work somewhere, and you are very used to the set of systems available to you. You change your
working team, either by moving teams or by moving companies. The new team organises things totally differently, and you
feel lost because you're in a different kitchen. One can assume the new team has a set of systems, and is not just
running around in the dark like magicians or mute historians. You exclaim, "Hey team, you are not using one of the
systems I was reliant upon in my old team, and I feel out of place, can everyone start using my system?". Maybe you've
said these words, maybe you've heard them. Here's a more concrete example: "Hey, can everyone put jira ticket ids in
front of git commit messages and inside the git pull requests, I find it really useful and am annoyed that I'm the only
one doing it". Which leads to an interesting question of how does a system organically get added, and organically leave?
By asking people, and annoying them into it like a cop, you feel angry for forcing them, and they feel angry for being
micromanaged. Maybe the information that you want to introduce is only seen as valuable by you, maybe they have another
system which you have not found yet which gathers that information?

If you have better names for any of the things I am talking about, or want to discuss them just leave me a message and
some way of contacting you. Also if you know anyone who has written about this and already explored these topics, then
give me a shout, I'd love to read up on this. 
