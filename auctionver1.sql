-- MySQL dump 10.13  Distrib 8.0.18, for Win64 (x86_64)
--
-- Host: localhost    Database: auction
-- ------------------------------------------------------
-- Server version	5.7.28-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `loai_member`
--

DROP TABLE IF EXISTS `loai_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loai_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ten_loai` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `loai_member`
--

LOCK TABLES `loai_member` WRITE;
/*!40000 ALTER TABLE `loai_member` DISABLE KEYS */;
INSERT INTO `loai_member` VALUES (1,'bidder'),(2,'seller'),(3,'admin');
/*!40000 ALTER TABLE `loai_member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `member`
--

DROP TABLE IF EXISTS `member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `member` (
  `f_Username` varchar(50) NOT NULL,
  `f_Password` varchar(20000) NOT NULL,
  `f_ID` int(11) NOT NULL AUTO_INCREMENT,
  `f_Name` varchar(100) DEFAULT NULL,
  `f_Email` varchar(100) DEFAULT NULL,
  `Diem` float DEFAULT NULL,
  `ID_loai_member` int(11) DEFAULT '1',
  `ViTien` float DEFAULT NULL,
  `f_GioiTinh` varchar(10) DEFAULT NULL,
  `f_DOB` date DEFAULT NULL,
  `f_Diachi` varchar(700) DEFAULT NULL,
  PRIMARY KEY (`f_ID`),
  UNIQUE KEY `f_Username_UNIQUE` (`f_Username`),
  KEY `FK_member_loai_member_idx` (`ID_loai_member`),
  CONSTRAINT `FK_member_loai_member` FOREIGN KEY (`ID_loai_member`) REFERENCES `loai_member` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES ('hai','$2a$10$uDNJy6Imn1jpNd/vfjXt4OhI2G.GPWGyfC4S0MHNrMRSVEvNdPzTy',14,'LÊ QUANG HẢI','lequanghai540@gmail.com',NULL,2,NULL,'Nam','2019-12-01','ktx khu B Đại Học Quốc Gia tp Hồ Chí Minh, linh trung, Thủ Đức'),('trinh','$2a$10$Bim57fLr9u3suuQFkrQ4..JDHmnjJktvWneSRtYKJ7bErI42w8./y',16,'Phạm nguyễn tuyết trinh','lequanghai540@gmail.com',NULL,1,NULL,'Nữ','2019-12-16','ktx khu B Đại Học Quốc Gia tp Hồ Chí Minh, linh trung, Thủ Đức');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-12-20 21:30:01
