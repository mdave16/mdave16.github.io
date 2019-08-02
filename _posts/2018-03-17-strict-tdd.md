---
layout: post
title: "Super Strict TDD"
date: 2018-03-17
---

Recently I saw a talk about TDD, encouraging a very strict version. We discussed this at length at my office and found that most people felt this was too restrictive on the process of programming. Another comment was that often these talks suggesting strict TDD will always show very simple small methods as standalone, not entire projects with infrastructure that needs thinking about.

I decided to try this out and create a project which follows the advice. The super strict version is to switch from test to fixing literally word by word, and only refactoring after you have finished fixing the test. It also encouraged not thinking too much about issues until you reach them and then reacting to them, which certainly can be good advice.

I set out to create a small website which generates lights out grids and then will solve them, and also time how long you take to finish them and show a leaderboard. With a bit of imagination, it can be easy to see this project expanding quite quickly.

This is how I went about it:

 git init

 bundle init --path vendor/bundle (ruby is something i was trying to learn, so wanted this to be a ruby project)

 bundle add cucumber
 cucumber --init (this will be used to test the UI)

 adding an arithmetic feature, this will be testing that i have a working test suite.

 bundle add rspec (this is to have expections within the cucumber suite)

 hello world feature: to say we have a web page which displays Hello world

 adding steps, adding capybara as this is the gem i'll be using to test with cucumber. add to env.rb so that i have configured the test suite.

 Notice how i've done so much and haven't even installed sinatra, the gem i'll be using to create the website?
