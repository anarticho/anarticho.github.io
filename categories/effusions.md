---
layout: default
title: Effusions
permalink: /effusions/
---

<section class="category-page">
  <h1 class="category-title">Effusions</h1>
  <div class="main-separator"></div>
  {% assign posts = site.categories.effusion | sort: "date" | reverse %}
  {% assign current_month = "" %}
  {% for post in posts %}
    {% assign post_month = post.date | date: "%m-%Y" %}
    {% if post_month != current_month %}
      {% unless forloop.first %}
        </div>
        <div class="month-separator"></div>
      {% endunless %}
      {% assign current_month = post_month %}
      <h2 class="month-title">
        {{ post.date | date: "%B %Y" | upcase }}
      </h2>
      <div class="category-grid">
    {% endif %}
      <article class="category-card">
        {% if post.image %}
          <div class="card-image">
            <a href="{{ post.url }}">
              <img src="{{ post.image }}" alt="{{ post.title }}">
            </a>
          </div>
        {% endif %}
        <div class="card-content">
          <p class="card-date">
            {{ post.date | date: "%d / %m / %Y" }}
          </p>
          <h3>
            <a href="{{ post.url }}">{{ post.title }}</a>
          </h3>
          <p class="card-excerpt">
            {{ post.excerpt | strip_html | truncate: 140 }}
          </p>
        </div>
      </article>
  {% endfor %}
  </div>
</section>