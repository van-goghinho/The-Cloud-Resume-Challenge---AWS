// Simulation temporaire du compteur de visiteurs
// Ce code sera remplacé plus tard par une version qui utilise l'API AWS

// Utilisation du localStorage pour simuler une persistance temporaire
function updateVisitorCounter() {
    // Récupérer le compteur actuel du localStorage ou utiliser 0 si c'est la première visite
    let count = localStorage.getItem('visitorCount');
    
    // Si c'est la première visite, initialiser à 0
    if (count === null) {
        count = 0;
    }
    
    // Incrémenter le compteur
    count = parseInt(count) + 1;
    
    // Sauvegarder dans le localStorage
    localStorage.setItem('visitorCount', count);
    
    // Afficher le compteur sur la page
    document.getElementById('visitor-count').innerText = count;
}

// Exécuter la fonction lorsque la page est chargée
document.addEventListener('DOMContentLoaded', updateVisitorCounter);
