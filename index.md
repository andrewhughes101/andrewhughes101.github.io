---
layout: default
title: Home
---

# About Me

I'm Drew Hughes, a Software Developer working on IBM Z. Mostly playing with automation and working on the CICS sys admin experience.

<br>

# Recent Projects

Check out my [Projects](/projects) to see what I'm working on

<br>

# Public Talks

Check out my [Presentations](/presentations) to see my past conference talks and presentations

<br>

# Latest Posts

{% if site.posts.size > 0 %}
<ul>
{% for post in site.posts limit:5 %}
  <li>
    <span class="post-date">{{ post.date | date: "%b %-d, %Y" }}</span>
    <a href="{{ post.url | relative_url }}">{{ post.title }}</a>
  </li>
{% endfor %}
</ul>
{% else %}
<p>No posts yet. Check back soon!</p>
{% endif %}
