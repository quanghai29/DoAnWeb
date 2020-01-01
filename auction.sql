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
-- Table structure for table `evaluate`
--

DROP TABLE IF EXISTS `evaluate`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `evaluate` (
  `UserID` int(11) NOT NULL,
  `Point` int(11) DEFAULT NULL,
  `Comment` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`UserID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `evaluate`
--

LOCK TABLES `evaluate` WRITE;
/*!40000 ALTER TABLE `evaluate` DISABLE KEYS */;
/*!40000 ALTER TABLE `evaluate` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `favolist`
--

DROP TABLE IF EXISTS `favolist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `favolist` (
  `ProID` int(11) DEFAULT NULL,
  `UserID` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `favolist`
--

LOCK TABLES `favolist` WRITE;
/*!40000 ALTER TABLE `favolist` DISABLE KEYS */;
/*!40000 ALTER TABLE `favolist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `itemlist`
--

DROP TABLE IF EXISTS `itemlist`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `itemlist` (
  `ItemID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ItemName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `List` int(11) DEFAULT NULL,
  PRIMARY KEY (`ItemID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `itemlist`
--

LOCK TABLES `itemlist` WRITE;
/*!40000 ALTER TABLE `itemlist` DISABLE KEYS */;
INSERT INTO `itemlist` VALUES (1,'SamSung',1),(2,'Nokia',1),(3,'Xiaomi',1),(4,'Dell',2),(5,'Asus',2),(6,'Apple',2),(7,'Lenovo',2);
/*!40000 ALTER TABLE `itemlist` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `listcategory`
--

DROP TABLE IF EXISTS `listcategory`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `listcategory` (
  `ListID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ListName` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ListID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `listcategory`
--

LOCK TABLES `listcategory` WRITE;
/*!40000 ALTER TABLE `listcategory` DISABLE KEYS */;
INSERT INTO `listcategory` VALUES (1,'Điện thoại di động'),(2,'Máy tính xách tay'),(4,'Quần áo');
/*!40000 ALTER TABLE `listcategory` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `loai_member`
--

DROP TABLE IF EXISTS `loai_member`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `loai_member` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ten_loai` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
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
  PRIMARY KEY (`f_ID`) USING BTREE,
  UNIQUE KEY `f_Username_UNIQUE` (`f_Username`) USING BTREE,
  KEY `FK_member_loai_member_idx` (`ID_loai_member`) USING BTREE,
  CONSTRAINT `FK_member_loai_member` FOREIGN KEY (`ID_loai_member`) REFERENCES `loai_member` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8 ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `member`
--

LOCK TABLES `member` WRITE;
/*!40000 ALTER TABLE `member` DISABLE KEYS */;
INSERT INTO `member` VALUES ('hai','$2a$10$uDNJy6Imn1jpNd/vfjXt4OhI2G.GPWGyfC4S0MHNrMRSVEvNdPzTy',14,'LÊ QUANG HẢI','lequanghai540@gmail.com',NULL,2,NULL,'Nam','2019-12-01','ktx khu B Đại Học Quốc Gia tp Hồ Chí Minh, linh trung, Thủ Đức'),('trinh','$2a$10$Bim57fLr9u3suuQFkrQ4..JDHmnjJktvWneSRtYKJ7bErI42w8./y',16,'Phạm nguyễn tuyết trinh','lequanghai540@gmail.com',NULL,1,NULL,'Nữ','2019-12-16','ktx khu B Đại Học Quốc Gia tp Hồ Chí Minh, linh trung, Thủ Đức'),('Dũng','$2a$10$PrjLSdHRGsRHNDTEjMgSQO.rdi.a3Noo3czlLEm1df6pBB0lsFUZW',17,'Tiến Dũng','Conga@gmail.com',NULL,3,NULL,'Nam','1999-02-14','dường trục');
/*!40000 ALTER TABLE `member` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `offerpro`
--

DROP TABLE IF EXISTS `offerpro`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `offerpro` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ProID` int(11) DEFAULT NULL,
  `Bidder` int(11) DEFAULT NULL,
  `PricePlaceBid` double DEFAULT NULL,
  `StatusWinner` int(11) DEFAULT NULL,
  `TimePlace` datetime DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `offerpro`
--

LOCK TABLES `offerpro` WRITE;
/*!40000 ALTER TABLE `offerpro` DISABLE KEYS */;
INSERT INTO `offerpro` VALUES (3,35,14,15000,0,'2020-01-01 09:10:49'),(4,35,14,12000,0,'2020-01-01 10:44:37'),(5,35,14,16000,0,'2020-01-01 10:45:26'),(12,35,14,1500000,0,'2020-01-01 11:25:50'),(13,35,14,0,0,'2020-01-01 21:24:11'),(14,35,14,1500000,0,'2020-01-01 21:27:49'),(15,35,14,11500000,0,'2020-01-02 01:55:05'),(16,35,14,12222255,0,'2020-01-02 02:23:44'),(17,35,16,13333333,0,'2020-01-02 02:25:59'),(18,35,14,12555555,0,'2020-01-02 02:26:16'),(19,35,16,15000000,0,'2020-01-02 02:37:28'),(20,35,14,14000000,0,'2020-01-02 02:37:37'),(21,35,16,18000000,0,'2020-01-02 02:42:16'),(22,35,14,16000000,0,'2020-01-02 02:43:31'),(23,35,14,19000000,0,'2020-01-02 03:27:00'),(24,35,14,20000000,0,'2020-01-02 03:28:31'),(25,35,16,25000000,1,'2020-01-02 03:52:01');
/*!40000 ALTER TABLE `offerpro` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prodetails`
--

DROP TABLE IF EXISTS `prodetails`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prodetails` (
  `ProID` int(11) NOT NULL,
  `Description` text COLLATE utf8_unicode_ci,
  `DateWrite` datetime DEFAULT NULL,
  PRIMARY KEY (`ProID`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prodetails`
--

LOCK TABLES `prodetails` WRITE;
/*!40000 ALTER TABLE `prodetails` DISABLE KEYS */;
INSERT INTO `prodetails` VALUES (34,'<ul>\r\n<li>&nbsp;Name: `Laptop Dell Vostro V5481A P92G001(i5 8265U / 4GB RAM / 1TB HDD / MX130 2G / 14\" FHD/Win 10)`,</li>\r\n<li>&nbsp;Chipset: \"Bộ vi xử l&yacute; Intel Core&trade; i5 8265U (1.6Ghz, 6MB Cache)\"</li>\r\n<li>&nbsp;Rom: \"Bộ nhớ trong 4GB DDR4 2666MHz\"</li>\r\n<li>&nbsp;GraphicCard: \"VGA Nvidia Geforce MX130 2G DDR5\",</li>\r\n<li>HardDriver: \"Ổ cứng 1TB 5400rpm\",</li>\r\n<li>Screen: \"M&agrave;n h&igrave;nh 14.0&rdquo; FHD(1920 * 1080), LED backlight&nbsp;</li>\r\n</ul>\r\n<div id=\"eJOY__extension_root\" style=\"all: unset;\">&nbsp;</div>','2019-12-30 16:59:41'),(35,'<ul>\r\n<li><strong>Chipset:</strong>&nbsp; \"<span style=\"background-color: #ffffff; color: #e03e2d;\">Intel </span>Core i5-8265U (4 x 1.6GHz/6MB cache)\"</li>\r\n<li><strong>Rom</strong>: \"Bộ nhớ trong 4GB DDR4 2666MHz\",</li>\r\n<li><strong>GraphicCard</strong>: \"VGA Nvidia Geforce MX130 2G DDR5\",</li>\r\n<li><strong>HardDriver</strong>: \"Ổ cứng 1TB 5400rpm\",</li>\r\n<li><strong>Screen</strong>: \"M&agrave;n h&igrave;nh 14.0&rdquo; FHD(1920 * 1080), LED backlight\",</li>\r\n<li><strong>Security</strong>: \"Bảo mật, c&ocirc;ng nghệ <em>Finger Print</em>\"</li>\r\n</ul>\r\n<div id=\"eJOY__extension_root\" style=\"all: unset;\">&nbsp;</div>','2019-12-31 16:13:14'),(36,'<p>&nbsp;</p>\r\n<div id=\"eJOY__extension_root\" style=\"all: unset;\">&nbsp;</div>','2019-12-31 16:20:53'),(37,'<p>&nbsp;</p>\r\n<div id=\"eJOY__extension_root\" style=\"all: unset;\">&nbsp;</div>','2019-12-31 16:26:21');
/*!40000 ALTER TABLE `prodetails` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `products`
--

DROP TABLE IF EXISTS `products`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `products` (
  `ProID` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `Item` int(11) DEFAULT NULL,
  `ProName` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  `PriceBegin` double DEFAULT NULL,
  `PriceStep` double DEFAULT NULL,
  `PriBuyNow` double DEFAULT NULL,
  `TimeBegin` datetime DEFAULT NULL,
  `TimeEnd` datetime DEFAULT NULL,
  `SellerID` int(11) DEFAULT NULL,
  `StatusID` int(11) DEFAULT NULL,
  `AutoReset` int(11) DEFAULT NULL,
  PRIMARY KEY (`ProID`) USING BTREE
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `products`
--

LOCK TABLES `products` WRITE;
/*!40000 ALTER TABLE `products` DISABLE KEYS */;
INSERT INTO `products` VALUES (35,NULL,'Laptop Dell Vostro 3580 P75F010',50000,100000,15000000,'2019-12-31 16:13:14','2019-12-31 21:05:00',14,NULL,1),(36,NULL,'',1112,222,2222,'2019-12-31 16:20:53','2019-12-31 16:50:00',14,NULL,0),(37,NULL,'',NULL,NULL,NULL,'2019-12-31 16:26:21','2019-12-31 17:00:00',14,NULL,0);
/*!40000 ALTER TABLE `products` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `proimage`
--

DROP TABLE IF EXISTS `proimage`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `proimage` (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ProID` int(11) DEFAULT NULL,
  `imgURL` text COLLATE utf8_bin,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB AUTO_INCREMENT=24 DEFAULT CHARSET=utf8 COLLATE=utf8_bin;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `proimage`
--

LOCK TABLES `proimage` WRITE;
/*!40000 ALTER TABLE `proimage` DISABLE KEYS */;
INSERT INTO `proimage` VALUES (13,34,'2e165c80-2aeb-11ea-9260-fbe94b06d95a.png'),(14,34,'2e185850-2aeb-11ea-9260-fbe94b06d95a.png'),(15,34,'2e18cd80-2aeb-11ea-9260-fbe94b06d95a.png'),(16,35,'f4c26aa0-2bad-11ea-aea5-6f1115f536b2.png'),(17,35,'f4d52f50-2bad-11ea-aea5-6f1115f536b2.png'),(18,35,'f4d55660-2bad-11ea-aea5-6f1115f536b2.png'),(19,35,'f4d7a050-2bad-11ea-aea5-6f1115f536b2.png'),(20,36,'4e58b910-2baf-11ea-b96c-0b8fcf566186.png'),(21,36,'4e5b7830-2baf-11ea-b96c-0b8fcf566186.png'),(22,36,'4e5bc650-2baf-11ea-b96c-0b8fcf566186.png'),(23,37,'9fa6a070-2baf-11ea-b96c-0b8fcf566186.png');
/*!40000 ALTER TABLE `proimage` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `statustype`
--

DROP TABLE IF EXISTS `statustype`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `statustype` (
  `ID_Status` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Name_Status` varchar(255) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`ID_Status`) USING BTREE
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci ROW_FORMAT=DYNAMIC;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `statustype`
--

LOCK TABLES `statustype` WRITE;
/*!40000 ALTER TABLE `statustype` DISABLE KEYS */;
/*!40000 ALTER TABLE `statustype` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-01-02  4:08:39
