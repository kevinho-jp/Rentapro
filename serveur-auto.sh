#!/data/data/com.termux/files/usr/bin/sh
while true; do
    echo "🚀 Démarrage du serveur..."
    http-server -p 8080
    echo "⚠️ Serveur arrêté. Relance dans 5 secondes..."
    sleep 5
done
