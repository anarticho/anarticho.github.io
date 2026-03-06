---
layout: default
title: Solitudes
permalink: /solitudes/
---

<div class="timeline-page">
    <div class="bg-container"></div>
    <div class="content-box">
        {% assign first = site.timeline | sort: "year" | first %}
        <h1 id="event-title">{{ first.title }}</h1>
        <p id="event-text">
            {{ first.content }}
        </p>
    </div>
    <div class="timeline-line"></div>
    <div class="timeline">
        <div class="arrow up">
        <img src="{{ site.baseurl }}/assets/img/solitudes/up.png">
        </div>
        {% assign events = site.timeline | sort: "year" %}
        {% for event in events %}
        <div class="date"
            data-title="{{ event.title }}"
            data-text="{{ event.content | strip_html | strip_newlines }}"
            data-bg="{{ event.bg }}">
        {{ event.year }}
        </div>
        {% endfor %}
        <div class="arrow down">
        <img src="{{ site.baseurl }}/assets/img/solitudes/down.png">
        </div>
    </div>
  </div>

</div>

<script src="{{ '/assets/js/timeline.js' | relative_url }}"></script>