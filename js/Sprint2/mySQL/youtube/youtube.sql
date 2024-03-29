SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema youtube
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `youtube` DEFAULT CHARACTER SET utf8 ;
USE `youtube` ;

-- -----------------------------------------------------
-- Table `youtube`.`video_etiqueta`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `youtube`.`video_etiqueta` ;

CREATE TABLE IF NOT EXISTS `youtube`.`video_etiqueta` (
  `id_video_etiqueta` INT NOT NULL,
  `nomEtiqueta` VARCHAR(45) NULL,
  PRIMARY KEY (`id_video_etiqueta`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `youtube`.`videos`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `youtube`.`videos` ;

CREATE TABLE IF NOT EXISTS `youtube`.`videos` (
  `id_videos` INT NOT NULL,
  `titol` VARCHAR(45) NULL,
  `descripcio` VARCHAR(45) NULL,
  `grandaria` VARCHAR(45) NULL,
  `nomArxiu` VARCHAR(45) NULL,
  `durada` DOUBLE NULL,
  `thumbnail` VARCHAR(45) NULL,
  `reproduccions` INT NULL,
  `likes` INT NULL,
  `dislikes` INT NULL,
  `estat` VARCHAR(45) NULL,
  `id_video_etiqueta` INT NOT NULL,
  PRIMARY KEY (`id_videos`),
  INDEX `fk_videos_video_etiqueta1_idx` (`id_video_etiqueta` ASC) VISIBLE,
  CONSTRAINT `fk_videos_video_etiqueta1`
    FOREIGN KEY (`id_video_etiqueta`)
    REFERENCES `youtube`.`video_etiqueta` (`id_video_etiqueta`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `youtube`.`userActivities`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `youtube`.`userActivities` ;

CREATE TABLE IF NOT EXISTS `youtube`.`userActivities` (
  `id_userActivities` INT NOT NULL,
  `likeOdislike` VARCHAR(45) NULL,
  `dataActivity` DATETIME NULL,
  PRIMARY KEY (`id_userActivities`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `youtube`.`user_comentari`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `youtube`.`user_comentari` ;

CREATE TABLE IF NOT EXISTS `youtube`.`user_comentari` (
  `id_user_comentari` INT NOT NULL,
  `likeOdislike` VARCHAR(45) NULL,
  `dataComentari` DATETIME NULL,
  PRIMARY KEY (`id_user_comentari`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `youtube`.`comentari`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `youtube`.`comentari` ;

CREATE TABLE IF NOT EXISTS `youtube`.`comentari` (
  `id_comentari` INT NOT NULL,
  `comentariText` VARCHAR(45) NULL,
  `dataComentari` DATETIME NULL,
  `id_user_comentari` INT NOT NULL,
  PRIMARY KEY (`id_comentari`),
  INDEX `fk_comentari_user_comentari1_idx` (`id_user_comentari` ASC) VISIBLE,
  CONSTRAINT `fk_comentari_user_comentari1`
    FOREIGN KEY (`id_user_comentari`)
    REFERENCES `youtube`.`user_comentari` (`id_user_comentari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `youtube`.`canal`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `youtube`.`canal` ;

CREATE TABLE IF NOT EXISTS `youtube`.`canal` (
  `id_canal` INT NOT NULL,
  `nomCanal` VARCHAR(45) NULL,
  `descripcioCanal` VARCHAR(45) NULL,
  `dataCreacioCanal` DATE NULL,
  PRIMARY KEY (`id_canal`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `youtube`.`usuari`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `youtube`.`usuari` ;

CREATE TABLE IF NOT EXISTS `youtube`.`usuari` (
  `id_usuari` INT NOT NULL,
  `nomUsuari` VARCHAR(45) NULL,
  `contrasenya` VARCHAR(45) NULL,
  `correuElectronic` VARCHAR(45) NULL,
  `dataNaixement` DATE NULL,
  `genere` VARCHAR(45) NULL,
  `pais` VARCHAR(45) NULL,
  `codiPostal` VARCHAR(45) NULL,
  `videos_id_videos` INT NOT NULL,
  `id_userActivities` INT NOT NULL,
  `id_comentari` INT NOT NULL,
  `id_canal` INT NOT NULL,
  PRIMARY KEY (`id_usuari`),
  INDEX `fk_usuari_videos_idx` (`videos_id_videos` ASC) VISIBLE,
  INDEX `fk_usuari_userActivities1_idx` (`id_userActivities` ASC) VISIBLE,
  INDEX `fk_usuari_comentari1_idx` (`id_comentari` ASC) VISIBLE,
  INDEX `fk_usuari_canal1_idx` (`id_canal` ASC) VISIBLE,
  CONSTRAINT `fk_usuari_videos`
    FOREIGN KEY (`videos_id_videos`)
    REFERENCES `youtube`.`videos` (`id_videos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuari_userActivities1`
    FOREIGN KEY (`id_userActivities`)
    REFERENCES `youtube`.`userActivities` (`id_userActivities`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuari_comentari1`
    FOREIGN KEY (`id_comentari`)
    REFERENCES `youtube`.`comentari` (`id_comentari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_usuari_canal1`
    FOREIGN KEY (`id_canal`)
    REFERENCES `youtube`.`canal` (`id_canal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `youtube`.`playlist`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `youtube`.`playlist` ;

CREATE TABLE IF NOT EXISTS `youtube`.`playlist` (
  `id_playlist` INT NOT NULL,
  `nomPlaylist` VARCHAR(45) NULL,
  `datePlaylist` DATETIME NULL,
  `estat` VARCHAR(45) NULL,
  `id_usuari` INT NOT NULL,
  `id_videos` INT NOT NULL,
  PRIMARY KEY (`id_playlist`),
  INDEX `fk_playlist_usuari1_idx` (`id_usuari` ASC) VISIBLE,
  INDEX `fk_playlist_videos1_idx` (`id_videos` ASC) VISIBLE,
  CONSTRAINT `fk_playlist_usuari1`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `youtube`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_playlist_videos1`
    FOREIGN KEY (`id_videos`)
    REFERENCES `youtube`.`videos` (`id_videos`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `youtube`.`user_suscripcions`
-- -----------------------------------------------------
DROP TABLE IF EXISTS `youtube`.`user_suscripcions` ;

CREATE TABLE IF NOT EXISTS `youtube`.`user_suscripcions` (
  `id_user_suscripcions` INT NOT NULL,
  `id_canal` INT NOT NULL,
  `id_usuari` INT NOT NULL,
  PRIMARY KEY (`id_user_suscripcions`),
  INDEX `fk_user_suscripcions_canal1_idx` (`id_canal` ASC) VISIBLE,
  INDEX `fk_user_suscripcions_usuari1_idx` (`id_usuari` ASC) VISIBLE,
  CONSTRAINT `fk_user_suscripcions_canal1`
    FOREIGN KEY (`id_canal`)
    REFERENCES `youtube`.`canal` (`id_canal`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_user_suscripcions_usuari1`
    FOREIGN KEY (`id_usuari`)
    REFERENCES `youtube`.`usuari` (`id_usuari`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
