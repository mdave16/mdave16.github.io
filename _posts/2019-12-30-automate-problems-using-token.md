---
title: Automate Problems Away with Token Jobs
tags:
  - Agile
  - Coding Practices
  - Internal Open Source
  - eBay
  - Developer Tools
  - Culture
  - Shutl
---
Got a problem? Spend some time writing a script to do it for you. Got a bigger problem? Write a service which fixes it
for you. Want to solve problems with software engineering? Use Token Jobs.

<img src="https://static.ebayinc.com/static/assets/Uploads/Blog/Posts/_resampled/FillWyI4MDAiLDU1MF0/IMG-1641.jpg" alt="Developer looking at screen." title="How to fix this?">

A developer in the wild can be confronted by many problems. Some of these problems will be slow or repetitive tasks,
some will be the lack of adoption of tools which could help, and some will be convincing others that the first two are
problems. How does the developer manage to fend off these problems?

One way the humble developer might fix this problem is by massaging any pain points when they see fit and working away
on making everything pristine. While this seems like an appropriate solution, it only works in the short term. In the
long term, it’s not cost effective and when the business suffers, so does the developer.

Another solution is to
use [Gold Cards](https://leadingagileteams.com/2015/09/01/making-time-for-personal-development-gold-cards/) — tickets
that the developer can present to the team which allows them to work on personal development for half a day per week,
for a total of one day per two-week sprint. However, we didn't want a time limit to pressure our tinkering. It also
wouldn't work because we are a team who continuously delivers rather than using sprints.

Here at Shutl, we created something called The Token. The Token is a physical statue with wrenches, as shown above.
While it is a physical object, The Token is more of an idea. Whomever has The Token can work on an issue that annoys
them and that they feel fixing would improve their work.

One benefit from The Token is that there is no backlog to circumvent, no product owners or business people to convince.
The reason this works is due to trust. There is a high level of trust among the developers and, in turn, we feel trusted
and supported. Whenever we have a pain point, we know that we can simply take The Token and fix it the way we do best,
by programming.

We chose this solution because we believe it is empowering. Shutl is made up entirely of motivated individuals. The
Token gives them support to do their jobs with full autonomy. Allowing our engineers to develop in such a way has been
empowering for us, making us feel like players rather than pawns and ensuring we
have [a healthy team](https://labs.spotify.com/2014/09/16/squad-health-check-model/).

Another benefit we gain is having space to fail. It is important to have space to fail in order to innovate. If you have
an idea that could help, but does not work, that’s OK. By having the space to fail, you can experiment freely and
explore, which allows us to be innovative. Most new technologies and concepts started off as a token task.

I think it’s safe to say The Token has been a success. Since its introduction, we’ve had fewer problems, and the team
has been generally happier. In the beginning, the token was used very often, but as time goes on we’ve used the token
less. At the moment there are no plans to change or improve on The Token. The Token is just a tool for improving our
code quality, which it has done and continues to do.

This isn’t a silver bullet, however; it’s important to consider any downfalls. One possible concern is that by giving
the engineers free rein, they may not work on what the business needs. However, by having one token and, at most, one
ongoing job at any given time, we can be sure that there will still be deliverable change.

It is clear existence of a token, and the ongoing work on tokens can slow down the pace of delivery in the short term.
However, having a nicer and healthier system leads to happier developers and can speed up the pace of delivery in the
long term. Although not new, we know most extreme programming practices lead to long-term solutions of sustainable
development practices.

### Examples

Two of the main tools that were developed in-house started off as Token jobs.
[<img src="https://static.ebayinc.com/static//assets/Uploads/Editor/_resampled/ResizedImageWzMzMCwzMzJd/shipship-logo.png" alt="shipship" title="shipship">](
{% post_url 2019-03-27-shipship %})
[ShipShip]({% post_url 2019-03-27-shipship %}): We found a problem with coordinating stand ups and deployments with the
USA. We took The Token, built a very simple version of the one seen here. We solved the stand up issue and made it
easier to deploy. ShipShip has been improved since then, but the difficult first step was a token job.

[<img src="https://static.ebayinc.com/static/assets/Uploads/Editor/logo.svg" alt="logo" alt="failbot" title="failbot" height=330>](https://www.ebayinc.com/stories/blogs/tech/failbot/)

[FailBot](https://www.ebayinc.com/stories/blogs/tech/failbot/): We had an issue with flaky tests and being unsure if a
failure was real or not. Once again, The Token gave us a start with FailBot, which was considerably improved on by later
Token jobs.

### Conclusion

All in all, the token has been serving us well. It has certainly helped us find solutions, from keeping track of stories
to ensuring we are not blocked by flaky tests.

Things work best when engineers do what they do best and automate the problems away. Ultimately, The Token is simply an
efficient means to an end.
