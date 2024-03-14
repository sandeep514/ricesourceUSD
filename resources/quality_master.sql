-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 22, 2024 at 11:04 AM
-- Server version: 8.0.21-0ubuntu0.20.04.4
-- PHP Version: 7.4.3-4ubuntu2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `sntc_rice_app_staging`
--

-- --------------------------------------------------------

--
-- Table structure for table `quality_master`
--

CREATE TABLE `quality_master` (
  `id` int NOT NULL,
  `quality` varchar(256) NOT NULL,
  `quality_name` varchar(256) NOT NULL,
  `quality_type` varchar(256) NOT NULL,
  `quality_type_status` int NOT NULL,
  `status` int NOT NULL DEFAULT '1',
  `order` int DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `quality_master`
--

INSERT INTO `quality_master` (`id`, `quality`, `quality_name`, `quality_type`, `quality_type_status`, `status`, `order`, `created_at`, `updated_at`) VALUES
(1, '1121', 'Creamy Parboiled  (Conventional) ', 'basmati', 1, 1, 1, '2024-02-08 10:19:52', NULL),
(2, '1121', 'Creamy Parboiled (EU Compliance) ', 'basmati', 1, 1, 2, '2024-02-08 10:19:52', NULL),
(3, '1121', 'Creamy Parboiled (US Standards) ', 'basmati', 1, 1, 3, '2024-02-08 10:19:52', NULL),
(4, '1121', 'Golden Parboiled  (Conventional) ', 'basmati', 1, 1, 4, '2024-02-08 10:19:52', NULL),
(5, '1121', 'Golden Parboiled (EU Compliance) ', 'basmati', 1, 1, 5, '2024-02-08 10:19:52', NULL),
(6, '1121', 'Golden Parboiled (US Standards) ', 'basmati', 1, 1, 6, '2024-02-08 10:19:52', NULL),
(7, '1121', 'Steam  (Conventional) ', 'basmati', 1, 1, 7, '2024-02-08 10:19:52', NULL),
(8, '1121', 'Steam (EU Compliance) ', 'basmati', 1, 1, 8, '2024-02-08 10:19:52', NULL),
(9, '1121', 'Steam (US Standards) ', 'basmati', 1, 1, 9, '2024-02-08 10:19:52', NULL),
(10, '1121', 'Raw  (Conventional)', 'basmati', 1, 1, 10, '2024-02-08 10:19:52', NULL),
(11, '1121', ' Brown Raw (Conventional)', 'basmati', 1, 1, 11, '2024-02-08 10:19:52', NULL),
(12, '1121', ' Brown Creamy Parboiled (Conventional)', 'basmati', 1, 1, 12, '2024-02-08 10:19:52', NULL),
(13, '1509', 'Creamy Parboiled (Conventional) ', 'basmati', 1, 1, 13, '2024-02-08 10:19:52', NULL),
(14, '1509', 'Creamy Parboiled (EU Compliance) ', 'basmati', 1, 1, 14, '2024-02-08 10:19:52', NULL),
(15, '1509', 'Creamy Parboiled (US Standards) ', 'basmati', 1, 1, 15, '2024-02-08 10:19:52', NULL),
(16, '1509', 'Golden Parboiled (Conventional) ', 'basmati', 1, 1, 16, '2024-02-08 10:19:52', NULL),
(17, '1509', 'Golden Parboiled (EU Compliance) ', 'basmati', 1, 1, 17, '2024-02-08 10:19:52', NULL),
(18, '1509', 'Golden Parboiled (US Standards) ', 'basmati', 1, 1, 18, '2024-02-08 10:19:52', NULL),
(19, '1509', 'Steam (Conventional) ', 'basmati', 1, 1, 19, '2024-02-08 10:19:52', NULL),
(20, '1509', 'Steam (EU Compliance) ', 'basmati', 1, 1, 20, '2024-02-08 10:19:52', NULL),
(21, '1509', 'Steam (US Standards) ', 'basmati', 1, 1, 21, '2024-02-08 10:19:52', NULL),
(22, '1509', 'Raw  (Conventional)', 'basmati', 1, 1, 22, '2024-02-08 10:19:52', NULL),
(23, '1509', ' Brown Raw (Conventional)', 'basmati', 1, 1, 23, '2024-02-08 10:19:52', NULL),
(24, '1509', ' Brown Creamy Parboiled (Conventional)', 'basmati', 1, 1, 24, '2024-02-08 10:19:52', NULL),
(25, '1401', 'Creamy Parboiled (Conventional) ', 'basmati', 1, 1, 25, '2024-02-08 10:19:52', NULL),
(26, '1401', 'Golden Parboiled  (Conventional)', 'basmati', 1, 1, 26, '2024-02-08 10:19:52', NULL),
(27, '1401', 'Steam (Conventional)', 'basmati', 1, 1, 27, '2024-02-08 10:19:52', NULL),
(28, '1401', 'Raw  (Conventional)', 'basmati', 1, 1, 28, '2024-02-08 10:19:52', NULL),
(29, '1401', ' Brown Raw (Conventional)', 'basmati', 1, 1, 29, '2024-02-08 10:19:52', NULL),
(30, '1401', ' Brown Creamy Parboiled (Conventional)', 'basmati', 1, 1, 30, '2024-02-08 10:19:52', NULL),
(31, 'Pusa', 'Creamy Parboiled (Conventional) ', 'basmati', 1, 1, 31, '2024-02-08 10:19:52', NULL),
(32, 'Pusa', 'Creamy Parboiled (EU Compliance) ', 'basmati', 1, 1, 32, '2024-02-08 10:19:52', NULL),
(33, 'Pusa', 'Creamy Parboiled (US Standards) ', 'basmati', 1, 1, 33, '2024-02-08 10:19:52', NULL),
(34, 'Pusa', 'Golden Parboiled (Conventional) ', 'basmati', 1, 1, 34, '2024-02-08 10:19:52', NULL),
(35, 'Pusa', 'Golden Parboiled (EU Compliance) ', 'basmati', 1, 1, 35, '2024-02-08 10:19:52', NULL),
(36, 'Pusa', 'Golden Parboiled (US Standards) ', 'basmati', 1, 1, 36, '2024-02-08 10:19:52', NULL),
(37, 'Pusa', 'Steam (Conventional) ', 'basmati', 1, 1, 37, '2024-02-08 10:19:52', NULL),
(38, 'Pusa', 'Steam (EU Compliance) ', 'basmati', 1, 1, 38, '2024-02-08 10:19:52', NULL),
(39, 'Pusa', 'Steam (US Standards) ', 'basmati', 1, 1, 39, '2024-02-08 10:19:52', NULL),
(40, 'Pusa', 'Raw (Conventional)', 'basmati', 1, 1, 40, '2024-02-08 10:19:52', NULL),
(41, 'Pusa', ' Brown (Conventional)', 'basmati', 1, 1, 41, '2024-02-08 10:19:52', NULL),
(42, 'Pusa', ' Brown Creamy Parboiled (Conventional)', 'basmati', 1, 1, 42, '2024-02-08 10:19:52', NULL),
(43, 'Traditional', 'Creamy Parboiled (Conventional)', 'basmati', 1, 1, 43, '2024-02-08 10:19:52', NULL),
(44, 'Traditional', 'Creamy Parboiled (EU Compliance) ', 'basmati', 1, 1, 44, '2024-02-08 10:19:52', NULL),
(45, 'Traditional', 'Creamy Parboiled (US Standards) ', 'basmati', 1, 1, 45, '2024-02-08 10:19:52', NULL),
(46, 'Traditional', 'Golden Parboiled (Conventional)', 'basmati', 1, 1, 46, '2024-02-08 10:19:52', NULL),
(47, 'Traditional', 'Steam (Conventional)', 'basmati', 1, 1, 47, '2024-02-08 10:19:52', NULL),
(48, 'Traditional', 'Raw (Conventional)', 'basmati', 1, 1, 48, '2024-02-08 10:19:52', NULL),
(49, 'Traditional', 'Raw (EU Compliance) ', 'basmati', 1, 1, 49, '2024-02-08 10:19:52', NULL),
(50, 'Traditional', 'Raw (US Standards) ', 'basmati', 1, 1, 50, '2024-02-08 10:19:52', NULL),
(51, 'Traditional', ' Brown (Raw)', 'basmati', 1, 1, 51, '2024-02-08 10:19:52', NULL),
(52, 'Traditional', 'Brown Raw (EU Compliance) ', 'basmati', 1, 1, 52, '2024-02-08 10:19:52', NULL),
(53, 'Traditional', 'Brown Raw (US Standards) ', 'basmati', 1, 1, 53, '2024-02-08 10:19:52', NULL),
(54, 'Traditional', 'Brown Raw (Organic)', 'basmati', 1, 1, 54, '2024-02-08 10:19:52', NULL),
(55, 'Traditional', ' Brown Creamy Parboiled (Conventional)', 'basmati', 1, 1, 55, '2024-02-08 10:19:52', NULL),
(56, '1718', 'Creamy Parboiled (Conventional)', 'basmati', 1, 1, 56, '2024-02-08 10:19:52', NULL),
(57, '1718', 'Creamy Parboiled (EU Compliance) ', 'basmati', 1, 1, 57, '2024-02-08 10:19:52', NULL),
(58, '1718', 'Creamy Parboiled (US Standards) ', 'basmati', 1, 1, 58, '2024-02-08 10:19:52', NULL),
(59, '1718', 'Golden Parboiled (Conventional)', 'basmati', 1, 1, 59, '2024-02-08 10:19:52', NULL),
(60, '1718', 'Steam (Conventional)', 'basmati', 1, 1, 60, '2024-02-08 10:19:52', NULL),
(61, '1718', 'Steam (EU Compliance) ', 'basmati', 1, 1, 61, '2024-02-08 10:19:52', NULL),
(62, '1718', 'Steam (US Standards) ', 'basmati', 1, 1, 62, '2024-02-08 10:19:52', NULL),
(63, '1718', 'Raw  (Conventional)', 'basmati', 1, 1, 63, '2024-02-08 10:19:52', NULL),
(64, 'Sugandha', 'Creamy Parboiled ', 'non-basmati', 2, 1, 64, '2024-02-08 10:19:52', NULL),
(65, 'Sugandha', 'Golden Parboiled ', 'non-basmati', 2, 1, 65, '2024-02-08 10:19:52', NULL),
(66, 'Sugandha', 'Steam  ', 'non-basmati', 2, 1, 66, '2024-02-08 10:19:52', NULL),
(67, 'Sugandha', 'Raw  ', 'non-basmati', 2, 1, 67, '2024-02-08 10:19:52', NULL),
(68, 'Sharbati', 'Creamy Parboiled ', 'non-basmati', 2, 1, 68, '2024-02-08 10:19:52', NULL),
(69, 'Sharbati', 'Golden Parboiled  ', 'non-basmati', 2, 1, 69, '2024-02-08 10:19:52', NULL),
(70, 'Sharbati', 'Steam  ', 'non-basmati', 2, 1, 70, '2024-02-08 10:19:52', NULL),
(71, 'Sharbati', 'Raw  ', 'non-basmati', 2, 1, 71, '2024-02-08 10:19:52', NULL),
(72, 'PR-11/14 ', 'Creamy Parboiled ', 'non-basmati', 2, 1, 72, '2024-02-08 10:19:52', NULL),
(73, 'PR-11/14 ', 'Golden Parboiled ', 'non-basmati', 2, 1, 73, '2024-02-08 10:19:52', NULL),
(74, 'PR-11/14 ', 'Steam  ', 'non-basmati', 2, 1, 74, '2024-02-08 10:19:52', NULL),
(75, 'PR-11/14 ', 'Raw  ', 'non-basmati', 2, 1, 75, '2024-02-08 10:19:52', NULL),
(76, 'PR-06/47 (6.4MM)', 'Creamy Parboiled Rice', 'non-basmati', 2, 1, 76, '2024-02-08 10:19:52', NULL),
(77, 'PR-06/47 (6.4MM)', 'Golden Parboiled  ', 'non-basmati', 2, 1, 77, '2024-02-08 10:19:52', NULL),
(78, 'PR-06/47 (6.4MM)', 'Steam  ', 'non-basmati', 2, 1, 78, '2024-02-08 10:19:52', NULL),
(79, 'PR-06/47 (6.4MM)', 'Raw  ', 'non-basmati', 2, 1, 79, '2024-02-08 10:19:52', NULL),
(80, 'RH-10', 'Creamy Parboiled ', 'non-basmati', 2, 1, 80, '2024-02-08 10:19:52', NULL),
(81, 'RH-10', 'Golden Parboiled', 'non-basmati', 2, 1, 81, '2024-02-08 10:19:52', NULL),
(82, 'RH-10', 'Steam  ', 'non-basmati', 2, 1, 82, '2024-02-08 10:19:52', NULL),
(83, 'Sona Masoori ', 'Steam Rice (North)', 'non-basmati', 2, 1, 83, '2024-02-08 10:19:52', NULL),
(84, 'Sona Masoori ', 'Raw Rice (North)', 'non-basmati', 2, 1, 84, '2024-02-08 10:19:52', NULL),
(85, 'Sona Masoori ', 'Steam Rice (South)', 'non-basmati', 2, 1, 85, '2024-02-08 10:19:52', NULL),
(86, 'Sona Masoori', 'Raw Rice (South)', 'non-basmati', 2, 1, 86, '2024-02-08 10:19:52', NULL),
(87, 'Swarna Mansoori', 'Steam', 'non-basmati', 2, 1, 88, '2024-02-08 10:19:52', NULL),
(88, 'Long Grain', 'Parboiled Rice 5%', 'non-basmati', 2, 1, 89, '2024-02-08 10:19:52', NULL),
(89, 'Long Grain', ' Parboiled Rice 10%', 'non-basmati', 2, 1, 90, '2024-02-08 10:19:52', NULL),
(90, 'Long Grain', ' Parboiled Rice 25%', 'non-basmati', 2, 1, 91, '2024-02-08 10:19:52', NULL),
(91, 'Long Grain', 'White Rice 5%', 'non-basmati', 2, 1, 92, '2024-02-08 10:19:52', NULL),
(92, 'Long Grain', 'White Rice 10%', 'non-basmati', 2, 1, 93, '2024-02-08 10:19:52', NULL),
(93, 'Long Grain', 'White Rice 25%', 'non-basmati', 2, 1, 94, '2024-02-08 10:19:52', NULL),
(94, 'Broken ', 'Raw Rice 100%', 'non-basmati', 2, 1, 95, '2024-02-08 10:19:52', NULL),
(95, 'IR 8 ', 'Water Color Parboiled Rice 5%', 'non-basmati', 2, 1, 96, '2024-02-08 10:19:52', NULL),
(96, 'IR 8 ', 'Creamy Parboiled Rice 5%', 'non-basmati', 2, 1, 97, '2024-02-08 10:19:52', NULL),
(97, 'IR 8', ' Raw Rice 5%', 'non-basmati', 2, 1, 98, '2024-02-08 10:19:52', NULL),
(98, 'GR-11', 'Creamy Parboiled Rice 5%', 'non-basmati', 2, 1, 99, '2024-02-08 10:19:52', NULL),
(99, 'Swarna', ' Raw Rice 5%', 'non-basmati', 2, 1, 100, '2024-02-08 10:19:52', NULL),
(100, 'Swarna', ' Raw Rice 25%', 'non-basmati', 2, 1, 101, '2024-02-08 10:19:52', NULL),
(101, 'Swarna ', 'Creamy Rice ', 'non-basmati', 2, 1, 102, '2024-02-08 10:19:52', NULL),
(102, 'Swarna ', 'Creamy Rice 25%', 'non-basmati', 2, 1, 103, '2024-02-08 10:19:52', NULL),
(103, 'Kalizeera (New Crop)', 'Raw Rice (WB)', 'non-basmati', 2, 1, 104, '2024-02-08 10:19:52', NULL),
(104, 'Kalizeera (Aged 2 Years)', 'Raw Rice (WB)', 'non-basmati', 2, 1, 105, '2024-02-08 10:19:52', NULL),
(105, 'Aromatic Kalizeera', 'Raw Rice (WB)', 'non-basmati', 2, 1, 106, '2024-02-08 10:19:52', NULL),
(106, 'Pooni', ' Rice', 'non-basmati', 2, 1, 107, '2024-02-08 10:19:52', NULL),
(107, 'Red Matta', ' Rice', 'non-basmati', 2, 1, 108, '2024-02-08 10:19:52', NULL),
(108, 'Kranti (Round Rice)', ' Raw Rice ', 'non-basmati', 2, 1, 109, '2024-02-08 10:19:52', NULL),
(109, 'Broken ', 'Parboiled Rice 100%', 'non-basmati', 2, 1, 110, '2024-02-08 10:19:52', NULL),
(110, 'Swarna ', 'Steam Rice', 'non-basmati', 2, 1, 111, '2024-02-08 10:19:52', NULL),
(111, 'Idli', 'Rice', 'non-basmati', 2, 1, 112, '2024-02-08 10:19:52', NULL),
(112, 'Sona Masoori ', 'Parboiled Rice ', 'non-basmati', 2, 1, 87, '2024-02-08 10:19:52', NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `quality_master`
--
ALTER TABLE `quality_master`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `quality_master`
--
ALTER TABLE `quality_master`
  MODIFY `id` int NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=113;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
