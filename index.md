---
layout: default
title: Accueil
lang: fr
---
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<div class="wrapper side-panel-open">
  <div class="side-panel">
    <div class="box profile-box">
      <img src="{{ '/assets/img/logo.jpg' | relative_url }}" alt="Avatar" class="profile-img">
      <div class="profile-text">
        <h3>Alexandre DS</h3>
        <p>Développeur firmware et reverse engineer.</p>
        <p>Passionné par la techno et le jazz.</p>
      </div>
    </div>
    <!-- Box switch gauche/droite -->
    <div class="box switch-box">
      <button class="switch-btn" id="prevBtn">◀</button>
      <div class="switch-content" id="switchContent">
        <p>Contenu 1</p>
      </div>
      <button class="switch-btn" id="nextBtn">▶</button>
    </div>
    <!-- Box formulaire mail -->
    <div class="box form-box">
      <form action="mailto:tonmail@example.com" method="post" enctype="text/plain">
        <input type="text" name="name" placeholder="Nom" required>
        <input type="email" name="email" placeholder="Email" required>
        <textarea name="message" placeholder="Message" rows="3" required></textarea>
        <button type="submit">Envoyer</button>
      </form>
    </div>
  </div>
  <button class="side-panel-toggle" type="button">
    <span class="material-icons sp-icon-open">keyboard_double_arrow_right</span>
    <span class="material-icons sp-icon-close">keyboard_double_arrow_left</span>
  </button>
  <div class="index-body">
  </div>
</div>

<script src="{{ '/assets/js/panel.js' | relative_url }}"></script>