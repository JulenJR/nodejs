SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema optica
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `optica` DEFAULT CHARACTER SET utf8 ;
USE `optica` ;

-- -----------------------------------------------------
-- Table `optica`.`Proveidor`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `optica`.`Proveidor` (
  `ID_proveidor` INT NOT NULL,
  `nom` VARCHAR(45) NULL,
  `adreça` VARCHAR(45) NULL,
  `numero` VARCHAR(45) NULL,
  `pis` INT NULL,
  `porta` INT NULL,
  `ciutat` VARCHAR(45) NULL,
  `codi_postal` INT NULL,
  `pais` VARCHAR(45) NULL,
  `fax` INT NULL,
  `NIF` VARCHAR(45) NULL,
  `telefon` INT NULL,
  PRIMARY KEY (`ID_proveidor`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `optica`.`Ulleres`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `optica`.`Ulleres` (
  `ID_ulleres` INT NOT NULL,
  `ID_proveidor` INT NOT NULL,
  `marca` VARCHAR(45) NULL,
  `graduacioEsquerre` FLOAT NULL,
  `graduacioDreta` FLOAT NULL,
  `muntura` VARCHAR(45) NULL,
  `colorVidreEsquerre` VARCHAR(45) NULL,
  `colorVidreDret` VARCHAR(45) NULL,
  `preu` FLOAT NULL,
  PRIMARY KEY (`ID_ulleres`),
  INDEX `fk_Ulleres_Proveidor_idx` (`ID_proveidor` ASC) VISIBLE,
  CONSTRAINT `fk_Ulleres_Proveidor`
    FOREIGN KEY (`ID_proveidor`)
    REFERENCES `optica`.`Proveidor` (`ID_proveidor`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `optica`.`Empleat`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `optica`.`Empleat` (
  `ID_empelat` INT NOT NULL,
  `nom` VARCHAR(45) NULL,
  PRIMARY KEY (`ID_empelat`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `optica`.`Client`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `optica`.`Client` (
  `ID_client` INT NOT NULL,
  `adreça` VARCHAR(45) NULL,
  `telefon` INT NULL,
  `correu` VARCHAR(45) NULL,
  `nom` VARCHAR(45) NULL,
  PRIMARY KEY (`ID_client`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `optica`.`Vendes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `optica`.`Vendes` (
  `ID_vendes` INT NOT NULL,
  `ID_ulleres` INT NOT NULL,
  `Empleat_ID_empelat` INT NOT NULL,
  `ID_client` INT NOT NULL,
  `data_venda` DATE NULL,
  PRIMARY KEY (`ID_vendes`),
  INDEX `fk_Vendes_Ulleres1_idx` (`ID_ulleres` ASC) VISIBLE,
  INDEX `fk_Vendes_Empleat1_idx` (`Empleat_ID_empelat` ASC) VISIBLE,
  INDEX `fk_Vendes_Client1_idx` (`ID_client` ASC) VISIBLE,
  CONSTRAINT `fk_Vendes_Ulleres1`
    FOREIGN KEY (`ID_ulleres`)
    REFERENCES `optica`.`Ulleres` (`ID_ulleres`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vendes_Empleat1`
    FOREIGN KEY (`Empleat_ID_empelat`)
    REFERENCES `optica`.`Empleat` (`ID_empelat`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Vendes_Client1`
    FOREIGN KEY (`ID_client`)
    REFERENCES `optica`.`Client` (`ID_client`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;

START TRANSACTION;
USE `optica`;
INSERT IGNORE INTO `Proveidor` 
VALUES  (1, 'prov1', 'adrProv1', '1', 1, 1, 'Barcelona', 011001, 'a', 123456789, '12345678e', 123456789),
		(2, 'prov2', 'adrProv2', '2', 2, 2, 'Fracture', 022002, 'b', 222222122, '22222222a', 222222222),
		(3, 'prov3', 'adrProv3', '3', 3, 3, 'ciut3', 033003, 'c', 343333333, '33333333r', 333333333);

COMMIT;


-- -----------------------------------------------------
-- Data for table `optica`.`Ulleres`
-- -----------------------------------------------------
START TRANSACTION;
USE `optica`;
INSERT IGNORE INTO `Ulleres`
VALUES 	(1, 1, 'marca1', 325, 320, 'metalica', 'negre', 'negre', 159),
		(2, 2, 'marca2', 200, 200, 'pasta', 'verd', 'verd', 99),
		(3, 2, 'marca3', 900, 890, 'flotant', 'blau', 'blau', 3750);

COMMIT;


-- -----------------------------------------------------
-- Data for table `optica`.`Empleat`
-- -----------------------------------------------------
START TRANSACTION;
USE `optica`;
INSERT IGNORE INTO `Empleat`
VALUES 	(1, 'nom1'),
		(2, 'nom2'),
		(3, 'nom3');

COMMIT;


-- -----------------------------------------------------
-- Data for table `optica`.`Client`
-- -----------------------------------------------------
START TRANSACTION;
USE `optica`;
INSERT IGNORE INTO `Client`
VALUES 	(1, 'adreça del client 1', 111111111, '1@hotmail.com', 'client1'),
		(2, 'adreça del cleint 2', 222222222, '2@outlook.com', 'client2'),
		(3, 'adreça cleint 3', 333333333, '3@gmail.es', 'client3');

COMMIT;


-- -----------------------------------------------------
-- Data for table `optica`.`Vendes`
-- -----------------------------------------------------
START TRANSACTION;
USE `optica`;
INSERT IGNORE INTO `Vendes`
VALUES 	(1, 1, 1, 1, '17/02/1988'),
		(2, 2, 2, 2, '03/03/2003'),
		(3, 3, 3, 3, '04/04/1994');

COMMIT;