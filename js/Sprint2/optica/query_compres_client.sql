-- Llista el total de compres d’un client/a.
SELECT * FROM `vendes` v
JOIN `client` c ON v.ID_client = c.ID_client
WHERE v.ID_client = 1;




