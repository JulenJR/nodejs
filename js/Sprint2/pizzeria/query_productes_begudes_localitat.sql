-- Llista quants productes de tipus “Begudes”. s'han venut en una determinada localitat.

SELECT * FROM producte p
INNER JOIN botiga b
ON p.producteKind = 'beguda'
AND b.localitat = 'localitat1';
