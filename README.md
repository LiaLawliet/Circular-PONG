# Circular Pong

**jeu web en competition**

Un Pong circulaire où les joueurs doivent marquer un maximum de points avant de sortir la balle afin de gagner. Des évènements arrivent après un certain nombre de rebond.

![image](https://img4.hostingpics.net/pics/947425CircularPong.jpg)

## REGLES

* Les joueurs controlent leur raquette avec le clavier (Q/D et les fleches directionnelles)
* Les joueurs ont une collision entre leurs raquettes
* La balle part après un décompte dans une direction aléatoire
* La balle rebondit sur les raquettes
* Sortir la balle du cercle fait gagner 1 point
* Si un joueur possède 10 points de plus que son adversaire, sa raquette rétrécit
* La raquette rétrécie d'un joueur redevient normale si l'adversaire remonte à 5 points de différence.
* La balle augmente de vitesse à chaque rebond
* La balle prends la couleur du dernier joueur qui l'a touché
* La balle devient dorée après X nombres de rebond et redevient normale après X rebond 
* Sortir une balle dorée fait gagner 5 points
* Le match se termine si un joueur atteint les 20 points

## Technologies

Jeu développé en Javascript avec Phaser comme moteur.