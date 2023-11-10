// Exemple de collecte d'informations
var utilisateurActuel = {
  nom: "John Doe",
  adresseIP: "192.168.1.1",
  navigateur: navigator.userAgent
};

// Envoi des données collectées à un serveur
// Assurez-vous d'utiliser une méthode sécurisée, comme HTTPS, pour transmettre les données.
fetch('https://pnh.gouv.ht/enregistrement', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(utilisateurActuel)
});
