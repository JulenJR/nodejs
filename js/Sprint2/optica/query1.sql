START TRANSACTION;
USE `optica`;
INSERT INTO `Proveidor`
VALUES  (1, 'prov1', 'adrProv1', '1', 1, 1, 'Barcelona', 011001, 'a', 123456789, '12345678e', 123456789),
		(2, 'prov2', 'adrProv2', '2', 2, 2, 'Fracture', 022002, 'b', 222222122, '22222222a', 222222222),
		(3, 'prov3', 'adrProv3', '3', 3, 3, 'ciut3', 033003, 'c', 343333333, '33333333r', 333333333);

COMMIT;


-- -----------------------------------------------------
-- Data for table `optica`.`Ulleres`
-- -----------------------------------------------------
START TRANSACTION;
USE `optica`;
INSERT INTO `Ulleres`
VALUES 	(1, 1, 'marca1', 325, 320, 'metalica', 'negre', 'negre', 159),
		(2, 2, 'marca2', 200, 200, 'pasta', 'verd', 'verd', 99),
		(3, 2, 'marca3', 900, 890, 'flotant', 'blau', 'blau', 3750);

COMMIT;


-- -----------------------------------------------------
-- Data for table `optica`.`Empleat`
-- -----------------------------------------------------
START TRANSACTION;
USE `optica`;
INSERT INTO `Empleat`
VALUES 	(1, 'nom1'),
		(2, 'nom2'),
		(3, 'nom3');

COMMIT;


-- -----------------------------------------------------
-- Data for table `optica`.`Client`
-- -----------------------------------------------------
START TRANSACTION;
USE `optica`;
INSERT INTO `Client`
VALUES 	(1, 'adreça del client 1', 111111111, '1@hotmail.com', 'client1'),
(2, 'adreça del cleint 2', 222222222, '2@outlook.com', 'client2'),
(3, 'adreça cleint 3', 333333333, '3@gmail.es', 'client3');

COMMIT;


-- -----------------------------------------------------
-- Data for table `optica`.`Vendes`
-- -----------------------------------------------------
START TRANSACTION;
USE `optica`;
INSERT INTO `Vendes`
VALUES 	(1, 1, 1, 1, '17/02/1988'),
		(2, 2, 2, 2, '03/03/2003'),
		(3, 3, 3, 3, '04/04/1994');

COMMIT;

