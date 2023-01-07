-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : lun. 12 déc. 2022 à 16:52
-- Version du serveur : 10.4.25-MariaDB
-- Version de PHP : 8.1.10

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `eventunn`
--

-- --------------------------------------------------------

--
-- Structure de la table `admins`
--

CREATE TABLE `admins` (
  `idA` int(15) NOT NULL,
  `login` varchar(50) NOT NULL,
  `pwd` varchar(50) NOT NULL,
  `createdAt` varchar(30) NOT NULL,
  `updatedAt` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `admins`
--

INSERT INTO `admins` (`idA`, `login`, `pwd`, `createdAt`, `updatedAt`) VALUES
(1, 'admin', 'admin', '', '');

-- --------------------------------------------------------

--
-- Structure de la table `blogs`
--

CREATE TABLE `blogs` (
  `idB` int(30) NOT NULL,
  `category` varchar(50) NOT NULL,
  `title` varchar(100) NOT NULL,
  `article` varchar(500) NOT NULL,
  `date` date NOT NULL,
  `file` varchar(100) NOT NULL,
  `idU` int(12) NOT NULL,
  `createdAt` varchar(12) NOT NULL,
  `updatedAt` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `blogs`
--

INSERT INTO `blogs` (`idB`, `category`, `title`, `article`, `date`, `file`, `idU`, `createdAt`, `updatedAt`) VALUES
(1, 'sport', 'fffff', 'gggggg', '1992-12-12', 'ggggggg', 0, '2022-12-09 1', '2022-12-09 1'),
(2, 'sport', 'fffff', 'gggggg', '1992-12-12', 'ggggggg', 0, '2022-12-09 1', '2022-12-09 1'),
(3, 'sport', 'fffff', 'gggggg', '1992-12-12', 'ggggggg', 0, '2022-12-09 1', '2022-12-09 1'),
(5, 'Sportif', 'aaaaaaa', 'aaaaaaaaaaaaaaaaaaa', '2022-12-09', 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.avpartners.com%2Fwhy-hold-an-event%2F&psig=AOv', 0, '2022-12-10 0', '2022-12-10 0');

-- --------------------------------------------------------

--
-- Structure de la table `commentaires`
--

CREATE TABLE `commentaires` (
  `idC` int(100) NOT NULL,
  `date` date NOT NULL,
  `message` varchar(400) NOT NULL,
  `idE` int(11) NOT NULL,
  `createdAt` varchar(12) NOT NULL,
  `updatedAt` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `evenements`
--

CREATE TABLE `evenements` (
  `idE` int(11) NOT NULL,
  `name` varchar(100) DEFAULT NULL,
  `lieu` varchar(100) DEFAULT NULL,
  `date` varchar(100) DEFAULT NULL,
  `description` varchar(200) DEFAULT NULL,
  `category` varchar(100) DEFAULT NULL,
  `image` varchar(100) DEFAULT NULL,
  `prix` int(30) DEFAULT NULL,
  `nbrT` int(100) DEFAULT NULL,
  `idU` int(12) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` varchar(12) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `evenements`
--

INSERT INTO `evenements` (`idE`, `name`, `lieu`, `date`, `description`, `category`, `image`, `prix`, `nbrT`, `idU`, `createdAt`, `updatedAt`) VALUES
(2, 'Event1', 'Tunis', '2022-12-11', 'wow what a good event!!', 'Musical', 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-274744', 5, 80, NULL, '2022-12-09 17:27:25', '2022-12-09 1'),
(3, 'cartage', 'tunis', '2023-01-05', 'wow what a good event!!', 'Musical', 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?cs=srgb&dl=pexels-wolfgang-274744', 50, 96, 28, '2022-12-09 18:30:46', '2022-12-09 1');

-- --------------------------------------------------------

--
-- Structure de la table `orders`
--

CREATE TABLE `orders` (
  `idO` int(100) NOT NULL,
  `idUser` int(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `orders`
--

INSERT INTO `orders` (`idO`, `idUser`) VALUES
(3, 28),
(4, 28),
(5, 28),
(6, 28),
(7, 28),
(8, 28),
(9, 28),
(10, 28),
(11, 28),
(12, 28),
(13, 28),
(14, 28);

-- --------------------------------------------------------

--
-- Structure de la table `ordersdetails`
--

CREATE TABLE `ordersdetails` (
  `id` int(100) NOT NULL,
  `idOrders` int(100) NOT NULL,
  `idEvents` int(100) NOT NULL,
  `quantity` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `ordersdetails`
--

INSERT INTO `ordersdetails` (`id`, `idOrders`, `idEvents`, `quantity`) VALUES
(1, 11, 3, 1),
(2, 12, 3, 1),
(3, 13, 3, 1),
(4, 14, 3, 1);

-- --------------------------------------------------------

--
-- Structure de la table `publicites`
--

CREATE TABLE `publicites` (
  `idP` int(100) NOT NULL,
  `category` varchar(100) NOT NULL,
  `title` varchar(100) NOT NULL,
  `description` varchar(500) NOT NULL,
  `file` varchar(100) NOT NULL,
  `createdAt` varchar(12) NOT NULL,
  `updatedAt` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `publicites`
--

INSERT INTO `publicites` (`idP`, `category`, `title`, `description`, `file`, `createdAt`, `updatedAt`) VALUES
(1, 'music', 'fffff', 'gggggg', 'ggggggg', '2022-12-09 1', '2022-12-09 2'),
(2, 'sport', 'fffff', 'gggggg', 'ggggggg', '2022-12-09 1', '2022-12-09 1'),
(3, 'sport', 'fffff', 'gggggg', 'ggggggg', '2022-12-09 1', '2022-12-09 1'),
(5, 'Culturel', 'aaaaaaaa', 'aaaaaaaaaaaaaaa', 'https://www.avpartners.com/wp-content/uploads/2016/11/Resized-copy-1.jpg', '2022-12-10 0', '2022-12-10 0');

-- --------------------------------------------------------

--
-- Structure de la table `reclamations`
--

CREATE TABLE `reclamations` (
  `idRec` int(11) NOT NULL,
  `Subject` varchar(150) NOT NULL,
  `msgenvoyer` varchar(400) NOT NULL,
  `msgreception` varchar(400) NOT NULL,
  `daterec` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `createdAt` varchar(12) NOT NULL,
  `updatedAt` int(12) NOT NULL,
  `Category` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `reclamations`
--

INSERT INTO `reclamations` (`idRec`, `Subject`, `msgenvoyer`, `msgreception`, `daterec`, `createdAt`, `updatedAt`, `Category`) VALUES
(3, 'arrr', 'done', 'done', '2022-12-08 15:00:56', '2022-12-07 2', 2022, 'hrrhrk'),
(4, 'admin@admin.com', 'admin', 'admin', '2022-12-06 23:00:00', '2022-12-07 2', 2022, 'hrrhrk'),
(5, 'admin@admin.com', 'admin', '', '2022-12-06 23:00:00', '2022-12-07 2', 2022, 'hrrhrk'),
(6, 'arrr', 'admokllin', 'en cour', '2022-12-08 10:30:29', '2022-12-08 1', 2022, 'hrrhrk'),
(7, 'aaa', 'aaaaa', 'aaaa', '2022-12-08 11:41:25', '2022-12-08 1', 2022, 'event manager'),
(8, 'aaa', 'aaaaa', 'aaaa', '2022-12-08 11:41:33', '2022-12-08 1', 2022, 'event manager'),
(9, 'tttt', 'gyjjj', 'hhhh', '2022-12-08 11:55:07', '2022-12-08 1', 2022, 'event manager'),
(10, 'jhjjjj', 'qzesdrgtfh', '', '2022-12-08 12:05:52', '2022-12-08 1', 2022, 'blog manager'),
(11, 'jhjjjj', 'lkjhg', '', '2022-12-08 12:11:27', '2022-12-08 1', 2022, 'event manager'),
(12, 'test', 'hgvvhcfgfchgvjhbkjl', '', '2022-12-08 12:43:19', '2022-12-08 1', 2022, 'user'),
(13, 'oiouj', 'ytcfggk', '', '2022-12-08 12:46:43', '2022-12-08 1', 2022, 'Blog'),
(14, 'oiouj', 'ytcfggk', '', '2022-12-08 12:47:34', '2022-12-08 1', 2022, 'Blog'),
(15, 'arrr', 'admokllin', 'en cour', '2022-12-08 12:52:01', '2022-12-08 1', 2022, 'hrrhrk'),
(16, 'aaaaaa', '*^^poiugyftdgd', '', '2022-12-08 12:53:39', '2022-12-08 1', 2022, 'Other'),
(17, 'aaa', 'ytcfggk', '', '2022-12-08 13:04:09', '2022-12-08 1', 2022, 'Ticket'),
(18, 'ushdsuei', 'uigyukj', '', '2022-12-10 09:10:00', '2022-12-10 0', 2022, 'Event');

-- --------------------------------------------------------

--
-- Structure de la table `reservations`
--

CREATE TABLE `reservations` (
  `idRes` int(11) NOT NULL,
  `idU` int(11) NOT NULL,
  `idT` int(11) NOT NULL,
  `idE` int(11) NOT NULL,
  `createdAt` varchar(30) NOT NULL,
  `updatedAt` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `tickets`
--

CREATE TABLE `tickets` (
  `idT` int(100) NOT NULL,
  `idE` int(11) NOT NULL,
  `numero` int(100) NOT NULL,
  `prix` float NOT NULL,
  `promotion` int(100) NOT NULL,
  `createdAt` varchar(12) NOT NULL,
  `updatedAt` varchar(12) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Structure de la table `users`
--

CREATE TABLE `users` (
  `idU` int(100) NOT NULL,
  `nom` varchar(50) NOT NULL,
  `prenom` varchar(30) NOT NULL,
  `pwd` varchar(50) NOT NULL,
  `telephone` int(100) NOT NULL,
  `email` varchar(50) NOT NULL,
  `role` varchar(50) NOT NULL,
  `photo` varchar(1000) DEFAULT NULL,
  `createdAt` varchar(30) DEFAULT NULL,
  `updatedAt` varchar(30) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `users`
--

INSERT INTO `users` (`idU`, `nom`, `prenom`, `pwd`, `telephone`, `email`, `role`, `photo`, `createdAt`, `updatedAt`) VALUES
(21, 'aaa', 'aaaaa', '$2b$10$Ijpo6.Y3ne..MyXfrvqF0eJ.HPhh8qKgc8shqsOToJY', 1111111, 'a@a.com', 'event manager', '', '2022-12-03 13:10:19', '2022-12-03 13:10:19'),
(24, 'uuuu', 'uuuu', '$2b$10$1vusRqxfxQfAIn8MfWae8elaDlc3PbKBfy4rzWTf54R', 4777777, 'ppp@gmail.com', 'event manager', '', '2022-12-04 10:39:56', '2022-12-04 10:39:56'),
(25, 'kjjj', 'jjjj', '$2b$10$JfKJO8BI6yZN7MJAejW3B.xLLqIa4bNcWKznhdmpe1Z', 555555555, 'kkkk@hh.l', 'blog manager', '', '2022-12-04 10:54:59', '2022-12-04 10:54:59'),
(26, 'kkkkk', 'kkkkk', '$2b$10$C.2Gks1veWrCk1KCwRUVZuRjl8cTSh/u7/cKzUqmAxM', 5555, 'ccccc@hhh.f', 'blog manager', '', '2022-12-04 10:56:01', '2022-12-04 10:56:01'),
(27, 'tessssttt', 'tessssttt', '$2b$10$5Ouvf50k2NkHhydK2ytLNeMyO7BxY5fSMjdIGdfFS43', 7788855, 'xcxxx@ss.c', 'blog manager', '', '2022-12-04 10:59:10', '2022-12-04 10:59:10'),
(28, 'test', 'test', 'test', 20123123, 'test@gmail.com', 'user', '', '', ''),
(29, 'test', 'test', 'jaaaaaaaaa', 555555, 'test@gmail.com', 'user', '', '', ''),
(30, 'hhhh', 'hhh', '$2b$10$SJupTwSryBV/KDCvZf6aku1kS1FHAfvDtXxieg4ZtQY', 44444444, 'tttt@yy.jj', 'user', '', '2022-12-08 11:08:45', '2022-12-08 11:08:45'),
(31, 'java', 'java', 'javvaaa', 11111111, 'java@gmail.com', 'event manager', NULL, NULL, NULL),
(32, 'testjava', 'testjava', 'testjava', 22222222, 'testjava@gmail.com', 'event manager', NULL, NULL, NULL),
(33, 'aaaaaaa', 'aaaaa', 'aaaa', 555555555, 'aaaa@hhh.cp', 'event manager', NULL, NULL, NULL),
(34, 'admin', 'admin', 'admin', 22222222, 'admin@admin.com', 'admin', NULL, NULL, NULL),
(35, 'admin', 'admin', 'admin', 22222222, 'admin@admin.com', 'admin', NULL, NULL, NULL),
(36, 'ne', 'ch', '$2b$10$hdpukIbG48sUyCMJUUfQcu1nZDITY6ul4d.e3ONDxPs', 3333, 'chaymaneffati1@gmail.com', 'user', 'chayma.jpg', '2022-12-09 15:06:51', '2022-12-09 15:06:51'),
(37, 'ne', 'ch', '$2b$10$MkUGckFUcVvHsxnz8EIrOu1fvvFK2TRhOqQeklcA49D', 3333, 'chaymaneffati1@gmail.com', 'user', 'chayma.jpg', '2022-12-09 15:07:13', '2022-12-09 15:07:13'),
(38, 'chayma', 'chayma', 'test', 33666555, 'chayma2@gmail.com', 'event manager', NULL, NULL, NULL);

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `admins`
--
ALTER TABLE `admins`
  ADD PRIMARY KEY (`idA`);

--
-- Index pour la table `blogs`
--
ALTER TABLE `blogs`
  ADD PRIMARY KEY (`idB`),
  ADD KEY `idU` (`idU`);

--
-- Index pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD PRIMARY KEY (`idC`),
  ADD KEY `idE` (`idE`);

--
-- Index pour la table `evenements`
--
ALTER TABLE `evenements`
  ADD PRIMARY KEY (`idE`),
  ADD KEY `idU` (`idU`);

--
-- Index pour la table `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`idO`),
  ADD KEY `orders_ibfk_1` (`idUser`);

--
-- Index pour la table `ordersdetails`
--
ALTER TABLE `ordersdetails`
  ADD PRIMARY KEY (`id`),
  ADD KEY `ordersdetails_ibfk_1` (`idEvents`),
  ADD KEY `idOrders` (`idOrders`);

--
-- Index pour la table `publicites`
--
ALTER TABLE `publicites`
  ADD PRIMARY KEY (`idP`);

--
-- Index pour la table `reclamations`
--
ALTER TABLE `reclamations`
  ADD PRIMARY KEY (`idRec`);

--
-- Index pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD PRIMARY KEY (`idRes`),
  ADD KEY `reservations_ibfk_1` (`idU`),
  ADD KEY `reservations_ibfk_2` (`idT`),
  ADD KEY `reservations_ibfk_3` (`idE`);

--
-- Index pour la table `tickets`
--
ALTER TABLE `tickets`
  ADD PRIMARY KEY (`idT`),
  ADD KEY `Fk` (`idE`);

--
-- Index pour la table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`idU`);

--
-- AUTO_INCREMENT pour les tables déchargées
--

--
-- AUTO_INCREMENT pour la table `admins`
--
ALTER TABLE `admins`
  MODIFY `idA` int(15) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT pour la table `blogs`
--
ALTER TABLE `blogs`
  MODIFY `idB` int(30) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `commentaires`
--
ALTER TABLE `commentaires`
  MODIFY `idC` int(100) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `evenements`
--
ALTER TABLE `evenements`
  MODIFY `idE` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `orders`
--
ALTER TABLE `orders`
  MODIFY `idO` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT pour la table `ordersdetails`
--
ALTER TABLE `ordersdetails`
  MODIFY `id` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT pour la table `publicites`
--
ALTER TABLE `publicites`
  MODIFY `idP` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT pour la table `reclamations`
--
ALTER TABLE `reclamations`
  MODIFY `idRec` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;

--
-- AUTO_INCREMENT pour la table `reservations`
--
ALTER TABLE `reservations`
  MODIFY `idRes` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT pour la table `tickets`
--
ALTER TABLE `tickets`
  MODIFY `idT` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=41115;

--
-- AUTO_INCREMENT pour la table `users`
--
ALTER TABLE `users`
  MODIFY `idU` int(100) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=39;

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `commentaires`
--
ALTER TABLE `commentaires`
  ADD CONSTRAINT `commentaires_ibfk_1` FOREIGN KEY (`idE`) REFERENCES `evenements` (`idE`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `evenements`
--
ALTER TABLE `evenements`
  ADD CONSTRAINT `evenements_ibfk_1` FOREIGN KEY (`idU`) REFERENCES `users` (`idU`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `orders`
--
ALTER TABLE `orders`
  ADD CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`idUser`) REFERENCES `users` (`idU`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `ordersdetails`
--
ALTER TABLE `ordersdetails`
  ADD CONSTRAINT `ordersdetails_ibfk_1` FOREIGN KEY (`idEvents`) REFERENCES `evenements` (`idE`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `ordersdetails_ibfk_2` FOREIGN KEY (`idOrders`) REFERENCES `orders` (`idO`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `reservations`
--
ALTER TABLE `reservations`
  ADD CONSTRAINT `reservations_ibfk_1` FOREIGN KEY (`idU`) REFERENCES `users` (`idU`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservations_ibfk_2` FOREIGN KEY (`idT`) REFERENCES `tickets` (`idT`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `reservations_ibfk_3` FOREIGN KEY (`idE`) REFERENCES `evenements` (`idE`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Contraintes pour la table `tickets`
--
ALTER TABLE `tickets`
  ADD CONSTRAINT `Fk` FOREIGN KEY (`idE`) REFERENCES `evenements` (`idE`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
