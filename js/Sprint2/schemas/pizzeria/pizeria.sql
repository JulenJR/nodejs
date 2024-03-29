SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema pizzeria
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `pizzeria` DEFAULT CHARACTER SET utf8 ;
USE `pizzeria` ;

-- -----------------------------------------------------
-- Table `pizzeria`.`cleint`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pizzeria`.`cleint` ;

CREATE TABLE IF NOT EXISTS `pizzeria`.`cleint` (
  `ID_client` INT NOT NULL,
  `nom` VARCHAR(45) NULL,
  `cognoms` VARCHAR(45) NULL,
  `adreça` VARCHAR(256) NULL,
  `codiPostal` VARCHAR(45) NULL,
  `localitat` VARCHAR(45) NULL,
  `provincia` VARCHAR(45) NULL,
  `telefon` INT NULL,
  PRIMARY KEY (`ID_client`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pizzeria`.`botiga`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pizzeria`.`botiga` ;

CREATE TABLE IF NOT EXISTS `pizzeria`.`botiga` (
  `ID_botiga` INT NOT NULL,
  `adreça` VARCHAR(45) NULL,
  `codiPostal` INT NULL,
  `localitat` VARCHAR(45) NULL,
  `provincia` VARCHAR(45) NULL,
  PRIMARY KEY (`ID_botiga`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pizzeria`.`empleat`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pizzeria`.`empleat` ;

CREATE TABLE IF NOT EXISTS `pizzeria`.`empleat` (
  `ID_empleat` INT NOT NULL,
  `nom` VARCHAR(45) NULL,
  `cognoms` VARCHAR(45) NULL,
  `NIF` VARCHAR(45) NULL,
  `telefon` INT NULL,
  `ID_botiga` INT NOT NULL,
  PRIMARY KEY (`ID_empleat`),
  INDEX `fk_empleat_botiga1_idx` (`ID_botiga` ASC) VISIBLE,
  CONSTRAINT `fk_empleat_botiga1`
    FOREIGN KEY (`ID_botiga`)
    REFERENCES `pizzeria`.`botiga` (`ID_botiga`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pizzeria`.`pizzaCategoria`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pizzeria`.`pizzaCategoria` ;

CREATE TABLE IF NOT EXISTS `pizzeria`.`pizzaCategoria` (
  `ID_pizzaCategoria` INT NOT NULL,
  `categoria` VARCHAR(45) NULL,
  PRIMARY KEY (`ID_pizzaCategoria`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pizzeria`.`producte`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pizzeria`.`producte` ;

CREATE TABLE IF NOT EXISTS `pizzeria`.`producte` (
  `ID_producte` INT NOT NULL,
  `producteKind` VARCHAR(45) NULL,
  `nom` VARCHAR(45) NULL,
  `descripcio` VARCHAR(256) NULL,
  `img` VARCHAR(45) NULL,
  `preu` FLOAT NULL,
  `ID_pizzaCategoria` INT NOT NULL,
  PRIMARY KEY (`ID_producte`),
  INDEX `fk_producte_pizzaCategoria1_idx` (`ID_pizzaCategoria` ASC) VISIBLE,
  CONSTRAINT `fk_producte_pizzaCategoria1`
    FOREIGN KEY (`ID_pizzaCategoria`)
    REFERENCES `pizzeria`.`pizzaCategoria` (`ID_pizzaCategoria`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `pizzeria`.`comanda`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `pizzeria`.`comanda` ;

CREATE TABLE IF NOT EXISTS `pizzeria`.`comanda` (
  `ID_comanda` INT NOT NULL,
  `data` DATETIME NULL,
  `tipusComanda` VARCHAR(45) NULL,
  `quantitat` INT NULL,
  `preu` FLOAT NULL,
  `ID_client` INT NOT NULL,
  `ID_botiga` INT NOT NULL,
  `ID_empleat` INT NOT NULL,
  `ID_producte` INT NOT NULL,
  PRIMARY KEY (`ID_comanda`),
  INDEX `fk_comanda_cleint_idx` (`ID_client` ASC) VISIBLE,
  INDEX `fk_comanda_botiga1_idx` (`ID_botiga` ASC) VISIBLE,
  INDEX `fk_comanda_empleat1_idx` (`ID_empleat` ASC) VISIBLE,
  INDEX `fk_comanda_producte1_idx` (`ID_producte` ASC) VISIBLE,
  CONSTRAINT `fk_comanda_cleint`
    FOREIGN KEY (`ID_client`)
    REFERENCES `pizzeria`.`cleint` (`ID_client`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comanda_botiga1`
    FOREIGN KEY (`ID_botiga`)
    REFERENCES `pizzeria`.`botiga` (`ID_botiga`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comanda_empleat1`
    FOREIGN KEY (`ID_empleat`)
    REFERENCES `pizzeria`.`empleat` (`ID_empleat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_comanda_producte1`
    FOREIGN KEY (`ID_producte`)
    REFERENCES `pizzeria`.`producte` (`ID_producte`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

-- -----------------------------------------------------
-- Data for table `pizzeria`.`cleint`
-- -----------------------------------------------------
START TRANSACTION;
USE `pizzeria`;
INSERT INTO `cleint`
	VALUES 	(1, 'nom 1', 'cognom 1', 'adreça 1', '011001', 'localitat 1', 'provincia 1', 111111111),
			(2, 'nom 2', 'cognom 2', 'adreça 2', '022002', 'localitat 2', 'provincia 1', 222222222),
			(3, 'nom 3', 'cognom 3', 'adreça 3', '033003', 'localitat 3', 'provincia 2', 333333333),
			(4, 'nom 4', 'cognom 4', 'adreça 4', '044004', 'localitat 4', 'provincia 2', 444444444),
			(5, 'nom 5', 'cognom 5', 'adreça 5', '055005', 'localitat 5', 'provincia 3', 555555555),
			(6, 'nom 6', 'cognom 6', 'adreça 6', '066006', 'localitat 6', 'provincia 3', 666666666);

COMMIT;


-- -----------------------------------------------------
-- Data for table `pizzeria`.`botiga`
-- -----------------------------------------------------
START TRANSACTION;
USE `pizzeria`;
INSERT INTO `botiga`
	VALUES 	(1, 'adreça 1', 011001, 'localitat1', 'provincia1'),
			(2, 'adreça 2', 022002, 'localitat2', 'provincia2'),
			(3, 'adreça 3', 033003, 'localitat3', 'provincia2'),
			(4, 'adreça 4', 044004, 'localitat4', 'provincia3');

COMMIT;


-- -----------------------------------------------------
-- Data for table `pizzeria`.`empleat`
-- -----------------------------------------------------
START TRANSACTION;
USE `pizzeria`;
INSERT INTO `empleat`
	VALUES 	(1, 'nomEmpleat1', 'cognomEmpleat1', '11111111w', 111111111, 1),
			(2, 'nomEmpleat2', 'cognomEmpleat2', '22222222r', 222222222, 1),
			(3, 'nomEmpleat3', 'cognomEmpleat3', '33333333u', 333333333, 2),
			(4, 'nomEmpleat4', 'cognomEmpleat4', '44444444p', 444444444, 2),
			(5, 'nomEmpleat5', 'cognomEmpleat5', '55555555e', 555555555, 3),
			(6, 'nomEmpleat6', 'cognomEmpleat6', '66666666z', 666666666, 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `pizzeria`.`pizzaCategoria`
-- -----------------------------------------------------
START TRANSACTION;
USE `pizzeria`;
INSERT INTO `pizzaCategoria`
	VALUES 	(1, 'categoria1'),
			(2, 'categoria2'),
			(3, 'categiria3');

COMMIT;


-- -----------------------------------------------------
-- Data for table `pizzeria`.`producte`
-- -----------------------------------------------------
START TRANSACTION;
USE `pizzeria`;
INSERT INTO `producte` 
	VALUES	(1, 'beguda', 'beguda1', 'descripcio del producte 1', 'img1', 123, 1),
			(2, 'pizza', 'pizza1', 'descripcio del producte 2', 'img2', 53, 1),
			(3, 'hamburguesa', 'hamburguesa1', 'descripcio del producte 3', 'img3', 12, 1),
			(4, 'beguda', 'beguda2', 'descripcio del producte 4', 'img4', 6, 2),
			(5, 'pizza', 'pizza2', 'descripcio del producte 5', 'img5', 534, 2),
			(6, 'hamburguesa', 'hamburguesa2', 'descripcio del producte 6', 'img6', 1, 2),
			(7, 'beguda', 'beguda3', 'descripcio del producte 7', 'img7', 4242, 3),
			(8, 'pizza', 'pizza3', 'descripcio del producte 8', 'img8', 555, 3),
			(9, 'hamburguesa', 'hamburguesa3', 'descripcio del producte 9', 'img9', 81, 3);

COMMIT;


-- -----------------------------------------------------
-- Data for table `pizzeria`.`comanda`
-- -----------------------------------------------------
START TRANSACTION;
USE `pizzeria`;
INSERT INTO `comanda`
	VALUES 	(1, '2001-01-21', 'domicili', 1, 33, 1, 1, 1, 1),
			(2, '2001-02-22', 'recollida', 2, 200, 1, 2, 1, 2),
			(3, '2001-03-23', 'recollida', 1, 21, 2, 1, 1, 3),
			(4, '2002-01-21', 'recollida', 4, 1, 3, 1, 1, 4),
			(5, '2002-02-22', 'domicili', 5, 55552, 4, 3, 1, 5),
			(6, '2003-03-23', 'recollida', 2, 1231, 5, 4, 2, 6),
			(7, '2004-01-21', 'recollida', 1, 535, 4, 4, 2, 7),
			(8, '2004-02-22', 'domicili', 3, 3333, 1, 3, 2, 8),
			(9, '2005-01-21', 'recollida', 1, 6567, 6, 2, 2, 9),
			(10, '2005-02-22', 'domicili', 7, 11, 1, 1, 2, 1);

COMMIT;

