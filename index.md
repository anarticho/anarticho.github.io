---
layout: default
title: Accueil
lang: fr
---
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

<div class="wrapper side-panel-open">
  <div class="side-panel">
    <!-- Profil -->
    <details open>
      <summary>
        <span>Alexandre DS</span>
        <span class="material-icons summary-icon">expand_more</span>
      </summary>
      <div class="profile-box">
        <img src="{{ '/assets/img/logo.jpg' | relative_url }}" alt="Avatar" class="profile-img">
        <div class="profile-text">
          <p>Développeur firmware et reverse engineer.</p>
          <p>Passionné par la techno et le jazz.</p>
        </div>
      </div>
    </details>
    <!-- Switch gauche/droite -->
    <details>
      <summary>
        <span>Switch</span>
        <span class="material-icons summary-icon">expand_more</span>
      </summary>
      <div class="switch-box">
        <button class="switch-btn" id="prevBtn">◀</button>
        <div class="switch-content" id="switchContent">
          <p>Contenu 1</p>
        </div>
        <button class="switch-btn" id="nextBtn">▶</button>
      </div>
    </details>
    <!-- Formulaire mail -->
    <details>
      <summary>
        <span>Contact</span>
        <span class="material-icons summary-icon">expand_more</span>
      </summary>
      <div class="form-box">
        <form action="mailto:{{ site.contact_email }}" method="post" enctype="text/plain">
          <input type="text" name="name" placeholder="Nom" required>
          <input type="email" name="email" placeholder="Email" required>
          <textarea name="message" placeholder="Message" rows="3" required></textarea>
          <button type="submit">Envoyer</button>
        </form>
      </div>
    </details>
  </div>

  <button class="side-panel-toggle" type="button">
    <span class="material-icons sp-icon-open">keyboard_double_arrow_right</span>
    <span class="material-icons sp-icon-close">keyboard_double_arrow_left</span>
  </button>

  <div class="index-body">
    <!-- Ton contenu principal ici -->
  </div>
</div>

<script src="{{ '/assets/js/panel.js' | relative_url }}"></script>