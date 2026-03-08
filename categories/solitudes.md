---
layout: default
title: Solitudes
permalink: /solitudes/
---

<div class="timeline-page">
    <div class="bg-container">
        <div class="bg bg-a"></div>
        <div class="bg bg-b"></div>
    </div>
    <div class="content-container">
        {% assign events = site.timeline | sort: "year" %}
        {% for event in events %}
        <div class="content-box">
            <h1>{{ event.title }}</h1>
            <p>{{ event.content }}</p>
        </div>
        {% endfor %}
    </div>
    <div class="timeline-line"></div>
    <div class="timeline">
        <div class="arrow up">
        <img src="{{ site.baseurl }}/assets/img/solitudes/up.png">
        </div>
        {% assign events = site.timeline | sort: "year" %}
        {% for event in events %}
        <div class="timeline-date"
            data-title="{{ event.title }}"
            data-text="{{ event.content | strip_html | strip_newlines }}"
            data-bg="{{ event.bg }}">
            <div class="timeline-date-text">
                <div class="timeline-date-title">{{ event.title }}</div>
                <div class="timeline-date-period">({{ event.year }} - {{ event.last }})</div>
            </div>
        </div>
        {% endfor %}
        <div class="arrow down">
        <img src="{{ site.baseurl }}/assets/img/solitudes/down.png">
        </div>
    </div>
  </div>

</div>

<script src="{{ '/assets/js/timeline.js' | relative_url }}"></script>