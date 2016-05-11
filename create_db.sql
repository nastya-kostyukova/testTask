-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='TRADITIONAL,ALLOW_INVALID_DATES';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema testDb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema testDb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `testDb` DEFAULT CHARACTER SET latin1 ;
USE `testDb` ;

-- -----------------------------------------------------
-- Table `testDb`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `testDb`.`user` (
  `id` INT(11) NOT NULL AUTO_INCREMENT,
  `firstName` VARCHAR(32) NOT NULL,
  `lastName` VARCHAR(32) NULL DEFAULT NULL,
  `image` BLOB NULL DEFAULT NULL,
  `pdf` BLOB NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = latin1;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
