-- phpMyAdmin SQL Dump
-- version 5.0.3
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Mar 09, 2024 at 07:01 AM
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
-- Table structure for table `rice_forms`
--

CREATE TABLE `rice_forms` (
  `id` bigint UNSIGNED NOT NULL,
  `form_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `type` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci NOT NULL,
  `order` int DEFAULT NULL,
  `status` int NOT NULL DEFAULT '1',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Dumping data for table `rice_forms`
--

INSERT INTO `rice_forms` (`id`, `form_name`, `type`, `order`, `status`, `created_at`, `updated_at`) VALUES
(6, 'BROWN', 'basmati', 1, 1, '2021-01-04 23:37:07', '2024-02-03 13:53:42'),
(7, 'CREAMY SELLA', 'basmati', 108, 1, '2021-01-04 23:37:21', '2021-01-05 15:23:34'),
(20, 'GOLDEN SELLA', 'basmati', 104, 1, '2021-01-04 23:43:41', '2021-01-04 23:43:41'),
(21, 'RAW', 'basmati', 4, 1, '2021-01-04 23:43:51', '2021-01-04 23:43:51'),
(26, 'STEAM', 'basmati', 98, 1, '2021-01-04 23:45:19', '2021-01-04 23:45:19'),
(27, 'BROWN', 'non-basmati', 6, 1, '2021-01-05 00:04:18', '2021-01-05 00:04:18'),
(28, 'CREAMY SELLA', 'non-basmati', 7, 1, '2021-01-05 00:04:48', '2021-01-05 00:04:48'),
(29, 'PARBOILED RICE 5% BROKEN', 'non-basmati', 8, 1, '2021-01-05 00:05:05', '2021-03-22 06:27:01'),
(30, 'PARBOILED RICE 10% BROKEN', 'non-basmati', 9, 1, '2021-01-05 00:05:22', '2021-03-22 06:27:30'),
(31, 'PARBOILED RICE 25% BROKEN', 'non-basmati', 10, 1, '2021-01-05 00:05:35', '2021-03-22 06:28:11'),
(32, 'PARBOILED RICE100% BROKEN', 'non-basmati', 11, 1, '2021-01-05 00:05:45', '2021-03-22 06:28:55'),
(33, 'GOLDEN SELLA', 'non-basmati', 12, 1, '2021-01-05 00:07:07', '2021-01-05 00:07:07'),
(35, 'RAW', 'non-basmati', 13, 1, '2021-01-05 00:07:56', '2021-01-05 00:07:56'),
(36, 'RAW 5 % BROKEN', 'non-basmati', 14, 1, '2021-01-05 00:08:07', '2021-01-05 00:08:07'),
(37, 'RAW 10 % BROKEN', 'non-basmati', 15, 1, '2021-01-05 00:08:24', '2021-01-05 00:08:24'),
(38, 'RAW 25 % BROKEN', 'non-basmati', 16, 1, '2021-01-05 00:08:37', '2021-01-05 00:08:37'),
(39, 'RAW 100% BROKEN', 'non-basmati', 17, 1, '2021-01-05 00:08:49', '2021-01-05 00:08:49'),
(40, 'STEAM', 'non-basmati', 18, 1, '2021-01-05 00:09:06', '2021-01-05 12:29:24'),
(41, 'STEAM 5% BROKEN', 'non-basmati', 19, 1, '2021-03-20 06:44:25', '2021-03-20 06:44:25'),
(42, 'RAW (NON-SORTEX)', 'basmati', 20, 1, '2021-04-16 10:33:57', '2021-04-16 10:39:00'),
(43, 'BROWN (NON-SORTEX)', 'basmati', 21, 1, '2021-04-16 10:34:26', '2021-04-16 10:39:35'),
(44, 'CREAMY SELLA (NEW CROP)', 'basmati', 22, 1, '2021-06-14 08:51:26', '2021-10-05 12:11:02'),
(45, 'PARBOILED RICE 15% BROKEN', 'non-basmati', 23, 1, '2021-07-08 12:22:40', '2021-07-08 12:22:40'),
(47, 'STEAM (OLD)', 'non-basmati', 24, 0, '2021-07-09 04:44:57', '2021-07-09 04:44:57'),
(49, 'STEAM (NEW CROP)', 'basmati', 25, 1, '2021-07-09 08:24:40', '2021-09-04 06:31:50'),
(50, 'RAW (BROWN)', 'basmati', 26, 0, '2021-07-17 09:06:09', '2021-07-17 09:06:09'),
(51, 'RAW (OLD CROP)', 'basmati', 27, 1, '2021-07-21 11:58:59', '2021-07-21 12:00:55'),
(52, 'GOLDEN SELLA (SATHI CROP)', 'basmati', 28, 0, '2021-07-26 09:21:03', '2021-07-26 09:21:03'),
(53, 'CREAMY SELLA (2019 CROP)', 'basmati', 29, 0, '2021-09-15 05:54:36', '2021-09-15 05:54:36'),
(54, 'STEAM (NEW CROP)', 'non-basmati', 30, 1, '2021-09-21 09:25:26', '2021-09-21 09:25:26'),
(55, 'CREAMY SELLA (NEW)', 'basmati', 31, 0, '2021-10-21 06:05:58', '2021-10-21 06:05:58'),
(56, 'CREAMY SELLA (NEW CROP)', 'non-basmati', 32, 1, '2021-10-21 06:06:51', '2021-10-21 06:06:51'),
(57, 'CREAMY SELLA (EU)', 'basmati', 33, 0, '2022-03-24 08:55:05', '2022-03-24 08:55:05'),
(58, 'Brown (EU)', 'basmati', 34, 0, '2022-03-24 08:56:55', '2022-03-24 08:56:55'),
(59, 'BROWN (EU)', 'basmati', 35, 0, '2022-03-24 08:57:52', '2022-03-24 08:57:52'),
(60, 'RAW (EU)', 'basmati', 36, 0, '2022-03-24 09:02:00', '2022-03-24 09:02:00'),
(61, 'CREAMY SELLA (US)', 'basmati', 37, 0, '2022-03-24 09:40:11', '2022-03-24 09:40:11'),
(62, 'GOLDEN SELLA (EU)', 'basmati', 38, 0, '2022-03-24 09:41:57', '2022-03-24 09:41:57'),
(63, 'GOLDEN SELLA (US)', 'basmati', 39, 0, '2022-03-24 09:44:32', '2022-03-24 09:44:32'),
(64, 'STEAM (EU)', 'basmati', 40, 0, '2022-03-24 09:45:56', '2022-03-24 09:45:56'),
(65, 'STEAM (US)', 'basmati', 41, 0, '2022-03-24 09:47:18', '2022-03-24 09:47:18'),
(66, 'RAW (EU)', 'basmati', 42, 0, '2022-03-24 09:48:55', '2022-03-24 09:48:55'),
(67, 'RAW (US)', 'basmati', 43, 0, '2022-03-24 09:50:31', '2022-03-24 09:50:31'),
(68, 'OLD', 'non-basmati', 44, 0, '2022-05-03 07:55:22', '2022-05-03 07:55:22'),
(69, 'OLD', 'non-basmati', 45, 0, '2022-05-03 07:58:51', '2022-05-03 07:58:51'),
(70, 'NEW', 'non-basmati', 46, 0, '2022-05-03 08:05:29', '2022-05-03 08:05:29'),
(71, 'RICE', 'non-basmati', 47, 1, '2022-05-03 08:19:02', '2022-05-03 08:19:02'),
(72, 'CREAMY SELLA (OLD)', 'non-basmati', 48, 1, '2022-05-03 10:26:36', '2022-05-03 10:26:36'),
(73, 'RAW 5 %  BROKEN (MUNDRA)', 'non-basmati', 49, 1, '2022-06-09 06:57:28', '2022-06-09 06:57:28'),
(74, 'RAW 25% BROKEN (MUNDRA)', 'non-basmati', 50, 1, '2022-06-09 07:06:57', '2022-06-09 07:06:57'),
(75, 'RAW 100% BROKEN (MUNDRA)', 'non-basmati', 51, 1, '2022-06-09 07:12:23', '2022-06-09 07:12:23'),
(76, 'Steam ( Sathi)', 'non-basmati', 52, 0, '2022-07-07 11:18:58', '2022-07-07 11:18:58'),
(77, 'STEAM (SATHI)', 'non-basmati', 53, 0, '2022-07-07 11:21:27', '2022-07-07 11:21:27'),
(78, 'STEAM (SATHI)', 'non-basmati', 54, 0, '2022-07-07 11:29:17', '2022-07-07 11:29:17'),
(79, 'CREAMY SELLA  (SATHI)', 'basmati', 55, 0, '2022-07-07 11:33:18', '2022-07-07 11:33:18'),
(80, 'STEAM DARK', 'basmati', 56, 0, '2022-07-30 12:07:33', '2022-07-30 12:07:33'),
(81, 'STEAM LIGHT', 'basmati', 57, 0, '2022-07-30 12:09:55', '2022-07-30 12:09:55'),
(82, 'CREAMY SELLA (OLD CROP)', 'basmati', 58, 0, '2022-08-05 11:56:56', '2022-08-05 11:56:56'),
(83, 'GOLDEN SELLA  (OLD CROP)', 'basmati', 59, 0, '2022-08-05 12:01:08', '2022-08-05 12:01:08'),
(84, 'STEAM (OLD CROP)', 'basmati', 60, 0, '2022-08-05 12:03:57', '2022-08-05 12:03:57'),
(85, 'STEAM (SATHI)', 'basmati', 61, 0, '2022-08-06 18:15:15', '2022-08-06 18:15:15'),
(86, 'STEAM (NEW CROP)', 'basmati', 62, 0, '2022-08-23 13:30:22', '2022-08-23 13:30:22'),
(87, 'GOLDEN SELLA  (NEW CROP)', 'basmati', 63, 0, '2022-08-24 11:55:47', '2022-08-24 11:55:47'),
(88, 'STEAM (NEW)', 'basmati', 64, 0, '2022-08-26 13:16:31', '2022-08-26 13:16:31'),
(89, 'GOLDEN SELLA (NEW)', 'basmati', 65, 0, '2022-08-26 13:18:41', '2022-08-26 13:18:41'),
(90, 'CREAMY SELLA (NEW)', 'non-basmati', 66, 0, '2022-09-03 16:02:51', '2022-09-03 16:02:51'),
(91, 'STEAM (OLD)', 'basmati', 67, 0, '2022-09-07 17:37:34', '2022-09-07 17:37:34'),
(92, 'STEAM (NEW)', 'non-basmati', 68, 0, '2022-09-13 15:38:23', '2022-09-13 15:38:23'),
(93, 'STEAM (NEW)', 'non-basmati', 69, 0, '2022-09-13 15:41:49', '2022-09-13 15:41:49'),
(94, 'GOLDEN SELLA (NEW)', 'non-basmati', 70, 0, '2022-10-01 13:13:51', '2022-10-01 13:13:51'),
(95, 'CREAMY SELLA  (6.4 MM)', 'non-basmati', 71, 1, '2022-10-29 13:07:05', '2022-10-29 13:07:05'),
(96, 'RAW (NEW CROP)', 'basmati', 72, 1, '2022-12-28 15:45:42', '2023-12-01 16:18:22'),
(97, 'CREAMY SELLA (6MM)', 'non-basmati', 73, 1, '2022-12-28 15:54:10', '2022-12-28 15:54:10'),
(98, 'CREAMY SELLA  (6.50MM)', 'non-basmati', 74, 1, '2022-12-28 15:56:30', '2022-12-28 15:56:30'),
(99, 'RAW NEW', 'non-basmati', 75, 1, '2023-01-14 12:57:55', '2023-01-14 12:57:55'),
(100, 'RAW (OLD)', 'non-basmati', 76, 1, '2023-02-23 13:15:56', '2023-02-23 13:15:56'),
(101, 'STEAM', 'non-basmati', 77, 0, '2023-02-24 15:11:19', '2023-02-24 15:11:19'),
(102, 'STEAM', 'non-basmati', 78, 0, '2023-02-24 15:12:43', '2023-02-24 15:12:43'),
(103, 'CREAMY SELLA (6.5MM)', 'non-basmati', 79, 1, '2023-02-25 12:07:44', '2023-02-25 12:07:44'),
(104, 'STEAM (6.40MM)', 'non-basmati', 80, 1, '2023-02-25 12:08:48', '2023-02-25 12:08:48'),
(105, 'PARBOILED RICE', 'non-basmati', 81, 1, '2023-04-01 18:41:58', '2023-04-01 18:41:58'),
(106, 'Raw 5% Broken (MUNDRA)', 'non-basmati', 82, 0, '2023-04-11 14:53:08', '2023-04-11 14:53:08'),
(107, 'Raw 5% BROKEN (MUNDRA)', 'non-basmati', 83, 0, '2023-04-11 14:54:30', '2023-04-11 14:54:30'),
(108, 'RAW 5% BROKEN (MUNDRA)', 'non-basmati', 84, 1, '2023-04-11 14:55:38', '2023-04-11 14:55:38'),
(109, 'PARBOILED RICE', 'non-basmati', 85, 0, '2023-04-14 16:28:41', '2023-04-14 16:28:41'),
(110, 'PARBOILED RICE', 'non-basmati', 86, 1, '2023-04-15 12:37:02', '2023-04-15 12:37:02'),
(111, 'RAW 2 YEAR (OLD)', 'non-basmati', 87, 1, '2023-05-12 13:48:19', '2023-05-12 13:48:19'),
(112, 'STEAM (SATHI CROP)', 'basmati', 88, 1, '2023-06-08 11:34:21', '2023-06-08 11:34:21'),
(113, 'STEAM (SATHI CROP)', 'non-basmati', 89, 1, '2023-06-08 11:40:17', '2023-06-08 11:40:17'),
(114, '1509 CREAMY SELLA (SATHI CROP)', 'basmati', 90, 0, '2023-06-13 11:46:15', '2023-06-13 11:46:15'),
(115, 'CREAMY SELLA (SATHI CROP)', 'basmati', 91, 1, '2023-06-13 11:47:53', '2023-06-13 11:47:53'),
(116, 'CREAMY SELLA (SATHI CROP)', 'non-basmati', 92, 1, '2023-07-17 10:57:15', '2023-07-17 10:57:15'),
(117, 'STEAM GRADE (A+)', 'basmati', 93, 0, '2023-09-09 18:42:44', '2023-09-09 18:42:44'),
(118, 'STEAM GRADE (A)', 'basmati', 94, 0, '2023-09-09 18:45:01', '2023-09-09 18:45:01'),
(119, 'STEAM (NEW CROP) GRADE (A+)', 'basmati', 95, 0, '2023-09-09 18:51:18', '2023-09-09 18:51:18'),
(120, 'STEAM (NEW CROP) GRADE (A)', 'basmati', 96, 0, '2023-09-09 18:53:48', '2023-09-09 18:53:48'),
(121, 'STEAM NEW CROP GRADE A+', 'basmati', 2, 0, '2023-09-10 11:49:33', '2023-09-10 11:49:33'),
(122, 'STEAM NEW CROP GRADE A', 'basmati', 3, 0, '2023-09-10 11:52:13', '2023-09-10 11:52:13'),
(123, 'GOLDEN SELLA NEW CROP', 'basmati', 99, 0, '2023-09-10 12:24:21', '2023-09-10 12:24:21'),
(124, 'GOLDEN SELLA NEW CROP', 'basmati', 100, 0, '2023-09-10 12:27:53', '2023-09-10 12:27:53'),
(125, 'STEAM GRADE A+', 'basmati', 101, 1, '2023-09-10 12:33:06', '2023-09-10 12:33:06'),
(126, 'STEAM GRADE A', 'basmati', 102, 1, '2023-09-10 12:33:46', '2023-09-10 12:33:46'),
(127, 'STEAM GRADE A (NEW CROP)', 'basmati', 103, 0, '2023-09-12 15:17:40', '2023-09-12 15:17:40'),
(128, 'STEAM GRADE A+ (NEW CROP)', 'basmati', 5, 1, '2023-09-12 15:22:02', '2023-09-12 15:22:02'),
(129, 'STEAM GRADE A (NEW CROP)', 'basmati', 105, 0, '2023-09-12 15:25:06', '2023-09-12 15:25:06'),
(130, 'STEAM GRADE A (NEW CROP)', 'basmati', 106, 0, '2023-09-12 15:30:12', '2023-09-12 15:30:12'),
(131, 'GOLDEN SELLA (NEW CROP)', 'basmati', 107, 0, '2023-09-12 15:32:52', '2023-09-12 15:32:52'),
(132, 'STEAM GRADE A (NEW CROP)', 'basmati', 97, 1, '2023-09-12 15:41:17', '2023-09-12 15:41:17'),
(133, 'GOLDEN SELLA (NEW CROP)', 'basmati', 109, 1, '2023-09-12 15:47:23', '2023-09-12 15:47:23'),
(134, 'CREAMY SELLA (New Crop)', 'basmati', 110, 1, '2023-09-13 15:03:39', '2023-09-13 15:03:39'),
(135, 'GOLDEN SELLA (NEW CROP)', 'non-basmati', NULL, 1, '2023-09-16 18:13:12', '2023-09-16 18:13:12'),
(136, 'CREAMY SELLA EU (NEW CROP)', 'basmati', NULL, 1, '2023-10-10 14:37:37', '2023-10-10 14:41:16'),
(137, 'STEAM EU (NEW CROP)', 'basmati', NULL, 1, '2023-10-10 14:39:35', '2023-10-10 14:41:34'),
(138, 'CREAMY SELLA  (6MM) MUNDRA', 'non-basmati', NULL, 1, '2023-10-14 17:13:38', '2024-01-27 10:33:17'),
(139, 'CREAMY SELLA (6.40 MM) MUNDRA', 'non-basmati', NULL, 1, '2023-10-16 15:20:13', '2024-01-27 10:33:52'),
(140, 'CREAMY SELLA (6.50MM) MUNDRA', 'non-basmati', NULL, 1, '2023-12-02 10:06:06', '2024-01-27 10:34:23'),
(141, 'BROWN (NEW CROP)', 'basmati', NULL, 1, '2023-12-12 18:52:35', '2023-12-12 18:52:35'),
(142, 'LEMON SELLA', 'basmati', NULL, 1, '2024-01-12 12:42:35', '2024-01-27 10:11:24'),
(143, 'GOLDEN SELLA (NC)', 'basmati', NULL, 1, '2024-02-15 09:58:10', '2024-02-15 11:16:24');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `rice_forms`
--
ALTER TABLE `rice_forms`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `rice_forms`
--
ALTER TABLE `rice_forms`
  MODIFY `id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=144;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
