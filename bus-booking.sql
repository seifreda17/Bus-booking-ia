-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 08, 2023 at 07:08 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bus-booking`
--

-- --------------------------------------------------------

--
-- Table structure for table `appointment`
--

CREATE TABLE `appointment` (
  `Appointment_id` int(11) NOT NULL,
  `Fromm` varchar(255) NOT NULL,
  `Too` varchar(255) NOT NULL,
  `Ticket_price` varchar(255) NOT NULL,
  `day_and_time` varchar(255) NOT NULL,
  `max_num_trav` varchar(255) NOT NULL,
  `user_id_app` int(11) NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `appointment`
--

INSERT INTO `appointment` (`Appointment_id`, `Fromm`, `Too`, `Ticket_price`, `day_and_time`, `max_num_trav`, `user_id_app`, `status`) VALUES
(37, 'gbth', '6yh6yh', '5gtt5', 'rgrtg', 'gt5t5g', 0, ''),
(38, 'Mokattam', 'Alex', '500 EGP', 'Friday at 3:00', '200', 0, '');

-- --------------------------------------------------------

--
-- Table structure for table `requests`
--

CREATE TABLE `requests` (
  `req_id` int(11) NOT NULL,
  `request` varchar(255) NOT NULL,
  `appointment_id` int(11) NOT NULL,
  `users_id` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `status` enum('active','inactive','','') NOT NULL,
  `type` varchar(255) NOT NULL,
  `phone` varchar(12) NOT NULL,
  `role` int(12) NOT NULL COMMENT 'admin=0\r\nuser=1',
  `appointment_id` int(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `name`, `email`, `password`, `status`, `type`, `phone`, `role`, `appointment_id`) VALUES
(21, 'admin227461', 'admin@gmail.com', '$2b$10$6yh/hdoY2jKGHygTo0MyoOJ.9JEiYj89NN7fHy0Jy7z78GW1sElwi', 'active', 'ffe338cdd2ea20be8b4714342d57ac4e', '01154838695', 1, 0),
(35, 'seifooo2274', 'seiforeda@gmail.com', '$2b$10$ABqFok2Uj7KI6QrNIA.fHu5jy/760feHkHFRPN3Zkwz4xwRXcywMG', 'active', '5b87d26db7e7f96200af2e8c2fecd323', '01154838695', 0, 0),
(36, 'seifooo22123', 'seiforedaaa@gmail.com', '$2b$10$MwMg497Qm1HK1Sq8.4j/HuxZl21Suv734Vvcd/mWw5IDJWAzQIx6G', 'active', '', '01154838695', 0, 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `appointment`
--
ALTER TABLE `appointment`
  ADD PRIMARY KEY (`Appointment_id`);

--
-- Indexes for table `requests`
--
ALTER TABLE `requests`
  ADD PRIMARY KEY (`req_id`),
  ADD KEY `Appointment_constr_id` (`appointment_id`),
  ADD KEY `user_constr_id` (`users_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `appointment`
--
ALTER TABLE `appointment`
  MODIFY `Appointment_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- AUTO_INCREMENT for table `requests`
--
ALTER TABLE `requests`
  MODIFY `req_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=22;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=37;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `requests`
--
ALTER TABLE `requests`
  ADD CONSTRAINT `Appointment_constr_id` FOREIGN KEY (`appointment_id`) REFERENCES `appointment` (`Appointment_id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `user_constr_id` FOREIGN KEY (`users_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
