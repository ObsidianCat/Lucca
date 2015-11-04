-- phpMyAdmin SQL Dump
-- version 4.3.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 03, 2015 at 01:09 PM
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
  `wiki_title` varchar(200) DEFAULT NULL,
  `item_type` varchar(30) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `items`
--

INSERT INTO `items` (`item_id`, `mainTitle`, `subTitle`, `address`, `description`, `wiki_link`, `wiki_name`, `wiki_title`, `item_type`) VALUES
(1, 'Lucca Cathedral', 'Roman Catholic cathedral dedicated to Saint Martin (Italian: Duomo di Lucca, Cattedrale di San Martino)', 'Piazza Antelminelli, 55100 Lucca LU, Italy', 'Of the original structure, the great apse with its tall columnar arcades and the fine campanile remain. The nave and transepts of the cathedral were rebuilt in the Gothic style in the 14th century, while the west front was begun in 1204 by Guido Bigarelli of Como, and consists of a vast portico of three magnificent arches, and above them three ranges of open galleries adorned with sculptures. In the nave a small octagonal temple or chapel shrine contains the most precious relic in Lucca, the Holy Face of Lucca (Italian: Volto Santo di Lucca) or Sacred Countenance. This cedar-wood crucifix and image of Christ, according to the legend, was carved by his contemporary Nicodemus, and miraculously conveyed to Lucca in 782. Christ is clothed in the colobium, a long sleeveless garment. The chapel was built in 1484 by Matteo Civitali, the most famous Luccan sculptor of the early Renaissance. The tomb of Ilaria del Carretto by Jacopo della Quercia of Siena, the earliest of his extant works was commissioned by her husband, the lord of Lucca, Paolo Guinigi, in 1406. Additionally the cathedral contains Domenico Ghirlandaio''s Madonna and Child with Saints Peter, Clement, Paul and Sebastian; Federico Zuccari''s Adoration of the Magi, Jacopo Tintoretto''s Last Supper, and finally Fra Bartolomeo''s Madonna and Child (1509). There is a legend to explain why all the columns of the fa?ade are different. According to the tale, when they were going to decorate it, the inhabitants of Lucca announced a contest for the best column. Every artist made a column, but then the inhabitants of Lucca decided to take them all, without paying the artists and used all the columns.', 'https://en.wikipedia.org/wiki/Lucca_Cathedral', 'Lucca Cathedral', 'Lucca Cathedral', 'churches'),
(2, 'Basilica of San Frediano', 'The Basilica of San Frediano is a Romanesque church situated on the Piazza San Frediano.', 'Piazza S. Frediano, 55100 Lucca LU, Italy', 'Fridianus (Frediano) was an Irish bishop of Lucca in the first half of the 6th century. He had a church built on this spot, dedicated to St. Vincent, a martyr from Zaragoza, Spain. When Fridianus was buried in this church, the church was renamed Ss. Frediano and Vincenzo. Soon afterwards, a community of Augustinian canons was growing around this church. In the Longobard era, the church and the canon house were enlarged. In 1104, this order was recognized by Pope Paschal II. The prior of St. Frediano was later accorded a rank equal in dignity to that of a bishop.', 'https://en.wikipedia.org/wiki/Basilica_of_San_Frediano', 'Basilica of San Frediano', 'Basilica of San Frediano', 'churches');

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
-- Table structure for table `main_categories`
--

CREATE TABLE IF NOT EXISTS `main_categories` (
  `cat_id` int(11) NOT NULL,
  `categoryName` varchar(65) NOT NULL,
  `idName` varchar(65) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=latin1;

--
-- Dumping data for table `main_categories`
--

INSERT INTO `main_categories` (`cat_id`, `categoryName`, `idName`) VALUES
(1, 'History', 'history'),
(2, 'Churches', 'churches'),
(3, 'Palazzi (Coming soon)', 'palazzi'),
(4, 'Streets (Coming soon)', 'streets'),
(5, 'Walls (Coming soon)', 'walls');

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
-- Indexes for table `main_categories`
--
ALTER TABLE `main_categories`
  ADD PRIMARY KEY (`cat_id`);

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
  MODIFY `item_id` int(6) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `item_images`
--
ALTER TABLE `item_images`
  MODIFY `image_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
--
-- AUTO_INCREMENT for table `main_categories`
--
ALTER TABLE `main_categories`
  MODIFY `cat_id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=11;
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
