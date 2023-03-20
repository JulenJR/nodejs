select nombre from producto;
select nombre, precio from producto;
select * from producto;
alter table producto add column dolars double; update producto set dolars = precio * 1.06; select * FROM producto;
alter table producto rename column precio to euros;
update producto set nombre = upper(nombre);
update producto set nombre =lower(nombre);
select nombre, left(upper(nombre), 2)as fabriccante from tienda.fabricante;
select nombre, round(euros) from tienda.producto;
select nombre, truncate(euros, 0) from tienda.producto;
select p.codigo_fabricante from producto p inner join fabricante f where p.codigo_fabricante = f.codigo; 
select distinct codigo_fabricante from producto p inner join fabricante f where p.codigo_fabricante = f.codigo; 
select nombre from fabricante order by nombre;
select nombre from fabricante order by nombre desc;
select nombre, euros from producto order by nombre, euros desc;
select * from fabricante limit 5;
select * from fabricante limit 3, 2;
select nombre, euros from producto order by euros limit 1;
select nombre, euros from producto order by euros desc limit 1;
select nombre, codigo_fabricante from producto p where p.codigo_fabricante = 2;
select p.nombre, p.euros, f.nombre as nombre_fabricante from producto p inner join fabricante f where p.codigo_fabricante = f.codigo;
select p.nombre, p.euros, f.nombre as nombre_fabricante from producto p inner join fabricante f where p.codigo_fabricante = f.codigo order by f.nombre;
select p.codigo, p.nombre, p.codigo_fabricante, f.nombre from producto p inner join fabricante f where p.codigo_fabricante = f.codigo;
select p.nombre, p.euros, f.nombre as nombre_fabricante from producto p inner join fabricante f where p.codigo_fabricante = f.codigo order by p.euros limit 1;
select p.nombre, p.euros, f.nombre as nombre_fabricante from producto p inner join fabricante f where p.codigo_fabricante = f.codigo order by p.euros desc limit 1;
select p.codigo, p.nombre, p.euros, f.nombre as nombre_fabricante from producto p inner join fabricante f on p.codigo_fabricante = f.codigo where f.nombre ='Lenovo';
select p.codigo, p.nombre, p.euros, f.nombre as nombre_fabricante from producto p inner join fabricante f on p.codigo_fabricante = f.codigo where f.nombre ='Crucial' and p.euros > 200;
select p.codigo, p.nombre, p.euros, f.nombre as nombre_fabricante from producto p inner join fabricante f on p.codigo_fabricante = f.codigo where f.nombre ='Asus' or f.nombre ='Hewlett-Packard' or f.nombre ='Seagate';
select p.codigo, p.nombre, p.euros, f.nombre as nombre_fabricante from producto p inner join fabricante f on p.codigo_fabricante = f.codigo where f.nombre in ('Asus','Hewlett-Packard','Seagate');
select p.nombre, p.euros, f.nombre as nombre_fabricante from producto p inner join fabricante f on p.codigo_fabricante = f.codigo where right(f.nombre, 1) = 'e';
select p.nombre, p.euros, f.nombre as nombre_fabricante from producto p inner join fabricante f on p.codigo_fabricante = f.codigo where f.nombre like '%w%';
select p.nombre, p.euros, f.nombre as nombre_fabricante from producto p inner join fabricante f on p.codigo_fabricante = f.codigo where p.euros >= 180 order by p.euros desc , p.nombre;
select distinct f.codigo, f.nombre from fabricante f inner join producto p where f.codigo = p.codigo_fabricante;
select f.codigo, f.nombre, p.nombre as producto_nombre from fabricante f left join producto p on f.codigo = p.codigo_fabricante;
select * from fabricante f where f.codigo not in (select distinct producto.codigo_fabricante from producto);
