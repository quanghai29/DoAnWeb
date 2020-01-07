/*
 Navicat Premium Data Transfer

 Source Server         : MySQL
 Source Server Type    : MySQL
 Source Server Version : 100410
 Source Host           : 127.0.0.1:3306
 Source Schema         : auction

 Target Server Type    : MySQL
 Target Server Version : 100410
 File Encoding         : 65001

 Date: 07/01/2020 08:29:52
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
  `f_UpgradeWaitStatus` int(11) NULL DEFAULT NULL,
  PRIMARY KEY (`f_ID`) USING BTREE,
  UNIQUE INDEX `f_Username_UNIQUE`(`f_Username`) USING BTREE,
  INDEX `FK_member_loai_member_idx`(`ID_loai_member`) USING BTREE,
  CONSTRAINT `FK_member_loai_member` FOREIGN KEY (`ID_loai_member`) REFERENCES `loai_member` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE = InnoDB AUTO_INCREMENT = 19 CHARACTER SET = utf8 COLLATE = utf8_general_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of member
-- ----------------------------
INSERT INTO `member` VALUES ('hai', '$2a$10$uDNJy6Imn1jpNd/vfjXt4OhI2G.GPWGyfC4S0MHNrMRSVEvNdPzTy', 14, 'LÊ QUANG HẢI', 'lequanghai540@gmail.com', NULL, 2, NULL, 'Nam', '2019-12-01', 'ktx khu B Đại Học Quốc Gia tp Hồ Chí Minh, linh trung, Thủ Đức', 0);
INSERT INTO `member` VALUES ('trinh', '$2a$10$Bim57fLr9u3suuQFkrQ4..JDHmnjJktvWneSRtYKJ7bErI42w8./y', 16, 'Phạm nguyễn tuyết trinh', 'lequanghai540@gmail.com', NULL, 3, NULL, 'Nữ', '2019-12-16', 'ktx khu B Đại Học Quốc Gia tp Hồ Chí Minh, linh trung, Thủ Đức', 0);
INSERT INTO `member` VALUES ('dung', '$2a$10$uDNJy6Imn1jpNd/vfjXt4OhI2G.GPWGyfC4S0MHNrMRSVEvNdPzTy', 17, 'Tiến Dũng', 'Conga@gmail.com', NULL, 3, NULL, 'Nam', '1999-02-14', 'dường trục', 0);
INSERT INTO `member` VALUES ('DongGay', '$2a$10$JBgc/0dmhU6AhqnxUznt8u5SX7.d6H17b68anhg7Acdedh4.UipUW', 18, 'Linh Đồng', 'gaylison@gmail.com', 5, 1, NULL, 'Nữ', '2000-02-29', 'Lí Sơn', 1);

-- ----------------------------
-- Table structure for offerpro
-- ----------------------------
DROP TABLE IF EXISTS `offerpro`;
CREATE TABLE `offerpro`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ProID` int(11) NULL DEFAULT NULL,
  `Bidder` int(11) NULL DEFAULT NULL,
  `PricePlaceBid` double NULL DEFAULT NULL,
  `MaxBid` double NULL DEFAULT NULL,
  `StatusWinner` int(11) NULL DEFAULT NULL,
  `TimePlace` datetime(0) NULL DEFAULT NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 85 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of offerpro
-- ----------------------------
INSERT INTO `offerpro` VALUES (84, 34, 14, 150000, NULL, 1, '2020-01-06 11:32:59');

-- ----------------------------
-- Table structure for prodetails
-- ----------------------------
DROP TABLE IF EXISTS `prodetails`;
CREATE TABLE `prodetails`  (
  `ProDeID` int(11) NOT NULL AUTO_INCREMENT,
  `ProID` int(11) NULL DEFAULT NULL,
  `Description` text CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL,
  `DateWrite` datetime(0) NULL DEFAULT NULL,
  `Modified` int(11) NULL DEFAULT 1,
  PRIMARY KEY (`ProDeID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 34 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of prodetails
-- ----------------------------
INSERT INTO `prodetails` VALUES (1, 34, '<ul>\r\n<li>&nbsp;Name: `Laptop Dell Vostro V5481A P92G001(i5 8265U / 4GB RAM / 1TB HDD / MX130 2G / 14\" FHD/Win 10)`,</li>\r\n<li>&nbsp;Chipset: \"Bộ vi xử l&yacute; Intel Core&trade; i5 8265U (1.6Ghz, 6MB Cache)\"</li>\r\n<li>&nbsp;Rom: \"Bộ nhớ trong 4GB DDR4 2666MHz\"</li>\r\n<li>&nbsp;GraphicCard: \"VGA Nvidia Geforce MX130 2G DDR5\",</li>\r\n<li>HardDriver: \"Ổ cứng 1TB 5400rpm\",</li>\r\n<li>Screen: \"M&agrave;n h&igrave;nh 14.0&rdquo; FHD(1920 * 1080), LED backlight&nbsp;</li>\r\n</ul>\r\n<div id=\"eJOY__extension_root\" style=\"all: unset;\">&nbsp;</div>', '2019-12-30 16:59:41', 1);
INSERT INTO `prodetails` VALUES (5, 37, '<div>Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel core i5 10210u</li>\r\n<li>GPU: Onboard</li>\r\n<li>RAM: 4GB DDR4</li>\r\n<li>HDD: 1TB</li>\r\n<li>M&Agrave;N H&Igrave;NH: 14\" HD 1280x720</li>\r\n<li>HĐH: Windows 10</li>\r\n</ul>', '2020-01-06 23:59:00', 0);
INSERT INTO `prodetails` VALUES (6, 38, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel Core i5 10210U</li>\r\n<li>RAM: 8GB RAM</li>\r\n<li>VGA: Nvidia Geforce MX250 2G DDR5</li>\r\n<li>Ổ cứng: 512GB SSD</li>\r\n<li>M&agrave;n h&igrave;nh: 14\" FHD</li>\r\n</ul>', '2020-01-07 00:05:23', 0);
INSERT INTO `prodetails` VALUES (7, 39, '<div>Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel core i5 10210u</li>\r\n<li>GPU: Onboard</li>\r\n<li>RAM: 4GB DDR4</li>\r\n<li>HDD: 1TB</li>\r\n<li>M&Agrave;N H&Igrave;NH: 14\" HD 1280x720</li>\r\n<li>HĐH: Windows 10</li>\r\n</ul>', '2020-01-07 00:07:16', 0);
INSERT INTO `prodetails` VALUES (8, 40, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel Core i7 1065G7</li>\r\n<li>RAM: i7 1065G7</li>\r\n<li>VGA: Nvidia Geforce MX230 4G DDR5</li>\r\n<li>Ổ cứng: 512GB SSD</li>\r\n<li>M&agrave;n h&igrave;nh: 15.6\" FHD</li>\r\n<li>Hệ điều h&agrave;nh: Win 10</li>\r\n<li>M&agrave;u sắc: Bạc</li>\r\n</ul>', '2020-01-07 00:09:08', 0);
INSERT INTO `prodetails` VALUES (9, 41, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>Bộ vi xử l&yacute; Intel Core&trade; i7 8565U (1.8Ghz, 8MB Cache)</li>\r\n<li>Chipset Intel</li>\r\n<li>Bộ nhớ trong 8GB DDR4 2666MHz</li>\r\n<li>VGA Nvidia Geforce MX130 2G DDR5</li>\r\n<li>Ổ cứng 1TB 5400rpm + 128GB M.2 PCIe NVMe SSD</li>\r\n<li>Ổ quang No</li>\r\n<li>Card Reader Yes</li>\r\n<li>Bảo mật, c&ocirc;ng nghệ Finger Print</li>\r\n<li>M&agrave;n h&igrave;nh 14.0&rdquo; FHD (1920 * 1080), LED backlight</li>\r\n</ul>', '2020-01-07 00:11:01', 0);
INSERT INTO `prodetails` VALUES (10, 42, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel Core i5 10210U</li>\r\n<li>RAM: 8GB RAM</li>\r\n<li>VGA: NVIDIA MX230 2GB</li>\r\n<li>Ổ cứng: 1TB HDD + 128GB SSD</li>\r\n<li>M&agrave;n h&igrave;nh: 15.6\" FHD</li>\r\n<li>Hệ điều h&agrave;nh: Win 10</li>\r\n<li>M&agrave;u sắc: X&aacute;m</li>\r\n</ul>', '2020-01-07 00:12:44', 0);
INSERT INTO `prodetails` VALUES (11, 43, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel Core i7 10510U</li>\r\n<li>RAM: 16GB RAM</li>\r\n<li>Ổ cứng: 512GB SSD</li>\r\n<li>VGA: NVIDIA MX250 2GB</li>\r\n<li>M&agrave;n h&igrave;nh: 14\" FHD</li>\r\n<li>Hệ điều h&agrave;nh: Win 10</li>\r\n<li>M&agrave;u sắc: Bạc</li>\r\n</ul>', '2020-01-07 00:14:50', 0);
INSERT INTO `prodetails` VALUES (12, 44, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel Core i7 1065G7</li>\r\n<li>RAM: 8GB RAM</li>\r\n<li>VGA: NVIDIA MX230 2GB</li>\r\n<li>Ổ cứng: 512GB SSD</li>\r\n<li>M&agrave;n h&igrave;nh: 14\" FHD</li>\r\n<li>Hệ điều h&agrave;nh: Win 10</li>\r\n<li>M&agrave;u sắc: Bạc</li>\r\n</ul>', '2020-01-07 00:16:46', 0);
INSERT INTO `prodetails` VALUES (13, 45, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel Core i5 1065G7</li>\r\n<li>RAM: 4GB RAM</li>\r\n<li>VGA: NVIDIA MX230 2GB</li>\r\n<li>M&agrave;n h&igrave;nh: 14\" FHD</li>\r\n<li>Hệ điều h&agrave;nh: Win 10</li>\r\n</ul>', '2020-01-07 00:19:16', 0);
INSERT INTO `prodetails` VALUES (14, 46, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel core i5 10210u</li>\r\n<li>GPU: Onboard</li>\r\n<li>RAM: 4GB DDR4</li>\r\n<li>HDD: 1TB</li>\r\n<li>M&Agrave;N H&Igrave;NH: 15,6\" FHD 1920x1080</li>\r\n<li>HĐH: Windows 10</li>\r\n<li>Finger Print</li>\r\n</ul>', '2020-01-07 00:20:27', 0);
INSERT INTO `prodetails` VALUES (15, 47, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>Bộ vi xử l&yacute; Intel Core&trade; i7 8565U (1.8Ghz, 8MB Cache)</li>\r\n<li>Chipset Intel</li>\r\n<li>Bộ nhớ trong 8GB DDR4 2666MHz</li>\r\n<li>VGA Nvidia Geforce MX130 2G DDR5</li>\r\n<li>Ổ cứng 1TB 5400rpm + 128GB M.2 PCIe NVMe SSD</li>\r\n<li>Ổ quang No</li>\r\n<li>Card Reader Yes</li>\r\n<li>Bảo mật, c&ocirc;ng nghệ Finger Print</li>\r\n<li>M&agrave;n h&igrave;nh 14.0&rdquo; FHD (1920 * 1080), LED backlight</li>\r\n</ul>', '2020-01-07 00:22:02', 0);
INSERT INTO `prodetails` VALUES (16, 48, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel core i5 10210u</li>\r\n<li>GPU: Onboard</li>\r\n<li>RAM: 4GB DDR4</li>\r\n<li>HDD: 1TB</li>\r\n<li>M&Agrave;N H&Igrave;NH: 14\" HD 1280x720</li>\r\n<li>HĐH: Windows 10</li>\r\n</ul>', '2020-01-07 00:24:38', 0);
INSERT INTO `prodetails` VALUES (17, 49, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>Bộ vi xử l&yacute; Intel Core&trade; i5 8265U (1.6Ghz, 6MB Cache)</li>\r\n<li>Chipset Intel</li>\r\n<li>Bộ nhớ trong 4GB DDR4 2666MHz</li>\r\n<li>VGA Nvidia Geforce MX130 2G DDR5</li>\r\n<li>Ổ cứng 1TB 5400rpm</li>\r\n<li>Ổ quang No</li>\r\n<li>Card Reader Yes</li>\r\n<li>Bảo mật, c&ocirc;ng nghệ Finger Print</li>\r\n<li>M&agrave;n h&igrave;nh 14.0&rdquo; FHD (1920 * 1080), LED backlight</li>\r\n</ul>', '2020-01-07 00:27:02', 0);
INSERT INTO `prodetails` VALUES (18, 50, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel Core i3 1065G7</li>\r\n<li>RAM: 4GB RAM</li>\r\n<li>VGA: NVIDIA MX230 2GB</li>\r\n<li>Ổ cứng: 512GB SSD</li>\r\n<li>M&agrave;n h&igrave;nh: 14\" FHD</li>\r\n<li>Hệ điều h&agrave;nh: Win 10</li>\r\n</ul>', '2020-01-07 00:29:41', 0);
INSERT INTO `prodetails` VALUES (19, 51, '<div class=\"product-summary-item-title\">Th&ocirc;ng số sản phẩm</div>\r\n<ul id=\"js-tskt-item\">\r\n<li>CPU: Intel Core i3 7020U</li>\r\n<li>RAM: 4GB RAM</li>\r\n<li>VGA: Onboard</li>\r\n<li>Ổ cứng: 1TB HDD</li>\r\n<li>M&agrave;n h&igrave;nh: 15.6\" FHD</li>\r\n<li>Hệ điều h&agrave;nh: Win 10</li>\r\n<li>M&agrave;u sắc: Bạc</li>\r\n</ul>', '2020-01-07 00:31:10', 0);
INSERT INTO `prodetails` VALUES (20, 52, '<ul>\r\n<li><strong>Kết nối mạng:</strong>&nbsp;2G, 3G, 4G.</li>\r\n<li><strong>Bộ nhớ trong:</strong>&nbsp;16GB.</li>\r\n<li><strong>Bảo h&agrave;nh:</strong>&nbsp;12 th&aacute;ng.</li>\r\n<li><strong>Số SIM:</strong>&nbsp;2 SIM.</li>\r\n<li><strong>Loại cổng sạc:</strong>&nbsp;MicroUSB.</li>\r\n<li><strong>H&atilde;ng sản xuất:</strong>&nbsp;Samsung.</li>\r\n<li><strong>RAM:</strong>&nbsp;2Gb.</li>\r\n<li><strong>T&iacute;nh năng nổi trội:</strong>&nbsp;Pin khủng (&gt;3000 mAh).</li>\r\n<li><strong>Xuất xứ:</strong>&nbsp;H&agrave;ng ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>Nơi bảo h&agrave;nh:</strong>&nbsp;Bảo h&agrave;nh ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>Chip xử l&yacute;:</strong>&nbsp;Samsung.</li>\r\n<li><strong>Phương thức bảo h&agrave;nh:</strong>&nbsp;Bảo h&agrave;nh điện tử.</li>\r\n<li><strong>K&iacute;ch thước m&agrave;n h&igrave;nh:</strong>&nbsp;6.1 inch - 7.0 inch.</li>\r\n<li><strong>Camera trước:</strong>&nbsp;5 MP.</li>\r\n<li><strong>CPU:</strong>&nbsp;1.6 GHz.</li>\r\n<li><strong>Chuẩn m&agrave;n h&igrave;nh:</strong>&nbsp;HD+ 6.2\".</li>\r\n<li><strong>Bluetooth:</strong>&nbsp;A2DP, LE, V4.2.</li>\r\n<li><strong>Trọng lượng:</strong>&nbsp;163 g.</li>\r\n<li><strong>Độ ph&acirc;n giải m&agrave;n h&igrave;nh:</strong>&nbsp;(720 x 1520 Pixels).</li>\r\n<li><strong>Dung lượng pin:</strong>&nbsp;3400 mAh.</li>\r\n<li><strong>Hệ điều h&agrave;nh:</strong>&nbsp;Android 8.1 (Oreo).</li>\r\n<li><strong>Chất liệu:</strong>&nbsp;Nhựa.</li>\r\n<li><strong>Jack (Input &amp; Output):</strong>&nbsp;3.5 mm.</li>\r\n<li><strong>C&ocirc;ng nghệ m&agrave;n h&igrave;nh:</strong>&nbsp;PLS TFT LCD.</li>\r\n<li><strong>Wifi:</strong>&nbsp;Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot.</li>\r\n<li><strong>K&iacute;ch thước:</strong>&nbsp;D&agrave;i 155.6 mm - Ngang 75.6 mm - D&agrave;y 7.7 mm.</li>\r\n<li><strong>Chipset:</strong>&nbsp;Exynos 7870 8 nh&acirc;n 64-bit.</li>\r\n<li><strong>Chip đồ họa (GPU):</strong>&nbsp;Mali-T830.</li>\r\n<li><strong>Camera sau:</strong>&nbsp;Ch&iacute;nh 13 MP &amp; Phụ 5 MP.</li>\r\n<li><strong>Hỗ trợ thẻ nhớ tối đa:</strong>&nbsp;512 GB.</li>\r\n<li><strong>Loại SIM:</strong>&nbsp;2 SIM Nano.</li>\r\n<li><strong>Thẻ nhớ ngo&agrave;i:</strong>&nbsp;MicroSD.</li>\r\n</ul>', '2020-01-07 00:36:45', 0);
INSERT INTO `prodetails` VALUES (21, 53, '<ul>\r\n<li><strong>Kết nối mạng:</strong>&nbsp;4G.</li>\r\n<li><strong>RAM:</strong>&nbsp;8Gb.</li>\r\n<li><strong>H&atilde;ng sản xuất:</strong>&nbsp;Samsung.</li>\r\n<li><strong>Bảo h&agrave;nh:</strong>&nbsp;12 th&aacute;ng.</li>\r\n<li><strong>Số SIM:</strong>&nbsp;2 SIM.</li>\r\n<li><strong>Loại cổng sạc:</strong>&nbsp;USB Type-C.</li>\r\n<li><strong>Bộ nhớ trong:</strong>&nbsp;512GB.</li>\r\n<li><strong>Xuất xứ:</strong>&nbsp;H&agrave;ng ch&iacute;nh h&atilde;ng.</li>\r\n</ul>', '2020-01-07 00:39:40', 0);
INSERT INTO `prodetails` VALUES (22, 54, '<ul>\r\n<li><strong>Kết nối mạng:</strong>&nbsp;4G.</li>\r\n<li><strong>Số SIM:</strong>&nbsp;2 SIM.</li>\r\n<li><strong>Bảo h&agrave;nh:</strong>&nbsp;12 th&aacute;ng.</li>\r\n<li><strong>Bộ nhớ trong:</strong>&nbsp;128GB.</li>\r\n<li><strong>H&atilde;ng sản xuất:</strong>&nbsp;Samsung.</li>\r\n<li><strong>Loại cổng sạc:</strong>&nbsp;USB Type-C.</li>\r\n<li><strong>RAM:</strong>&nbsp;6Gb.</li>\r\n<li><strong>K&iacute;ch thước m&agrave;n h&igrave;nh:</strong>&nbsp;6.1 inch - 7.0 inch.</li>\r\n<li><strong>Xuất xứ:</strong>&nbsp;H&agrave;ng ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>Chip xử l&yacute;:</strong>&nbsp;Qualcomm.</li>\r\n<li><strong>CPU:</strong>&nbsp;4 nh&acirc;n 2.2 GHz &amp; 4 nh&acirc;n 1.8 GHz.</li>\r\n<li><strong>Chip đồ họa (GPU):</strong>&nbsp;Adreno 512.</li>\r\n<li><strong>Dung lượng pin:</strong>&nbsp;3800 mAh.</li>\r\n<li><strong>Wifi:</strong>&nbsp;Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi Direct, Wi-Fi hotspot.</li>\r\n<li><strong>Chất liệu:</strong>&nbsp;Khung kim loại + mặt lưng k&iacute;nh.</li>\r\n<li><strong>Bluetooth:</strong>&nbsp;A2DP, LE, v5.0.</li>\r\n</ul>', '2020-01-07 00:41:38', 0);
INSERT INTO `prodetails` VALUES (23, 55, '<ul>\r\n<li><strong>Kết nối mạng:</strong>&nbsp;4G.</li>\r\n<li><strong>Bộ nhớ trong:</strong>&nbsp;128GB.</li>\r\n<li><strong>Bảo h&agrave;nh:</strong>&nbsp;3 th&aacute;ng.</li>\r\n<li><strong>Số SIM:</strong>&nbsp;2 SIM.</li>\r\n<li><strong>H&atilde;ng sản xuất:</strong>&nbsp;Samsung.</li>\r\n<li><strong>Loại cổng sạc:</strong>&nbsp;USB Type-C.</li>\r\n<li><strong>RAM:</strong>&nbsp;8Gb.</li>\r\n<li><strong>Xuất xứ:</strong>&nbsp;H&agrave;ng ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>Chip đồ họa (GPU):</strong>&nbsp;Mali-G76 MP12.</li>\r\n<li><strong>Hệ điều h&agrave;nh:</strong>&nbsp;Android 9.0 (Pie).</li>\r\n<li><strong>C&ocirc;ng nghệ m&agrave;n h&igrave;nh:</strong>&nbsp;Dynamic AMOLED.</li>\r\n<li><strong>Wifi:</strong>&nbsp;Wi-Fi 802.11 a/b/g/n/ac, Dual-band, Wi-Fi Direct, Wi-Fi hotspot.</li>\r\n<li><strong>Thẻ nhớ ngo&agrave;i:</strong>&nbsp;MicroSD, hỗ trợ tối đa 512 GB.</li>\r\n<li><strong>Camera sau:</strong>&nbsp;Ch&iacute;nh 12 MP &amp; Phụ 12 MP, 16 MP.</li>\r\n<li><strong>Dung lượng pin:</strong>&nbsp;4100 mAh.</li>\r\n<li><strong>Camera trước:</strong>&nbsp;Ch&iacute;nh 10 MP &amp; Phụ 8 MP.</li>\r\n<li><strong>Loại SIM:</strong>&nbsp;2 SIM Nano (SIM 2 chung khe thẻ nhớ).</li>\r\n<li><strong>Chất liệu:</strong>&nbsp;Khung kim loại + mặt k&iacute;nh cường lực.</li>\r\n<li><strong>Bluetooth:</strong>&nbsp;apt-X, A2DP, LE, v5.0.</li>\r\n<li><strong>Độ ph&acirc;n giải m&agrave;n h&igrave;nh:</strong>&nbsp;2K+ (1440 x 3040 Pixels).</li>\r\n<li><strong>Trọng lượng:</strong>&nbsp;175 g.</li>\r\n<li><strong>Chipset:</strong>&nbsp;Exynos 9820 8 nh&acirc;n 64-bit.</li>\r\n<li><strong>Hỗ trợ thẻ nhớ tối đa:</strong>&nbsp;512 GB.</li>\r\n</ul>', '2020-01-07 00:43:09', 0);
INSERT INTO `prodetails` VALUES (24, 56, '<ul>\r\n<li><strong>Bảo h&agrave;nh:</strong>&nbsp;15 th&aacute;ng.</li>\r\n<li><strong>Số SIM:</strong>&nbsp;2 SIM.</li>\r\n<li><strong>Loại cổng sạc:</strong>&nbsp;MicroUSB.</li>\r\n<li><strong>H&atilde;ng sản xuất:</strong>&nbsp;Nokia.</li>\r\n<li><strong>Xuất xứ:</strong>&nbsp;H&agrave;ng ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>Phương thức bảo h&agrave;nh:</strong>&nbsp;Bảo h&agrave;nh điện tử.</li>\r\n<li><strong>Nơi bảo h&agrave;nh:</strong>&nbsp;Bảo h&agrave;nh ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>Camera trước:</strong>&nbsp;2 MP.</li>\r\n<li><strong>Trọng lượng:</strong>&nbsp;91.8 g.</li>\r\n<li><strong>Chất liệu:</strong>&nbsp;Nhựa, nh&ocirc;m.</li>\r\n<li><strong>Camera sau:</strong>&nbsp;2 MP.</li>\r\n<li><strong>Jack (Input &amp; Output):</strong>&nbsp;Kh&ocirc;ng.</li>\r\n<li><strong>Danh bạ lưu trữ:</strong>&nbsp;1000 số.</li>\r\n<li><strong>Thẻ nhớ ngo&agrave;i:</strong>&nbsp;MicroSD, hỗ trợ tối đa 32 GB.</li>\r\n<li><strong>Dung lượng pin:</strong>&nbsp;1200 mAh.</li>\r\n<li><strong>Hỗ trợ thẻ nhớ tối đa:</strong>&nbsp;32GB.</li>\r\n<li><strong>Chuẩn m&agrave;n h&igrave;nh:</strong>&nbsp;2.8\".</li>\r\n<li><strong>C&ocirc;ng nghệ m&agrave;n h&igrave;nh:</strong>&nbsp;TFT.</li>\r\n<li><strong>Độ ph&acirc;n giải m&agrave;n h&igrave;nh:</strong>&nbsp;QVGA (240 x 320 Pixels).</li>\r\n<li><strong>Loại SIM:</strong>&nbsp;2 SIM thường.</li>\r\n<li><strong>Bluetooth:</strong>&nbsp;V3.0.</li>\r\n</ul>', '2020-01-07 00:45:27', 0);
INSERT INTO `prodetails` VALUES (25, 57, '<ul>\r\n<li><strong>Kết nối mạng:</strong>&nbsp;2G, 3G, 4G.</li>\r\n<li><strong>Bảo h&agrave;nh:</strong>&nbsp;15 th&aacute;ng.</li>\r\n<li><strong>H&atilde;ng sản xuất:</strong>&nbsp;Nokia.</li>\r\n<li><strong>Bộ nhớ trong:</strong>&nbsp;16GB.</li>\r\n<li><strong>Số SIM:</strong>&nbsp;2 SIM.</li>\r\n<li><strong>RAM:</strong>&nbsp;2Gb.</li>\r\n<li><strong>Loại cổng sạc:</strong>&nbsp;MicroUSB.</li>\r\n<li><strong>T&iacute;nh năng nổi trội:</strong>&nbsp;Pin khủng (&gt;3000 mAh).</li>\r\n<li><strong>Chip xử l&yacute;:</strong>&nbsp;Qualcomm.</li>\r\n<li><strong>Xuất xứ:</strong>&nbsp;H&agrave;ng ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>K&iacute;ch thước m&agrave;n h&igrave;nh:</strong>&nbsp;6.1 inch - 7.0 inch.</li>\r\n<li><strong>Phương thức bảo h&agrave;nh:</strong>&nbsp;Bảo h&agrave;nh điện tử.</li>\r\n<li><strong>Nơi bảo h&agrave;nh:</strong>&nbsp;Bảo h&agrave;nh ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>Wifi:</strong>&nbsp;Wi-Fi 802.11 b/g/n, Wi-Fi hotspot.</li>\r\n<li><strong>Camera sau:</strong>&nbsp;13 MP.</li>\r\n<li><strong>C&ocirc;ng nghệ m&agrave;n h&igrave;nh:</strong>&nbsp;IPS LCD.</li>\r\n<li><strong>Chip đồ họa (GPU):</strong>&nbsp;Adreno 504.</li>\r\n<li><strong>Độ ph&acirc;n giải m&agrave;n h&igrave;nh:</strong>&nbsp;HD+ (720 x 1520 Pixels).</li>\r\n<li><strong>Loại SIM:</strong>&nbsp;2 Nano SIM.</li>\r\n<li><strong>CPU:</strong>&nbsp;1.8 GHz.</li>\r\n<li><strong>Thẻ nhớ ngo&agrave;i:</strong>&nbsp;MicroSD.</li>\r\n<li><strong>Bluetooth:</strong>&nbsp;A2DP, LE, apt-X, v4.2.</li>\r\n<li><strong>Hệ điều h&agrave;nh:</strong>&nbsp;Android 9 Pie (Android One).</li>\r\n<li><strong>K&iacute;ch thước:</strong>&nbsp;D&agrave;i 159.4 mm - Ngang 76.2 mm - D&agrave;y 8.6 mm.</li>\r\n<li><strong>Trọng lượng:</strong>&nbsp;178 g.</li>\r\n<li><strong>Chipset:</strong>&nbsp;Qualcomm Snapdragon 429 4 nh&acirc;n 64-bit.</li>\r\n<li><strong>Dung lượng pin:</strong>&nbsp;4000 mAh.</li>\r\n<li><strong>Hỗ trợ thẻ nhớ tối đa:</strong>&nbsp;MicroSD, hỗ trợ tối đa 400 GB.</li>\r\n<li><strong>Chuẩn m&agrave;n h&igrave;nh:</strong>&nbsp;6.2\" .</li>\r\n<li><strong>Camera trước:</strong>&nbsp;5 MP.</li>\r\n<li><strong>Chất liệu:</strong>&nbsp;Nhựa.</li>\r\n</ul>', '2020-01-07 00:47:13', 0);
INSERT INTO `prodetails` VALUES (26, 58, '<ul>\r\n<li><strong>Kết nối mạng:</strong>&nbsp;4G.</li>\r\n<li><strong>Bảo h&agrave;nh:</strong>&nbsp;12 th&aacute;ng.</li>\r\n<li><strong>Loại cổng sạc:</strong>&nbsp;MicroUSB.</li>\r\n<li><strong>RAM:</strong>&nbsp;2Gb.</li>\r\n<li><strong>Bộ nhớ trong:</strong>&nbsp;16GB.</li>\r\n<li><strong>H&atilde;ng sản xuất:</strong>&nbsp;Nokia.</li>\r\n<li><strong>Số SIM:</strong>&nbsp;2 SIM.</li>\r\n<li><strong>T&iacute;nh năng nổi trội:</strong>&nbsp;Pin khủng (&gt;3000 mAh).</li>\r\n<li><strong>Chip xử l&yacute;:</strong>&nbsp;MediaTek.</li>\r\n<li><strong>K&iacute;ch thước m&agrave;n h&igrave;nh:</strong>&nbsp;5.5 inch - 6.0 inch.</li>\r\n<li><strong>Xuất xứ:</strong>&nbsp;H&agrave;ng ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>Nơi bảo h&agrave;nh:</strong>&nbsp;Bảo h&agrave;nh ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>Phương thức bảo h&agrave;nh:</strong>&nbsp;Bảo h&agrave;nh điện tử.</li>\r\n<li><strong>Chip đồ họa (GPU):</strong>&nbsp;PowerVR GE8320.</li>\r\n<li><strong>Dung lượng pin:</strong>&nbsp;3000.</li>\r\n<li><strong>Camera trước:</strong>&nbsp;5 MP.</li>\r\n<li><strong>Độ ph&acirc;n giải m&agrave;n h&igrave;nh:</strong>&nbsp;HD+ (720 x 1520 Pixels).</li>\r\n<li><strong>Loại SIM:</strong>&nbsp;2 Nano SIM.</li>\r\n<li><strong>K&iacute;ch thước:</strong>&nbsp;D&agrave;i 146 mm - Ngang 70.6 mm - D&agrave;y 9.3 mm.</li>\r\n<li><strong>CPU:</strong>&nbsp;Mediatek MT6761 4 nh&acirc;n (Helio A22).</li>\r\n<li><strong>Chất liệu:</strong>&nbsp;Nhựa.</li>\r\n<li><strong>Wifi:</strong>&nbsp;Wi-Fi 802.11 b/g/n, Wi-Fi Direct, Wi-Fi hotspot.</li>\r\n<li><strong>Camera sau:</strong>&nbsp;13 MP.</li>\r\n<li><strong>Hệ điều h&agrave;nh:</strong>&nbsp;Android 9 Pie (Android One).</li>\r\n<li><strong>Bluetooth:</strong>&nbsp;LE, A2DP, v4.2.</li>\r\n<li><strong>C&ocirc;ng nghệ m&agrave;n h&igrave;nh:</strong>&nbsp;IPS LCD.</li>\r\n<li><strong>Trọng lượng:</strong>&nbsp;153 g.</li>\r\n</ul>', '2020-01-07 00:49:12', 0);
INSERT INTO `prodetails` VALUES (27, 59, '<ul>\r\n<li><strong>Kết nối mạng:</strong>&nbsp;2G, 3G, 4G.</li>\r\n<li><strong>RAM:</strong>&nbsp;3Gb.</li>\r\n<li><strong>Bảo h&agrave;nh:</strong>&nbsp;12 th&aacute;ng.</li>\r\n<li><strong>H&atilde;ng sản xuất:</strong>&nbsp;Nokia.</li>\r\n<li><strong>Loại cổng sạc:</strong>&nbsp;MicroUSB.</li>\r\n<li><strong>Số SIM:</strong>&nbsp;2 SIM.</li>\r\n<li><strong>Bộ nhớ trong:</strong>&nbsp;32GB.</li>\r\n<li><strong>Chip xử l&yacute;:</strong>&nbsp;MediaTek.</li>\r\n<li><strong>Xuất xứ:</strong>&nbsp;H&agrave;ng ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>K&iacute;ch thước m&agrave;n h&igrave;nh:</strong>&nbsp;5.5 inch - 6.0 inch.</li>\r\n<li><strong>Nơi bảo h&agrave;nh:</strong>&nbsp;Bảo h&agrave;nh ch&iacute;nh h&atilde;ng.</li>\r\n<li><strong>Phương thức bảo h&agrave;nh:</strong>&nbsp;Bảo h&agrave;nh điện tử.</li>\r\n<li><strong>Camera sau:</strong>&nbsp;13.0 + 5.0 MP(Dual Camera).</li>\r\n<li><strong>Camera trước:</strong>&nbsp;8.0 MP.</li>\r\n<li><strong>Dung lượng pin:</strong>&nbsp;3060 mAh.</li>\r\n<li><strong>Chip đồ họa (GPU):</strong>&nbsp;Mali-G72 MP3.</li>\r\n<li><strong>Độ ph&acirc;n giải m&agrave;n h&igrave;nh:</strong>&nbsp;720 x 1520 Pixels.</li>\r\n<li><strong>Jack (Input &amp; Output):</strong>&nbsp;3.5 mm.</li>\r\n<li><strong>Hệ điều h&agrave;nh:</strong>&nbsp;Android 8.1.</li>\r\n<li><strong>C&ocirc;ng nghệ m&agrave;n h&igrave;nh:</strong>&nbsp;8.0 MP.</li>\r\n<li><strong>Chipset:</strong>&nbsp;MediaTek Helio P60.</li>\r\n<li><strong>Thẻ nhớ ngo&agrave;i:</strong>&nbsp;MicroSD.</li>\r\n<li><strong>Cảm biến:</strong>&nbsp;V&acirc;n tay, &aacute;nh s&aacute;ng, tiệm cận, gia tốc kế.</li>\r\n<li><strong>Wifi:</strong>&nbsp;Wi-Fi 802.11 b/g/n, Dual-band, Wi-Fi Direct, Wi-Fi hotspot.</li>\r\n<li><strong>Hỗ trợ thẻ nhớ tối đa:</strong>&nbsp;256 GB.</li>\r\n<li><strong>Chất liệu:</strong>&nbsp;Khung kim loại + mặt k&iacute;nh cường lực.</li>\r\n<li><strong>CPU:</strong>&nbsp;2.0 GHz.</li>\r\n<li><strong>Loại SIM:</strong>&nbsp;Nano SIM.</li>\r\n<li><strong>K&iacute;ch thước:</strong>&nbsp;149.5 x 72 x 8 mm.</li>\r\n<li><strong>Bluetooth:</strong>&nbsp;v4.2.</li>\r\n<li><strong>Trọng lượng:</strong>&nbsp;160 g.</li>\r\n<li><strong>Chuẩn m&agrave;n h&igrave;nh:</strong>&nbsp;HD + 5.8\".</li>\r\n</ul>', '2020-01-07 00:50:58', 0);
INSERT INTO `prodetails` VALUES (28, 60, '<ul>\r\n<li>Ch&iacute;nh h&atilde;ng, Nguy&ecirc;n seal, Mới 100%</li>\r\n<li>Miễn ph&iacute; giao h&agrave;ng to&agrave;n quốc</li>\r\n<li>Thiết kế: Nguy&ecirc;n khối kim loại</li>\r\n<li>M&agrave;n h&igrave;nh: 6.21 inch Full HD+ (1080 x 2248 pixels)</li>\r\n<li>Camera Trước/Sau: 20MP / 12MP +12MP</li>\r\n<li>CPU: Snapdragon 845</li>\r\n<li>Bộ Nhớ: 128GB</li>\r\n<li>RAM: 6GB</li>\r\n<li>T&iacute;nh năng: Hệ thống nhận diện khu&ocirc;n mặt với camera hồng ngoại</li>\r\n</ul>', '2020-01-07 00:54:15', 0);
INSERT INTO `prodetails` VALUES (29, 61, '<ul>\r\n<li>M&agrave;n h&igrave;nh: IPS LCD, 6.53\", Full HD+</li>\r\n<li>Camera trước: 20 MP</li>\r\n<li>Camera sau:Ch&iacute;nh 64 MP &amp; Phụ 8 MP, 2 MP, 2 MP</li>\r\n<li>RAM: 6 GB</li>\r\n<li>Bộ nhớ trong: 128 GB</li>\r\n<li>CPU: Mediatek Helio G90T 8 nh&acirc;n</li>\r\n<li>Dung lượng pin: 4500 mAh, c&oacute; sạc nhanh</li>\r\n<li>Hệ điều h&agrave;nh: Android 9.0 (Pie)</li>\r\n<li>Thẻ SIM:2 SIM Nano</li>\r\n</ul>', '2020-01-07 00:57:59', 0);
INSERT INTO `prodetails` VALUES (30, 62, '<ul>\r\n<li>M&agrave;n h&igrave;nh: IPS LCD, 6.3\", Full HD+</li>\r\n<li>Camera trước: 13 MP</li>\r\n<li>Camera sau:Ch&iacute;nh 48 MP &amp; Phụ 8 MP, 2 MP, 2 MP</li>\r\n<li>RAM: 4 GB</li>\r\n<li>Bộ nhớ trong: 64 GB</li>\r\n<li>CPU: Qualcomm Snapdragon 665 8 nh&acirc;n</li>\r\n<li>Dung lượng pin: 4000 mAh, c&oacute; sạc nhanh</li>\r\n<li>Hệ điều h&agrave;nh: Android 9.0 (Pie)</li>\r\n<li>Thẻ SIM:2 SIM Nano</li>\r\n</ul>', '2020-01-07 01:00:01', 0);
INSERT INTO `prodetails` VALUES (31, 63, '<ul>\r\n<li>H&atilde;ng sản xuất: Apple</li>\r\n<li>Chủng loại: Macbook Pro 13 - 2019</li>\r\n<li>Part Number: MUHP2</li>\r\n<li>M&agrave;u sắc: Bạc (Silver) &ndash; Nh&ocirc;m nguy&ecirc;n khối</li>\r\n<li>Bộ vi xử l&yacute;: Intel Core i5 (1.4Ghz, 6MB cache)</li>\r\n<li>Bộ nhớ trong: 8GB LPDDR3</li>\r\n<li>Dung lượng tối đa: 16GB</li>\r\n<li>VGA: Intel Iris Plus 645</li>\r\n<li>Ổ cứng: 256GB SSD</li>\r\n<li>Bảo mật, C&ocirc;ng nghệ: TouchID</li>\r\n<li>M&agrave;n h&igrave;nh: Retina 13.3\" (2560x1600) IPS Led Backlit True Tone</li>\r\n</ul>', '2020-01-07 01:08:46', 0);
INSERT INTO `prodetails` VALUES (32, 64, '<ul>\r\n<li>H&atilde;ng sản xuất: Apple</li>\r\n<li>Chủng loại: Macbook Pro 15 &ndash; 2019</li>\r\n<li>M&agrave;u sắc: Bạc (Silver) &ndash; vỏ nh&ocirc;m khối</li>\r\n<li>Bộ vi xử l&yacute;: Intel Core i9 (2.3Ghz, 16MB cache)</li>\r\n<li>Bộ nhớ trong: 16GB &nbsp;DDR4</li>\r\n<li>Dung lượng tối đa: 32GB</li>\r\n<li>VGA: <strong>Radeon Pro 560X 4GB DDR5</strong></li>\r\n<li>Ổ cứng: 512GB SSD</li>\r\n<li>M&agrave;n h&igrave;nh: 15.4\" (2880x1800)</li>\r\n</ul>', '2020-01-07 01:13:58', 0);
INSERT INTO `prodetails` VALUES (33, 65, '<ul>\r\n<li>H&atilde;ng sản xuất: Apple</li>\r\n<li>Chủng loại: Macbook Pro 15 &ndash; 2019</li>\r\n<li>M&agrave;u sắc: Bạc (Silver) &ndash; vỏ nh&ocirc;m khối</li>\r\n<li>Bộ vi xử l&yacute;: Intel Core i9 (2.3Ghz, 16MB cache)</li>\r\n<li>Bộ nhớ trong: 16GB &nbsp;DDR4</li>\r\n<li>Dung lượng tối đa: 32GB</li>\r\n<li>VGA: Radeon Pro 560X 4GB DDR5</li>\r\n<li>Ổ cứng: 512GB SSD</li>\r\n<li>M&agrave;n h&igrave;nh: 15.4\" (2880x1800)</li>\r\n</ul>', '2020-01-07 01:16:26', 0);

-- ----------------------------
-- Table structure for products
-- ----------------------------
DROP TABLE IF EXISTS `products`;
CREATE TABLE `products`  (
  `ProID` int(10) UNSIGNED NOT NULL AUTO_INCREMENT,
  `Item` int(11) NULL DEFAULT NULL,
  `ProName` varchar(255) CHARACTER SET utf8 COLLATE utf8_unicode_ci NULL DEFAULT NULL,
  `PriceBegin` double NULL DEFAULT NULL,
  `PriceStep` double NULL DEFAULT NULL,
  `PriBuyNow` double NULL DEFAULT NULL,
  `TimeBegin` datetime(0) NULL DEFAULT NULL,
  `TimeEnd` datetime(0) NULL DEFAULT NULL,
  `SellerID` int(11) NULL DEFAULT NULL,
  `StatusID` int(11) NULL DEFAULT 0,
  `AutoReset` int(11) NULL DEFAULT 0,
  `StatusAcceptFromAdmin` int(11) NULL DEFAULT 1,
  PRIMARY KEY (`ProID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 66 CHARACTER SET = utf8 COLLATE = utf8_unicode_ci ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of products
-- ----------------------------
INSERT INTO `products` VALUES (34, 4, 'Dell Vostro 3580', 50000, 50000, 15000000, '2019-12-30 16:59:41', '2020-01-06 12:40:00', 14, 1, 1, 0);
INSERT INTO `products` VALUES (37, 4, 'Laptop Dell Inspiron 3480 NT4X01', 10000000, 100000, 11500000, '2020-01-06 23:59:00', '2020-01-07 23:57:00', 14, 0, 1, 0);
INSERT INTO `products` VALUES (38, 4, 'Laptop Dell Inspiron 7490 (N4I5106W)', 25000000, 200000, 27000000, '2020-01-07 00:05:23', '2020-01-09 00:05:00', 14, 0, 1, 0);
INSERT INTO `products` VALUES (39, 4, 'Laptop Dell Gaming G3 3590 N5I5517W ', 20500000, 150000, 22000000, '2020-01-07 00:07:16', '2020-01-09 00:06:00', 14, 0, 0, 0);
INSERT INTO `products` VALUES (40, 4, 'Laptop Dell Inspiron 5593A (P90F002N93A)', 21000000, 50000, 22000000, '2020-01-07 00:09:08', '2020-01-09 00:08:00', 14, 0, 0, 0);
INSERT INTO `products` VALUES (41, 4, 'Laptop Dell Dell Vostro 5481 70175946', 22000000, 200000, 24000000, '2020-01-07 00:11:01', '2020-01-10 00:10:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (42, 4, 'Laptop Dell Vostro 5590 (HYXT91)', 19500000, 150000, 21000000, '2020-01-07 00:12:44', '2020-01-08 00:12:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (43, 4, 'Laptop Dell Inspiron 7490 (6RKVN1)', 30000000, 350000, 33000000, '2020-01-07 00:14:50', '2020-01-09 00:14:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (44, 4, 'Laptop Dell Inspiron 3493 (N4I7131W)', 18500000, 150000, 21000000, '2020-01-07 00:16:46', '2020-01-09 00:16:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (45, 4, 'Laptop Dell Vostro 3590 (V5I3505W)', 11000000, 150000, 11500000, '2020-01-07 00:19:16', '2020-01-08 00:18:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (46, 4, 'Laptop Dell Vostro 3590 (GRMGK1) ', 11500000, 100000, 12700000, '2020-01-07 00:20:27', '2020-01-09 00:20:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (47, 4, 'Laptop Dell Dell Vostro 5481 70175946', 22500000, 200000, 24000000, '2020-01-07 00:22:02', '2020-01-09 00:21:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (48, 4, 'Laptop Dell Vostro 3490 (70196714) ', 12900000, 150000, 13500000, '2020-01-07 00:24:38', '2020-01-10 00:24:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (49, 4, 'Laptop Dell Vostro V5481A P92G001', 16000000, 200000, 17500000, '2020-01-07 00:27:02', '2020-01-08 00:26:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (50, 4, 'Laptop Dell Vostro 3468 70181693', 7500000, 200000, 8500000, '2020-01-07 00:29:41', '2020-01-09 00:29:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (51, 4, 'Laptop Dell Inspiron 3581A (P75F005)', 9000000, 100000, 10000000, '2020-01-07 00:31:10', '2020-01-09 00:30:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (52, 1, 'Samsung Galaxy M10', 1500000, 50000, 2500000, '2020-01-07 00:36:45', '2020-01-09 00:36:00', 14, 0, 1, 1);
INSERT INTO `products` VALUES (53, 1, 'Samsung Galaxy Note 9 512GB', 16500000, 200000, 18000000, '2020-01-07 00:39:40', '2020-01-09 00:39:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (54, 1, 'Samsung Galaxy A9 - 2018 ', 8500000, 350000, 10000000, '2020-01-07 00:41:38', '2020-01-08 00:41:00', 14, 0, 1, 1);
INSERT INTO `products` VALUES (55, 1, 'Samsung S10 Plus 128GB', 22000000, 350000, 24000000, '2020-01-07 00:43:09', '2020-01-10 00:42:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (56, 2, 'Nokia 230 Dual Sim', 850000, 50000, 1000000, '2020-01-07 00:45:27', '2020-01-08 00:44:00', 14, 0, 1, 1);
INSERT INTO `products` VALUES (57, 2, 'Nokia 3.2 16GB', 1500000, 150000, 2350000, '2020-01-07 00:47:13', '2020-01-09 00:46:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (58, 2, 'Nokia 2.2 16GB|2GB', 1250000, 50000, 1750000, '2020-01-07 00:49:12', '2020-01-08 00:48:00', 14, 0, 1, 1);
INSERT INTO `products` VALUES (59, 2, 'Nokia 5.1 Plus', 1800000, 150000, 2300000, '2020-01-07 00:50:58', '2020-01-08 00:50:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (60, 3, 'Xiaomi Mi 8 (128GB/6GB)', 10000000, 50000, 12500000, '2020-01-07 00:54:15', '2020-01-08 00:53:00', 14, 0, 1, 1);
INSERT INTO `products` VALUES (61, 3, 'Xiaomi Redmi Note 8 Pro (6GB/128GB)', 5000000, 200000, 6000000, '2020-01-07 00:57:59', '2020-01-09 00:57:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (62, 3, 'Xiaomi Redmi Note 8 (4GB/64GB) ', 3500000, 100000, 4000000, '2020-01-07 01:00:01', '2020-01-09 00:59:00', 14, 0, 1, 1);
INSERT INTO `products` VALUES (63, 6, 'Apple Macbook Pro 13 Touchbar (MUHR2) ', 34000000, 500000, 36500000, '2020-01-07 01:08:46', '2020-01-08 01:03:00', 14, 0, 1, 1);
INSERT INTO `products` VALUES (64, 6, 'Apple Macbook Pro 15 Touchbar (MV932)', 50000000, 1500000, 65000000, '2020-01-07 01:13:58', '2020-01-09 01:10:00', 14, 0, 0, 1);
INSERT INTO `products` VALUES (65, 6, 'Apple Macbook Pro 13 Touchbar (MV9A2)', 45000000, 500000, 48000000, '2020-01-07 01:16:26', '2020-01-10 01:15:00', 14, 0, 0, 1);

-- ----------------------------
-- Table structure for proimage
-- ----------------------------
DROP TABLE IF EXISTS `proimage`;
CREATE TABLE `proimage`  (
  `ID` int(11) NOT NULL AUTO_INCREMENT,
  `ProID` int(11) NULL DEFAULT NULL,
  `imgURL` text CHARACTER SET utf8 COLLATE utf8_bin NULL,
  PRIMARY KEY (`ID`) USING BTREE
) ENGINE = InnoDB AUTO_INCREMENT = 134 CHARACTER SET = utf8 COLLATE = utf8_bin ROW_FORMAT = Dynamic;

-- ----------------------------
-- Records of proimage
-- ----------------------------
INSERT INTO `proimage` VALUES (13, 34, 'fbe94b06d95a.png');
INSERT INTO `proimage` VALUES (14, 34, '2e185850-2aeb-11ea-9260-fbe94b06d95a.png');
INSERT INTO `proimage` VALUES (15, 34, '2e18cd80-2aeb-11ea-9260-fbe94b06d95a.png');
INSERT INTO `proimage` VALUES (16, 37, 'f0ec3350-30a5-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (17, 37, 'f0ecf6a0-30a5-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (18, 37, 'f0ed1db0-30a5-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (19, 37, 'f0eca880-30a5-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (20, 38, 'ce42cc50-30a6-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (21, 38, 'ce423010-30a6-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (22, 38, 'ce427e30-30a6-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (23, 38, 'ce42a540-30a6-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (24, 39, '15b72fe0-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (25, 39, '15b6e1c0-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (26, 39, '15b7a510-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (27, 39, '15b708d0-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (28, 39, '15b756f0-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (29, 40, '5ac93970-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (30, 40, '5ac96080-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (31, 40, '5ac9fcc0-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (32, 40, '5ac9aea0-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (33, 40, '5ac9d5b0-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (34, 41, 'a0c5ca10-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (35, 41, 'a0c5f120-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (36, 41, 'a0c61830-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (37, 41, 'a0c63f40-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (38, 42, 'd2cd4100-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (39, 42, 'd2cd4101-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (40, 42, 'd2cd6810-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (41, 42, 'd2cd8f20-30a7-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (42, 43, '20ad78e0-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (43, 43, '20ad03b0-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (44, 43, '20ac4060-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (45, 43, '20ac8e80-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (46, 43, '20acdca0-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (47, 43, '20acdca1-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (48, 44, '62e95800-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (49, 44, '62e9a620-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (50, 44, '62e9cd30-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (51, 44, '62e9f440-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (52, 44, '62ea1b50-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (53, 45, 'ba746290-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (54, 45, 'ba7489a0-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (55, 45, 'ba74b0b0-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (56, 45, 'ba74fed0-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (57, 46, 'ed26e690-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (58, 46, 'ed26e691-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (59, 46, 'ed270da0-30a8-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (60, 47, '2dd6ce80-30a9-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (61, 47, '2dd6f590-30a9-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (62, 47, '2dd71ca0-30a9-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (63, 47, '2dd743b0-30a9-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (64, 48, '77c818f0-30a9-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (65, 48, '77c86710-30a9-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (66, 48, '77c88e20-30a9-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (67, 49, 'e1f7a150-30a9-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (68, 49, 'e1f6de00-30a9-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (69, 49, 'e1f75330-30a9-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (70, 49, 'e1f77a40-30a9-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (71, 50, '307ca4b0-30aa-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (72, 50, '307d19e0-30aa-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (73, 50, '307d19e1-30aa-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (74, 50, '307d40f0-30aa-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (75, 51, '657a9f50-30aa-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (76, 51, '657aed70-30aa-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (77, 51, '657ac660-30aa-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (78, 51, '657b1480-30aa-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (79, 52, '3aee5460-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (80, 52, '3aeea280-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (81, 52, '3aee2d50-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (82, 52, '3aee0640-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (83, 52, '3aee7b70-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (84, 53, '960b3840-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (85, 53, '960b5f50-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (86, 53, '960b8660-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (87, 54, 'de40f000-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (88, 54, 'de571010-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (89, 54, 'de573720-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (90, 54, 'de575e30-30ab-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (91, 55, '11f330c0-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (92, 55, '11f3a5f0-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (93, 55, '11f357d0-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (94, 56, '6cbd87d0-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (95, 56, '6cbdaee0-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (96, 56, '6d8b8630-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (97, 56, '6d8bad40-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (98, 57, 'ac86e050-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (99, 57, 'ac86e051-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (100, 57, 'ac92c730-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (101, 57, 'ac92ee40-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (102, 58, 'ed362c00-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (103, 58, 'edc573b0-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (104, 58, 'edc5e8e0-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (105, 58, 'edc65e10-30ac-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (106, 59, '30a3fb70-30ad-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (107, 59, '30a42280-30ad-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (108, 59, '30b33db0-30ad-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (109, 59, '30b364c0-30ad-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (110, 60, 'caacd020-30ad-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (111, 60, 'caacf730-30ad-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (112, 60, 'caacf731-30ad-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (113, 61, '35affc30-30ae-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (114, 61, '35b02340-30ae-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (115, 61, '35b04a50-30ae-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (116, 62, '77218670-30ae-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (117, 62, '77215f60-30ae-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (118, 62, '7721d490-30ae-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (119, 63, 'ae75fec0-30af-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (120, 63, 'ae7625d0-30af-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (121, 63, 'ae769b00-30af-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (122, 63, 'ae7673f0-30af-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (123, 63, 'ae764ce0-30af-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (124, 64, '6633a760-30b0-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (125, 64, '6633f581-30b0-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (126, 64, '66341c90-30b0-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (127, 64, '6633ce70-30b0-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (128, 64, '6633f580-30b0-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (129, 65, 'bae83960-30b0-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (130, 65, 'bae83961-30b0-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (131, 65, 'bae86070-30b0-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (132, 65, 'bae8ae90-30b0-11ea-a8d4-95cdb81cbe72.png');
INSERT INTO `proimage` VALUES (133, 65, 'bae8d5a0-30b0-11ea-a8d4-95cdb81cbe72.png');

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
