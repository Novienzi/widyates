CREATE DATABASE products

CREATE TABLE `admins` (
  `id` varchar(36) PRIMARY KEY NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
);

-- to answer question number 4 :
CREATE TABLE `products` (
  `id` varchar(36) PRIMARY KEY NOT NULL,
  `name` varchar(255) NOT NULL,
  `price` varchar(255) NOT NULL
);
