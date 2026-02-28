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
        <span>A propos</span>
        <span class="material-icons summary-icon">expand_more</span>
      </summary>
      <div class="profile-box">
        <img src="{{ '/assets/img/logo.webp' | relative_url }}" alt="Avatar" class="profile-img">
        <div class="text-frame">
          <h3>:: {{ site.username }} ::</h3>
          <p>Demain j'aurai changé. Alors à quoi bon fixer une description? A relever mon ego-trip peut-être? Très peu pour moi. Voici donc quelques mots qui me font vibrer:</p>
          <ul>
            <li>Toro · Libertaire</li>
            <li>Ecouter · Ecrire · Exister</li>
            <li>Sad · Sade · Saudade</li>
            <li>·K·A·I·</li>
          </ul>
        </div>
        <div class="text-frame">
          <h3>:: {{ site.title }} ::</h3>
          <p>Un blog pour souffler sur les braises :</p>
          <ul>
            <li>Histoire de l'anti-autoritarisme, de ses conjuguaisons et de ses erreurs de syntaxe et d'orthographe</li>
            <li>Société du spectacle oblige, réaction à travers des billets d'humeur</li>
            <li>Archives anarchistes, tentatives de fixer ma fumée d'être</li>
            <li>Interfacer</li>
            <li>Informer</li>
            <li>Diffuser</li>
          </ul>
        </div>
      </div>
    </details>
    <!-- Chanson du moment -->
    <details>
      <summary>
        <span>Musique</span>
        <span class="material-icons summary-icon">expand_more</span>
      </summary>
      <div class="video-wrapper">
        <iframe 
          src="https://www.youtube.com/embed/bwl6njgJ34Q?si=vh6SY9fw2LWnlf3O"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen>
        </iframe>
      </div>
    </details>
    <!-- Formulaire mail -->
    <details>
      <summary>
        <span>Contact</span>
        <span class="material-icons summary-icon">expand_more</span>
      </summary>
      <div class="form-box">
        <form action="https://formspree.io/f/xjgezzyr" method="POST">
          <input type="email" name="email" placeholder="Email" required>
          <textarea name="message" placeholder="Message" rows="3" required></textarea>
          <button type="submit">Envoyer</button>
          <p class="form-status"></p>
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
<script src="{{ '/assets/js/contact.js' | relative_url }}"></script>