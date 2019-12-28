/*
 Navicat Premium Data Transfer

 Source Server         : HoaRoiCuaPhat
 Source Server Type    : MySQL
 Source Server Version : 100406
 Source Host           : localhost:3306
 Source Schema         : auction

 Target Server Type    : MySQL
 Target Server Version : 100406
 File Encoding         : 65001

 Date: 28/12/2019 10:01:42
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for evaluate
-- ----------------------------
DROP TABLE IF EXISTS `evaluate`;
CREATE TABLE `evaluate`  (
  `UserID` int(11) NOT NULL,
  `Point` int(11) NULL DEFAULT NULL,
  `Comment` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`UserID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for favolist
-- ----------------------------
DROP TABLE IF EXISTS `favolist`;
CREATE TABLE `favolist`  (
  `ProID` int(11) NULL DEFAULT NULL,
  `UserID` int(11) NULL DEFAULT NULL
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for itemlist
-- ----------------------------
DROP TABLE IF EXISTS `itemlist`;
CREATE TABLE `itemlist`  (
  `ItemID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ItemName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `List` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ItemID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 8 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of itemlist
-- ----------------------------
INSERT INTO `itemlist` VALUES (1, 'SamSung', 1);
INSERT INTO `itemlist` VALUES (2, 'Nokia', 1);
INSERT INTO `itemlist` VALUES (3, 'Xiaomi', 1);
INSERT INTO `itemlist` VALUES (4, 'Dell', 2);
INSERT INTO `itemlist` VALUES (5, 'Asus', 2);
INSERT INTO `itemlist` VALUES (6, 'Apple', 2);
INSERT INTO `itemlist` VALUES (7, 'Lenovo', 2);

-- ----------------------------
-- Table structure for listcategory
-- ----------------------------
DROP TABLE IF EXISTS `listcategory`;
CREATE TABLE `listcategory`  (
  `ListID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `ListName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`ListID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 5 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of listcategory
-- ----------------------------
INSERT INTO `listcategory` VALUES (1, 'Điện thoại di động');
INSERT INTO `listcategory` VALUES (2, 'Máy tính xách tay');
INSERT INTO `listcategory` VALUES (4, 'Quần áo');

-- ----------------------------
-- Table structure for loai_member
-- ----------------------------
DROP TABLE IF EXISTS `loai_member`;
CREATE TABLE `loai_member`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `ten_loai` varchar(45) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 4 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of loai_member
-- ----------------------------
INSERT INTO `loai_member` VALUES (1, 'bidder');
INSERT INTO `loai_member` VALUES (2, 'seller');
INSERT INTO `loai_member` VALUES (3, 'admin');

-- ----------------------------
-- Table structure for member
-- ----------------------------
DROP TABLE IF EXISTS `member`;
CREATE TABLE `member`  (
  `f_Username` varchar(50) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `f_Password` varchar(20000) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL,
  `f_ID` int(11) NOT NULL AUTO_INCREMENT,
  `f_Name` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `f_Email` varchar(100) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `Diem` float NULL DEFAULT NULL,
  `ID_loai_member` int(11) NULL DEFAULT 1,
  `ViTien` float NULL DEFAULT NULL,
  `f_GioiTinh` varchar(10) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  `f_DOB` date NULL DEFAULT NULL,
  `f_Diachi` varchar(700) CHARACTER SET utf8 COLLATE utf8_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`f_ID`) USING BTREE,
  UNIQUE INDEX `f_Username_UNIQUE`(`f_Username`) USING BTREE,
  INDEX `FK_member_loai_member_idx`(`ID_loai_member`) USING BTREE,
  CONSTRAINT `FK_member_loai_member` FOREIGN KEY (`ID_loai_member`) REFERENCES `loai_member` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 18 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of member
-- ----------------------------
INSERT INTO `member` VALUES ('hai', '$2a$10$uDNJy6Imn1jpNd/vfjXt4OhI2G.GPWGyfC4S0MHNrMRSVEvNdPzTy', 14, 'LÊ QUANG HẢI', 'lequanghai540@gmail.com', NULL, 2, NULL, 'Nam', '2019-12-01', 'ktx khu B Đại Học Quốc Gia tp Hồ Chí Minh, linh trung, Thủ Đức');
INSERT INTO `member` VALUES ('trinh', '$2a$10$Bim57fLr9u3suuQFkrQ4..JDHmnjJktvWneSRtYKJ7bErI42w8./y', 16, 'Phạm nguyễn tuyết trinh', 'lequanghai540@gmail.com', NULL, 1, NULL, 'Nữ', '2019-12-16', 'ktx khu B Đại Học Quốc Gia tp Hồ Chí Minh, linh trung, Thủ Đức');
INSERT INTO `member` VALUES ('Dũng', '$2a$10$PrjLSdHRGsRHNDTEjMgSQO.rdi.a3Noo3czlLEm1df6pBB0lsFUZW', 17, 'Tiến Dũng', 'Conga@gmail.com', NULL, 3, NULL, 'Nam', '1999-02-14', 'dường trục');

-- ----------------------------
-- Table structure for offerpro
-- ----------------------------
DROP TABLE IF EXISTS `offerpro`;
CREATE TABLE `offerpro`  (
  `ProID` int(11) NOT NULL,
  `Buyer` int(11) NULL DEFAULT NULL,
  `Price` decimal(10, 2) NULL DEFAULT NULL,
  `PriceStatus` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ProID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for prodetails
-- ----------------------------
DROP TABLE IF EXISTS `prodetails`;
CREATE TABLE `prodetails`  (
  `ProID` int(11) NOT NULL,
  `Description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `TinyDes` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `DateWrite` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ProID`) USING BTREE
) ENGINE = InnoDB CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `ProID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Item` int(11) NULL DEFAULT NULL,
  `ProName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `PriceBegin` decimal(10, 0) NULL DEFAULT NULL,
  `PriceStep` decimal(10, 0) NULL DEFAULT NULL,
  `PriBuyNow` decimal(10, 0) NULL DEFAULT NULL,
  `TimeBegin` datetime(0) NULL DEFAULT NULL,
  `TimeEnd` datetime(0) NULL DEFAULT NULL,
  `SellerID` int(11) NULL DEFAULT NULL,
  `StatusID` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`ProID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 2 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (1, 4, 'Dell Vostro 3580', 1000000, 100, 950000, '2019-12-18 12:38:31', '2020-01-01 12:38:49', 14, 1);

-- ----------------------------
-- Table structure for statustype
-- ----------------------------
DROP TABLE IF EXISTS `statustype`;
CREATE TABLE `statustype`  (
  `ID_Status` int(11) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Name_Status` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  PRIMARY KEY (`ID_Status`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 1 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

SET FOREIGN_KEY_CHECKS = 1;
