-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Nov 09, 2022 at 08:08 AM
-- Server version: 10.4.21-MariaDB
-- PHP Version: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `QLDL`
--

-- --------------------------------------------------------

--
-- Table structure for table `Users`
--

CREATE TABLE `Users` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `roleid` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `Users`
--

INSERT INTO `Users` (`id`, `email`, `password`, `name`, `address`, `roleid`, `phone`, `createdAt`, `updatedAt`) VALUES
(21, 'admin@gmail.com', '$2a$10$Nw5g8XjpXsy8zgP1xLV2Vutqa4EEGy2p/k97AL64tGj7L3xRn3Tme', 'Anh', 'Nam Định', 'admin', '0987647876', '2022-11-04 10:01:46', '2022-11-04 10:01:46'),
(23, '12@gmail.com', '$2a$10$9Tw2b/htwVhGtdOoqkjONeN6JP/Hr6pLnCBk1t8kNkIg1hAQ5GToO', 'Anh', 'Hải Dương', 'staff', '0987647876', '2022-11-08 06:59:41', '2022-11-08 06:59:41'),
(24, 'a@gmail.com', '$2a$10$9Tw2b/htwVhGtdOoqkjONeBJa.s3M5E7v2YyeOLnNAHtrIY2bXDR.', 'abc', 'Hòa Bình', 'staff', '011011119998', '2022-11-08 07:03:01', '2022-11-08 07:03:01'),
(26, 'mothai@gmail.yuy', '$2a$10$9Tw2b/htwVhGtdOoqkjONeSWiFN3sCY3L6KbD4kdFsHnBL/rwxt4a', 'mothai', 'Quảng Ninh', 'staff', '09877898768', '2022-11-08 07:08:39', '2022-11-08 07:08:39'),
(27, 'mothai@gmail.com.vn', '$2a$10$9Tw2b/htwVhGtdOoqkjONe/rrfUPzfaDDRy3GsARE4HwQJbERNnVG', 'mothai', 'Quảng Ninh', 'staff', '09877898768', '2022-11-08 07:09:23', '2022-11-08 07:09:23'),
(28, 'mothai@com.vn', '$2a$10$rhnd2I7LoZnQD9m5R9Q9ZOi63AiYgrKViFCkbzT/ZMkGhHe/eOTke', 'mothai', 'Hà Nội', 'staff', '098709090', '2022-11-08 14:22:08', '2022-11-08 14:22:08'),
(29, 'anhvt@gmail.com', '$2a$10$4qb6NrqJOq5lKKgbZfJy.OWk/gxMWHnvd/HXSHELjSucVn9UZNUiS', 'AnhAnh', 'Hải Hậu', 'admin', '19001009', '2022-11-09 04:02:38', '2022-11-09 04:02:38');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Users`
--
ALTER TABLE `Users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Users`
--
ALTER TABLE `Users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
