# Der Frömmigkeitskompass – kompass.thomasloewen.de

| Adresse | Datei |
|---|---|
| kompass.thomasloewen.de | `index.html` (der Test) |
| kompass.thomasloewen.de/leiter | `leiter/index.html` (Gruppenleitung mit PIN und Live-Kompass) |
| kompass.thomasloewen.de/beispiel | `beispiel/index.html` (Beispiel-Gruppenergebnis mit erfundenen Daten) |

Weitere Dateien: `gruppe.js` (Firebase-Verbindung, bereits eingetragen), `CNAME` (für die Subdomain),
`firestore.rules` (wird in Firebase eingefügt, nicht gebraucht auf der Seite) und `fonts/` (Schriften, liegen bei).

## 1. Firebase-Regeln (einmalig)
Firebase-Konsole → Firestore Database → Regeln → den kompletten Inhalt von `firestore.rules` einfügen → Veröffentlichen.
Die Datei enthält die Regeln des Einfluss-Tests unverändert plus den Teil für den Kompass.

## 2. GitHub
1. Neues Repository, z. B. `kompass`.
2. (Der Ordner `fonts/` ist schon enthalten.)
3. Alles hochladen, die Ordnerstruktur muss erhalten bleiben (`leiter/` und `beispiel/` als Unterordner).
4. Settings → Pages → Source: Deploy from a branch, Branch `main`, Ordner `/ (root)`.
5. Custom domain: `kompass.thomasloewen.de` (steht schon in der Datei `CNAME`).

## 3. IONOS
1. Domains & SSL → thomasloewen.de → DNS.
2. Record hinzufügen → CNAME: Hostname `kompass`, zeigt auf `<dein-github-name>.github.io`.
3. Falls es für `kompass` schon A- oder AAAA-Einträge gibt, diese löschen.
4. Nach einigen Minuten bis Stunden in GitHub unter Settings → Pages „Enforce HTTPS“ aktivieren.
