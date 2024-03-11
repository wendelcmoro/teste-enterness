-- MariaDB dump 10.19  Distrib 10.5.23-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: enterness
-- ------------------------------------------------------
-- Server version	10.5.23-MariaDB

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `text` varchar(255) DEFAULT NULL,
  `sender` int(11) NOT NULL,
  `receiver` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=189 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (1,'teste',11,13),(2,'teste',1,2),(3,'teste',13,11),(4,'teste',11,13),(5,'asdkoasdaskdkasdoas',11,13),(6,':D',13,11),(7,':D',11,13),(8,'ss',11,13),(9,'oi wendel',14,11),(10,'oi',11,14),(11,'agora ta melhor',11,14),(12,'a',11,13),(13,'aads',11,13),(14,'aoksdkoasdokpa',11,13),(15,'asdkoaskdposad',11,13),(16,'asdpakodkas',11,13),(17,'asdoasdkoasdko',11,13),(18,'asdkpoasdaskd',11,13),(19,'asdpoaksdkoa',11,13),(20,'asdpoasodkas',11,13),(21,'adasdasd',11,13),(22,'asdjioasdjiasjid',11,13),(23,'asdaskdoaspdas',11,13),(24,'askodasdosad',11,13),(25,'aopdasdkoasdko',11,13),(26,'aoksdksadpoaskdo',11,13),(27,'askodokasdkoasdoas',11,13),(28,'asdasd',11,13),(29,'a',11,13),(30,'asd',11,13),(31,'asdas',11,13),(32,'dasd',11,13),(33,'as',11,13),(34,'a',11,13),(35,'a',13,11),(36,'a',11,13),(37,'sadkoasdpsa',11,13),(38,'a',11,13),(39,'a',13,11),(40,'a',11,13),(41,',a',11,13),(42,'a',11,13),(43,'a',11,13),(44,'a',11,13),(45,'a',11,13),(46,'a',11,13),(47,'a',11,13),(48,'a',11,13),(49,'a',11,13),(50,'a',11,13),(51,'a',11,13),(52,'a',11,13),(53,'asdasdas',11,13),(54,'a',11,13),(55,',asdasd',11,13),(56,'asdokaoksdoasdoas',11,13),(57,'asdasdasdasd',11,13),(58,'a',11,13),(59,'a',11,13),(60,'ss',11,13),(61,'a',11,13),(62,'asdasdasd',11,13),(63,'asdasdas',11,13),(64,'asd',11,13),(65,'asdas',11,13),(66,'a',11,13),(67,'a',11,13),(68,'a',11,13),(69,'aa',11,13),(70,'a',11,13),(71,'a',13,11),(72,'s',11,13),(73,'s',11,13),(74,'s',11,13),(75,'s',11,13),(76,'s',11,13),(77,'s',11,13),(78,'s',11,13),(79,'s',11,13),(80,'a',11,13),(81,'b',13,11),(82,'asda',13,11),(83,'sad',13,11),(84,'asd',13,11),(85,'asas',13,11),(86,'d',11,13),(87,'aa',11,13),(88,'aa',11,13),(89,'aa',11,13),(90,'a',11,13),(91,'aa',11,13),(92,'a',11,13),(93,'sadaskdoasd',11,13),(94,'ss',11,13),(95,'ss',11,13),(96,'opaksdaksdka',11,13),(97,'33',11,13),(98,'asdasdasd',11,13),(99,'01231sadkoasdokakodaskda',11,13),(100,'asdkasdkoasd',11,13),(101,'asdopaksdaksd',11,13),(102,'asdpoaskpodka',11,13),(103,'asdoasdsak',11,13),(104,'wqoeuoqweuioqwuei',11,13),(105,'a',11,13),(106,'a',13,11),(107,'asdasd',11,13),(108,'sadasd',11,13),(109,'sadasd',11,13),(110,'a',11,13),(111,'a',13,11),(112,'b',11,13),(113,'asdasd',11,13),(114,'a',11,13),(115,'b',13,11),(116,'cc',13,11),(117,'a',11,13),(118,'a',13,11),(119,'a',11,13),(120,'aa',11,13),(121,'b',13,11),(122,'b',13,11),(123,'b',13,11),(124,'asdoasdkoaskdp',13,11),(125,'askdkapsdosd',11,13),(126,':D',11,13),(127,':D',11,13),(128,':D',11,13),(129,':D',11,13),(130,'oi',11,14),(131,'olaaaaa',14,11),(132,'eu nao acredito que esta porcaria funcionou',14,11),(133,':D',11,14),(134,':D:D:D:D:D::D',14,11),(135,'asdkasdko',14,11),(136,'asdkoaskdsako',14,11),(137,'asdkoaskdp',14,11),(138,'asdkoak',14,11),(139,']asdokaskdo',14,11),(140,'asdoaskdo',14,11),(141,'asdkoasdko',14,11),(142,'asdokaskod',14,11),(143,'asdkoaskdo',14,11),(144,'sadkoasdo',14,11),(145,'sadokaskod',14,11),(146,'asodkaspd',14,11),(147,'asdoaskda',14,11),(148,'asodkaskd',14,11),(149,'adaskodokasdopaspodjasjpdjpasdjpasdjoa',14,11),(150,'CARALHOOOO!!!!',14,11),(151,'a',13,14),(152,'b',14,13),(153,'c',13,14),(154,'ss',13,14),(155,'asdadsa',11,12),(156,'asdasd',11,12),(157,'asdasd',12,11),(158,'asdasd',11,14),(159,'akosdkadkaodokaskdoaskdaskdkasdkoasodkaskdaskdasdasodkasdkoaskdokasdokaskdpoaskdo',11,14),(160,'oi',15,13),(161,'ah, ola',13,15),(162,'tudo certo?',13,15),(163,'tudo',15,13),(164,'s',13,15),(165,'ss',15,13),(166,'sdadasd',13,15),(167,'a',13,15),(168,'a',13,15),(169,'a',13,15),(170,'é mesmo?',15,13),(171,'é',13,15),(172,'oloko',13,15),(173,'kkkk',13,15),(174,'askdoaskdoadoksa',15,13),(175,'asdaskd',15,13),(176,'asdoaskd',15,13),(177,'hm',15,13),(178,'uhum',13,15),(179,':D',13,15),(180,'asodkaoidopadopaskdsa',13,15),(181,'asdasdsad',15,13),(182,'asuhahusauhsuahsuh',15,13),(183,'asyguagysagys',15,13),(184,'oi',18,16),(185,'ola',16,18),(186,':D',16,18),(187,'tudo certo?',16,18),(188,'a',16,18);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `users` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=19 DEFAULT CHARSET=latin1 COLLATE=latin1_swedish_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'teste'),(2,'Nome do Usuário'),(3,'teste'),(4,'asdkopaskdadkoad'),(5,'asdkopaskdadkoad'),(6,'w'),(7,'w'),(8,'ss'),(9,'Wendel'),(10,'Wendel'),(11,'Wendel'),(12,'yy'),(13,'Patricia'),(14,'oi'),(15,'Wendel'),(16,'Wendel'),(17,'Pa'),(18,'Patricia');
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-03-10 22:25:01
