SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";

--
-- Database: `cpw _sac`
--

-- --------------------------------------------------------

--
-- Table structure for table `agency`
--

CREATE TABLE `agency` (
  `AgencyID` int(50) NOT NULL COMMENT 'รหัสของหน่วยงาน เช่น 003- ฝ่ายปกครอง',
  `Agency Name` varchar(100) NOT NULL COMMENT 'ชื่อของหน่วยงานภายในโรงเรียน',
  `UserID` int(10) NOT NULL COMMENT 'รหัสประจำตัวสมาชิกในหน่วยงาน',
  `username` varchar(100) NOT NULL COMMENT 'ชื่อของเจ้าหน้าที่ในหน่วยงาน'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `agency`
--
ALTER TABLE `agency`
  ADD PRIMARY KEY (`AgencyID`);
COMMIT;

