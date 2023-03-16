select nombre from producto;
select nombre, precio from producto;
select * from producto;
alter table producto add column dolars double; update producto set dolars = precio * 1.06; select * FROM producto;
alter table producto rename column precio to euros;
update producto set nombre = upper(nombre);
update producto set nombre =lower(nombre);
