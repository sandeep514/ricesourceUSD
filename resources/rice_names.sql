-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Feb 22, 2024 at 07:13 AM
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
-- Table structure for table `rice_names`
--

CREATE TABLE `rice_names` (
  `id` bigint UNSIGNED NOT NULL,
  `name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int DEFAULT NULL,
  `status` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rice_names`
--

INSERT INTO `rice_names` (`id`, `name`, `type`, `order`, `status`, `created_at`, `updated_at`) VALUES
(33, 'TAJ', 'non-basmati', NULL, 1, '2022-02-01 10:10:59', '2022-02-01 10:10:59'),
(52, 'NOORI', 'non-basmati', NULL, 1, '2023-07-17 10:59:30', '2023-07-17 10:59:30'),
(51, 'KALIZEERA', 'non-basmati', NULL, 1, '2023-05-12 13:44:50', '2023-05-12 13:44:50'),
(50, 'PONNI', 'non-basmati', NULL, 1, '2023-04-14 16:27:53', '2023-04-14 16:27:53'),
(42, 'MINIKIT', 'non-basmati', NULL, 1, '2023-01-19 13:41:30', '2023-01-19 13:41:30'),
(41, 'BASKATI', 'non-basmati', NULL, 1, '2023-01-19 11:31:02', '2023-01-19 11:31:02'),
(39, 'IDLI', 'non-basmati', NULL, 1, '2022-05-03 08:18:07', '2022-05-03 08:18:07'),
(38, 'SITA', 'non-basmati', NULL, 1, '2022-05-03 08:15:34', '2022-05-03 08:15:34'),
(37, 'RATNA', 'non-basmati', NULL, 1, '2022-05-03 08:13:25', '2022-05-03 08:13:25'),
(15, 'SUGANDHA', 'non-basmati', 7, 1, '2021-01-04 23:31:13', '2021-01-04 23:31:13'),
(16, 'SHARBATI', 'non-basmati', 8, 1, '2021-01-04 23:31:33', '2021-01-04 23:31:51'),
(17, 'PR-11/14', 'non-basmati', 9, 1, '2021-01-04 23:32:21', '2021-01-04 23:32:21'),
(18, 'PR-06/47', 'non-basmati', 10, 1, '2021-01-04 23:32:33', '2021-01-04 23:32:33'),
(49, 'PR-26', 'non-basmati', 11, 1, '2023-04-11 15:16:18', '2023-04-11 15:16:18'),
(19, 'RH-10', 'non-basmati', 12, 1, '2021-01-04 23:32:44', '2021-01-04 23:32:44'),
(40, 'VISHNU BHOG', 'non-basmati', 13, 1, '2023-01-14 12:58:37', '2023-01-14 12:58:37'),
(22, 'IR-36', 'non-basmati', 14, 1, '2021-01-04 23:33:16', '2021-01-04 23:33:16'),
(23, 'IR-64', 'non-basmati', 15, 1, '2021-01-04 23:33:34', '2021-01-04 23:33:34'),
(46, 'IR-64/36', 'non-basmati', 16, 1, '2023-03-09 14:09:30', '2023-03-09 14:09:30'),
(45, 'IR-36/64', 'non-basmati', 17, 1, '2023-03-06 17:26:11', '2023-03-06 17:26:11'),
(24, 'IR-8', 'non-basmati', 18, 1, '2021-01-04 23:33:45', '2021-01-04 23:33:45'),
(26, 'KRANTI', 'non-basmati', 18, 1, '2021-01-04 23:34:10', '2021-01-04 23:34:10'),
(27, 'SWARNA', 'non-basmati', 19, 1, '2021-01-04 23:34:24', '2021-01-04 23:34:24'),
(25, 'GR-11', 'non-basmati', 19, 1, '2021-01-04 23:33:58', '2021-01-04 23:33:58'),
(21, 'PARMAL', 'non-basmati', 20, 1, '2021-01-04 23:33:05', '2021-01-04 23:33:05'),
(28, 'JAI SHREE RAM (KOLAM)', 'non-basmati', 20, 1, '2021-03-20 06:43:03', '2021-03-22 07:20:41'),
(20, 'SONA MANSOORI', 'non-basmati', 21, 1, '2021-01-04 23:32:56', '2021-01-04 23:32:56'),
(29, 'HMT', 'non-basmati', 21, 1, '2021-03-20 06:44:58', '2021-03-20 06:44:58'),
(43, 'MANSOORI', 'non-basmati', 22, 1, '2023-02-24 15:14:27', '2023-02-24 15:14:27'),
(44, 'SWARNA MANSOORI', 'non-basmati', 23, 1, '2023-03-06 16:24:13', '2023-03-06 16:24:13');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rice_names`
--
ALTER TABLE `rice_names`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rice_names`
--
ALTER TABLE `rice_names`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=53;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
