CREATE TABLE `bugs` (
  `bid` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(512) DEFAULT NULL,
  `create_user` varchar(50) DEFAULT NULL,
  `create_date` timestamp NULL DEFAULT NULL,
  `description` text COMMENT 'detail of bug description and solution',
  `priority` int(10) unsigned DEFAULT '1' COMMENT 'normal:1 , important:2, urgent:3',
  `project_id` char(10) DEFAULT NULL COMMENT 'belong to which project',
  `update_user` varchar(50) DEFAULT NULL,
  `update_date` timestamp NULL DEFAULT NULL,
  `fix_user` varchar(50) DEFAULT NULL,
  `fix_date` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8 COMMENT='table of bug items'$$

