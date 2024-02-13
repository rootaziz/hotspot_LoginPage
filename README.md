# hotspot_LoginPage

 # Hotspot Captif Amélioré et Personnalisé de MikroTik

Ce dépôt contient un portail captif amélioré et personnalisé pour les hotspots MikroTik,
offrant une expérience utilisateur améliorée et des fonctionnalités de personnalisation avancées.

## Introduction

Le portail captif est une page Web à laquelle les utilisateurs sont redirigés 
lorsqu'ils tentent d'accéder à Internet via un réseau Wi-Fi géré par un routeur MikroTik.
Ce projet vise à fournir une interface de connexion conviviale et professionnelle,
tout en offrant une flexibilité pour personnaliser l'apparence et le comportement du portail captif.

## Fonctionnalités

- **Interface Utilisateur Intuitive**: La page de connexion est conçue pour être facile à utiliser,
-  avec des champs de saisie clairs et des instructions simples pour les utilisateurs.

- **Personnalisation Avancée**: Vous pouvez personnaliser le style,
-  les couleurs et le contenu de la page de connexion pour correspondre à l'identité
-  visuelle de votre entreprise ou de votre réseau.

- **Gestion des Sessions Utilisateur**: Le portail captif intègre une fonctionnalité de gestion
-  des sessions utilisateur, permettant de limiter la durée d'accès à Internet pour chaque utilisateur.

- **Gestion des Erreurs et des Redirections**: Des pages d'erreur personnalisées sont
-  fournies pour guider les utilisateurs en cas de problème de connexion,
-  et des redirections peuvent être configurées pour diriger les utilisateurs
-   vers des pages spécifiques après la connexion.

## Contenu du Projet

Le projet est organisé comme suit :

- `alogin.html`,
-  `api.json`,
-  `commun.html`,
-  `error.html`,
-  `errors.txt`,
-  `favicon.ico`,
-   `login.html`,
-   `logout.html`,
-   `md5.js`,
-   `radvert.html`,
-   `README.md`,
-   `redirect.html`,
-   `rlogin.html`,
-   `status.html`

 Fichiers HTML et JavaScript nécessaires pour le portail captif.

- `css/`: Dossier contenant les fichiers CSS pour le style et la mise en page de la page de connexion.

- `img/`: Dossier contenant les images utilisées sur la page de connexion.

- `js/`: Dossier contenant les scripts JavaScript pour les fonctionnalités dynamiques de la page de connexion.

- `xml/`: Dossier contenant des fichiers XML utilisés par le portail captif.

## Utilisation

1. **Configuration Initiale**:
   - Clonez ce dépôt ou téléchargez les fichiers nécessaires sur votre serveur.
   - Personnalisez les fichiers HTML, CSS et JavaScript selon les besoins spécifiques de votre réseau.

2. **Intégration avec MikroTik**:
   - Configurez votre routeur MikroTik pour rediriger le trafic vers la page de connexion personnalisée.
   - Intégrez les fichiers personnalisés dans votre configuration MikroTik pour remplacer le portail captif par défaut.

3. **Personnalisation Avancée**:
   - Explorez les options de personnalisation fournies dans les fichiers
   -  HTML,
   -  CSS et
   -  JavaScript :
 pour adapter le portail captif à vos besoins spécifiques.

## Contributions

Les contributions sont les bienvenues !
Si vous avez des améliorations à apporter au portail captif ou des idées pour de nouvelles fonctionnalités,
n'hésitez pas à ouvrir une issue ou à soumettre une pull request.

## Licence

Ce projet est sous licence [MIT](LICENSE).

