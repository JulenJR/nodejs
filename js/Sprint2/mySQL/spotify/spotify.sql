SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema spotify
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `spotify` DEFAULT CHARACTER SET utf8 ;
USE `spotify` ;

-- -----------------------------------------------------
-- Table `spotify`.`usuari`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`usuari` ;

CREATE TABLE IF NOT EXISTS `spotify`.`usuari` (
  `id_usuari` INT NOT NULL,
  `user_tipus` VARCHAR(45) NULL,
  `correuElectronic` VARCHAR(45) NULL,
  `nomUsuari` VARCHAR(45) NULL,
  `contrasenya` VARCHAR(45) NULL,
  `dataNaixement` DATE NULL,
  `genere` VARCHAR(45) NULL,
  `pais` VARCHAR(45) NULL,
  `codiPostal` INT NULL,
  PRIMARY KEY (`id_usuari`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`subscripcions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`subscripcions` ;

CREATE TABLE IF NOT EXISTS `spotify`.`subscripcions` (
  `id_subscripcions` INT NOT NULL,
  `dataInici` DATE NULL,
  `dataRenovacio` DATE NULL,
  `pagament` VARCHAR(45) NULL,
  `subscripcionscol` VARCHAR(45) NULL,
  `id_usuari` INT NOT NULL,
  PRIMARY KEY (`id_subscripcions`),
  INDEX `fk_subscripcions_usuari_idx` (`id_usuari` ASC) VISIBLE,
  CONSTRAINT `fk_subscripcions_usuari`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `spotify`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`pagament`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`pagament` ;

CREATE TABLE IF NOT EXISTS `spotify`.`pagament` (
  `id_pagament` INT NOT NULL,
  `dataPagament` DATE NULL,
  `total` DOUBLE NULL,
  `id_subscripcions` INT NOT NULL,
  PRIMARY KEY (`id_pagament`),
  INDEX `fk_pagament_subscripcions1_idx` (`id_subscripcions` ASC) VISIBLE,
  CONSTRAINT `fk_pagament_subscripcions1`
    FOREIGN KEY (`id_subscripcions`)
    REFERENCES `spotify`.`subscripcions` (`id_subscripcions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`targeta_credit`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`targeta_credit` ;

CREATE TABLE IF NOT EXISTS `spotify`.`targeta_credit` (
  `id_targeta_credit` INT NOT NULL,
  `numeroDeTargeta` INT NULL,
  `dataCaducitat` DATE NULL,
  `codiSeguretat` INT NULL,
  `id_subscripcions` INT NOT NULL,
  PRIMARY KEY (`id_targeta_credit`),
  INDEX `fk_targeta_credit_subscripcions1_idx` (`id_subscripcions` ASC) VISIBLE,
  CONSTRAINT `fk_targeta_credit_subscripcions1`
    FOREIGN KEY (`id_subscripcions`)
    REFERENCES `spotify`.`subscripcions` (`id_subscripcions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`paypal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`paypal` ;

CREATE TABLE IF NOT EXISTS `spotify`.`paypal` (
  `id_paypal` INT NOT NULL,
  `nomUsuariDePaypal` VARCHAR(45) NULL,
  `id_subscripcions` INT NOT NULL,
  PRIMARY KEY (`id_paypal`),
  INDEX `fk_paypal_subscripcions1_idx` (`id_subscripcions` ASC) VISIBLE,
  CONSTRAINT `fk_paypal_subscripcions1`
    FOREIGN KEY (`id_subscripcions`)
    REFERENCES `spotify`.`subscripcions` (`id_subscripcions`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`artista`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`artista` ;

CREATE TABLE IF NOT EXISTS `spotify`.`artista` (
  `id_artista` INT NOT NULL,
  `nomArtista` VARCHAR(45) NULL,
  PRIMARY KEY (`id_artista`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`canço`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`canço` ;

CREATE TABLE IF NOT EXISTS `spotify`.`canço` (
  `id_canço` INT NOT NULL,
  `nomCanço` VARCHAR(45) NULL,
  `durada` TIME NULL,
  `reproduccions` INT NULL,
  PRIMARY KEY (`id_canço`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`albums`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`albums` ;

CREATE TABLE IF NOT EXISTS `spotify`.`albums` (
  `id_albums` INT NOT NULL,
  `nomAlbum` VARCHAR(45) NULL,
  `dataPublicacio` DATE NULL,
  `id_artista` INT NOT NULL,
  `id_canço` INT NOT NULL,
  PRIMARY KEY (`id_albums`),
  INDEX `fk_albums_artista1_idx` (`id_artista` ASC) VISIBLE,
  INDEX `fk_albums_canço1_idx` (`id_canço` ASC) VISIBLE,
  CONSTRAINT `fk_albums_artista1`
    FOREIGN KEY (`id_artista`)
    REFERENCES `spotify`.`artista` (`id_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_albums_canço1`
    FOREIGN KEY (`id_canço`)
    REFERENCES `spotify`.`canço` (`id_canço`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`album_favorit_by_user`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`album_favorit_by_user` ;

CREATE TABLE IF NOT EXISTS `spotify`.`album_favorit_by_user` (
  `id_usuari` INT NOT NULL,
  `id_albums` INT NOT NULL,
  PRIMARY KEY (`id_usuari`, `id_albums`),
  INDEX `fk_album_favorit_by_user_albums1_idx` (`id_albums` ASC) VISIBLE,
  CONSTRAINT `fk_album_favorit_by_user_usuari1`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `spotify`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_album_favorit_by_user_albums1`
    FOREIGN KEY (`id_albums`)
    REFERENCES `spotify`.`albums` (`id_albums`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`user_follow_artista`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`user_follow_artista` ;

CREATE TABLE IF NOT EXISTS `spotify`.`user_follow_artista` (
  `id_usuari` INT NOT NULL,
  `id_artista` INT NOT NULL,
  INDEX `fk_user_follow_artista_usuari1_idx` (`id_usuari` ASC) VISIBLE,
  PRIMARY KEY (`id_artista`, `id_usuari`),
  CONSTRAINT `fk_user_follow_artista_usuari1`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `spotify`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_follow_artista_artista1`
    FOREIGN KEY (`id_artista`)
    REFERENCES `spotify`.`artista` (`id_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`artista_recom`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`artista_recom` ;

CREATE TABLE IF NOT EXISTS `spotify`.`artista_recom` (
  `id_artista_follow` INT NOT NULL,
  `id_artista_relacionat` INT NOT NULL,
  PRIMARY KEY (`id_artista_relacionat`, `id_artista_follow`),
  CONSTRAINT `fk_artista_recom_artista1`
    FOREIGN KEY (`id_artista_follow`)
    REFERENCES `spotify`.`artista` (`id_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_artista_recom_user_follow_artista1`
    FOREIGN KEY (`id_artista_relacionat`)
    REFERENCES `spotify`.`user_follow_artista` (`id_artista`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`playlist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`playlist` ;

CREATE TABLE IF NOT EXISTS `spotify`.`playlist` (
  `id_playlist` INT NOT NULL,
  `nomPlaylist` VARCHAR(45) NULL,
  `numerodeCançons` INT NULL,
  `dataCreacioPlaylist` DATE NULL,
  `dataEliminacioPlaylist` DATE NULL,
  `tipusPlaylist` VARCHAR(45) NULL,
  `id_usuari` INT NOT NULL,
  PRIMARY KEY (`id_playlist`),
  INDEX `fk_playlist_usuari1_idx` (`id_usuari` ASC) VISIBLE,
  CONSTRAINT `fk_playlist_usuari1`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `spotify`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`user_mods_playlist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`user_mods_playlist` ;

CREATE TABLE IF NOT EXISTS `spotify`.`user_mods_playlist` (
  `dataMod` DATE NULL,
  `id_usuari` INT NOT NULL,
  `canço_id_canço` INT NOT NULL,
  `id_playlist` INT NOT NULL,
  PRIMARY KEY (`id_usuari`, `canço_id_canço`, `id_playlist`),
  INDEX `fk_user_mods_playlist_canço1_idx` (`canço_id_canço` ASC) VISIBLE,
  INDEX `fk_user_mods_playlist_playlist1_idx` (`id_playlist` ASC) VISIBLE,
  CONSTRAINT `fk_user_mods_playlist_usuari1`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `spotify`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_mods_playlist_canço1`
    FOREIGN KEY (`canço_id_canço`)
    REFERENCES `spotify`.`canço` (`id_canço`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_mods_playlist_playlist1`
    FOREIGN KEY (`id_playlist`)
    REFERENCES `spotify`.`playlist` (`id_playlist`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`user_delete_playlist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`user_delete_playlist` ;

CREATE TABLE IF NOT EXISTS `spotify`.`user_delete_playlist` (
  `dataEliminacio` DATE NULL,
  `id_playlist` INT NOT NULL,
  `id_usuari` INT NOT NULL,
  PRIMARY KEY (`id_playlist`, `id_usuari`),
  INDEX `fk_user_delete_playlist_playlist2_idx` (`id_usuari` ASC) VISIBLE,
  CONSTRAINT `fk_user_delete_playlist_playlist1`
    FOREIGN KEY (`id_playlist`)
    REFERENCES `spotify`.`playlist` (`id_playlist`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_delete_playlist_playlist2`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `spotify`.`playlist` (`id_playlist`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `spotify`.`user_fav_canço`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `spotify`.`user_fav_canço` ;

CREATE TABLE IF NOT EXISTS `spotify`.`user_fav_canço` (
  `id_usuari` INT NOT NULL,
  `id_canço` INT NOT NULL,
  PRIMARY KEY (`id_usuari`, `id_canço`),
  INDEX `fk_user_fav_canço_canço1_idx` (`id_canço` ASC) VISIBLE,
  CONSTRAINT `fk_user_fav_canço_usuari1`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `spotify`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_fav_canço_canço1`
    FOREIGN KEY (`id_canço`)
    REFERENCES `spotify`.`canço` (`id_canço`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
