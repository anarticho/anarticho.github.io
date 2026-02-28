---
layout: default
title: Accueil
lang: fr
---
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<div class="wrapper side-panel-open">
  {% include volet.html %}
  <button class="side-panel-toggle" type="button">
    <span class="material-icons sp-icon-open">keyboard_double_arrow_right</span>
    <span class="material-icons sp-icon-close">keyboard_double_arrow_left</span>
  </button>
  <div class="index-body">
    <!-- Ton contenu principal ici -->
  </div>
</div>

<script src="{{ '/assets/js/panel.js' | relative_url }}"></script>