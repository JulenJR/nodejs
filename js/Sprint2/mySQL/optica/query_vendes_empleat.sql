-- Llista les diferents ulleres que ha venut un empleat durant un any.
SELECT * FROM vendes 
WHERE YEAR(data_venda) = 2003
AND Empleat_ID_empelat = 2;