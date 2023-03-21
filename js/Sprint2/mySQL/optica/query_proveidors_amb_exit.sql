-- Llista els diferents proveïdors que han subministrat ulleres venudes amb èxit per l'òptica.
SELECT DISTINCT p.ID_proveidor, p.nom 
FROM proveidor p
INNER JOIN ulleres u 
ON u.ID_proveidor = p.ID_proveidor
INNER JOIN vendes v 
ON v.ID_ulleres = u.ID_ulleres; 