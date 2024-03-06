Title: Carosello Array di Oggetti
===
**Consegna:**
Dato un array di oggetti letterali con:
 - url dell’immagine
 - titolo
 - descrizione
Creare un carosello come nella foto allegata o come il vostro già realizzato.
**Milestone 0:**
Come nel primo carosello realizzato, focalizziamoci prima sulla creazione del markup statico: costruiamo il container e inseriamo l’immagine grande in modo da poter stilare lo slider.
**Milestone 1:**
Ora rimuoviamo i contenuti statici e usiamo l’array di oggetti letterali per popolare dinamicamente il carosello.
****
Al click dell’utente sulle frecce verso sinistra o destra, l’immagine attiva diventerà visibile e dovremo aggiungervi titolo e testo.
**Milestone 2:**
Aggiungere il **ciclo infinito** del carosello.** Ovvero se la miniatura attiva è la prima e l’utente clicca la freccia verso destra, la miniatura che deve attivarsi sarà l’ultima e viceversa per l’ultima miniatura se l’utente clicca la freccia verso sinistra.
**BONUS 1:**
Aggiungere le thumbnails (sottoforma di miniatura) ed al click attivare l’immagine corrispondente.
**BONUS 2:**
Aggiungere funzionalità di autoplay: dopo un certo periodo di tempo (3 secondi) l’immagine attiva dovrà cambiare alla successiva.
**BONUS 3:**
Aggiungere bottoni di start/stop e di inversione del meccanismo di autoplay.

# SVOLGIMENTO 
1. tramite un ciclo foreach stampo in pagina negli elementi corrispondenti già richiamati, gli elementi delle immagini. 
2. richiamo gli elementi creati nel ciclo foreach precedente e aggingo le classi active
3. creo gli elementi 'bottoni' 
4. creo, alla fine della pagina, le funzioni per il il movimento dei tasti e le richiamo negli addEventListener dei btn precedentementi creati.

# BONUS 1
1.

# BONUS 2
1.

# BONUS 3
1.