#!/data/data/com.termux/files/usr/bin/sh
while true; do
    echo "🔌 Connexion tunnel..."
    ssh -R 80:localhost:8080 serveo.net
    echo "⚠️ Tunnel coupé. Reconnexion dans 10 secondes..."
    sleep 10
done
