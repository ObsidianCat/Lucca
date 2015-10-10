-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Oct 10, 2015 at 12:14 PM
-- Server version: 5.6.24
-- PHP Version: 5.6.8

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `luccaguide_db`
--

-- --------------------------------------------------------

--
-- Table structure for table `items`
--

CREATE TABLE IF NOT EXISTS `items` (
  `item_id` int(6) NOT NULL,
  `mainTitle` varchar(200) NOT NULL,
  `subTitle` varchar(200) NOT NULL,
  `address` text NOT NULL,
  `description` text NOT NULL,
  `wiki_link` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `wiki_name` varchar(200) CHARACTER SET utf8 DEFAULT NULL,
  `wiki_title` varchar(200) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `mainTitle`, `subTitle`, `address`, `description`, `wiki_link`, `wiki_name`, `wiki_title`) VALUES
(1, 'Lucca Cathedral', 'Roman Catholic cathedral dedicated to Saint Martin (Italian: Duomo di Lucca, Cattedrale di San Martino)', 'Piazza Antelminelli, 55100 Lucca LU, Italy', 'Of the original structure, the great apse with its tall columnar arcades and the fine campanile remain. The nave and transepts of the cathedral were rebuilt in the Gothic style in the 14th century, while the west front was begun in 1204 by Guido Bigarelli of Como, and consists of a vast portico of three magnificent arches, and above them three ranges of open galleries adorned with sculptures. In the nave a small octagonal temple or chapel shrine contains the most precious relic in Lucca, the Holy Face of Lucca (Italian: Volto Santo di Lucca) or Sacred Countenance. This cedar-wood crucifix and image of Christ, according to the legend, was carved by his contemporary Nicodemus, and miraculously conveyed to Lucca in 782. Christ is clothed in the colobium, a long sleeveless garment. The chapel was built in 1484 by Matteo Civitali, the most famous Luccan sculptor of the early Renaissance. The tomb of Ilaria del Carretto by Jacopo della Quercia of Siena, the earliest of his extant works was commissioned by her husband, the lord of Lucca, Paolo Guinigi, in 1406. Additionally the cathedral contains Domenico Ghirlandaio''s Madonna and Child with Saints Peter, Clement, Paul and Sebastian; Federico Zuccari''s Adoration of the Magi, Jacopo Tintoretto''s Last Supper, and finally Fra Bartolomeo''s Madonna and Child (1509). There is a legend to explain why all the columns of the fa?ade are different. According to the tale, when they were going to decorate it, the inhabitants of Lucca announced a contest for the best column. Every artist made a column, but then the inhabitants of Lucca decided to take them all, without paying the artists and used all the columns.', 'https://en.wikipedia.org/wiki/Lucca_Cathedral', 'Lucca Cathedral', 'Lucca Cathedral');

-- --------------------------------------------------------

--
-- Table structure for table `item_images`
--

CREATE TABLE IF NOT EXISTS `item_images` (
  `image_id` int(11) NOT NULL,
  `item_id` int(11) NOT NULL,
  `image` blob NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `item_images`
--

INSERT INTO `item_images` (`image_id`, `item_id`, `image`) VALUES
(1, 1, ''),
(2, 1, '');

-- --------------------------------------------------------

--
-- Table structure for table `reviews`
--

CREATE TABLE IF NOT EXISTS `reviews` (
  `review_id` int(6) NOT NULL,
  `author` varchar(200) NOT NULL,
  `country` varchar(100) NOT NULL,
  `dateofreview` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `dateofvisit` date NOT NULL,
  `email` varchar(100) NOT NULL,
  `rating` int(2) NOT NULL,
  `message` text NOT NULL,
  `item_id` int(6) DEFAULT NULL
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `reviews`
--

INSERT INTO `reviews` (`review_id`, `author`, `country`, `dateofreview`, `dateofvisit`, `email`, `rating`, `message`, `item_id`) VALUES
(1, 'Parvati Cat', 'Israel', '2015-08-15 13:33:29', '2015-08-15', 'parvatiCat@example.com', 4, 'Interesting place to visit, reasonable price, lots of history. Good stained glass and always a cool spot to sleep on a hot day.', 1),
(2, 'CaterinaYorkshire', 'United Kingdom', '2015-08-15 13:36:35', '2015-08-15', 'CaterinaYorkshire@gmail.com', 5, 'Beautiful, not to commercialised, some really interesting sculptures invlipuding a life sized Christ, which is used as part of the September festival every September, only 3? and the money is used to support the restoration.', 1),
(3, 'Suzbuster', 'USA', '2015-08-15 13:36:44', '2015-08-15', 'suzbuster@gmail.com', 2, 'This duomo doesn''t compare in scale, colour, beauty or grandeur to other duomos I have seen over the past few days (Siena and Pisa). In fact Lucca as a whole did nothing for me and I am quite annoyed at Lonely Planet for putting in Italy''s top 10 destinations.', 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `items`
--
ALTER TABLE `items`
  ADD PRIMARY KEY (`item_id`);

--
-- Indexes for table `item_images`
--
ALTER TABLE `item_images`
  ADD PRIMARY KEY (`image_id`), ADD KEY `item_id` (`item_id`);

--
-- Indexes for table `reviews`
--
ALTER TABLE `reviews`
  ADD PRIMARY KEY (`review_id`), ADD KEY `item_id` (`item_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `items`
--
ALTER TABLE `items`
  MODIFY `item_id` int(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=2;
--
-- AUTO_INCREMENT for table `item_images`
--
ALTER TABLE `item_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `reviews`
--
ALTER TABLE `reviews`
  MODIFY `review_id` int(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=4;
--
-- Constraints for dumped tables
--

--
-- Constraints for table `item_images`
--
ALTER TABLE `item_images`
ADD CONSTRAINT `item_images_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `items` (`item_id`);

--
-- Constraints for table `reviews`
--
ALTER TABLE `reviews`
ADD CONSTRAINT `reviews_ibfk_1` FOREIGN KEY (`item_id`) REFERENCES `items` (`item_id`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
