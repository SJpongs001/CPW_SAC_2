
SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";
--
-- Database: `cpw _sac`
--

-- --------------------------------------------------------

--
-- Table structure for table `mainchat`
--

CREATE TABLE `mainchat` (
  `MessageID` int(20) NOT NULL COMMENT 'รหัสข้อความที่ถูกส่งมาในระบบ',
  `Date` date NOT NULL COMMENT 'วันที่ ที่ข้อความถูกส่งเข้ามาในระบบ',
  `Message` varchar(255) NOT NULL COMMENT 'ข้อความ',
  `Image` longblob NOT NULL COMMENT 'ข้อความประเภทรูปภาพ',
  `MessageGroup` varchar(50) NOT NULL COMMENT 'ประเภทของข้อความ ว่าเป็นรูปแบบคำถาม หรือการเเสดงความคิดเห็น',
  `Contactor` varchar(100) NOT NULL COMMENT 'ชื่อผู้ติดต่อ',
  `adminID` int(100) NOT NULL COMMENT 'ชื่อแอดมินที่เป็นคนตอบคำถาม',
  `AgencyID` varchar(100) NOT NULL COMMENT 'ข้อความนี้ถูกส่งออกไปที่หน่วยงานไหนบ้าง',
  `source` varchar(100) NOT NULL COMMENT 'ข้อความนี้มาจากที่มาใด'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci COMMENT='ข้อมูลตรางแชทหลักในระบบ CPW-Sac';

--
-- Indexes for dumped tables
--

--
-- Indexes for table `mainchat`
--
ALTER TABLE `mainchat`
  ADD PRIMARY KEY (`MessageID`);
COMMIT;

