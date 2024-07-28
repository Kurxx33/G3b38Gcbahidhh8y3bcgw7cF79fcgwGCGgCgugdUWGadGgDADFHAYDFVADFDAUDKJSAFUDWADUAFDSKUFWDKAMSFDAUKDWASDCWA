-- Database: `doxbin`

-- Table for users
CREATE TABLE `users` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `username` VARCHAR(50) NOT NULL,
    `password` VARCHAR(255) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `profile_picture` VARCHAR(255),
    `banner` VARCHAR(255),
    `bio` TEXT,
    PRIMARY KEY (`id`)
);

-- Table for invites
CREATE TABLE `invites` (
    `code` VARCHAR(20) NOT NULL,
    `used` BOOLEAN NOT NULL DEFAULT FALSE,
    PRIMARY KEY (`code`)
);

-- Table for pastes
CREATE TABLE `pastes` (
    `id` INT(11) NOT NULL AUTO_INCREMENT,
    `user_id` INT(11) NOT NULL,
    `title` VARCHAR(255) NOT NULL,
    `content` TEXT NOT NULL,
    `created_at` TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`),
    FOREIGN KEY (`user_id`) REFERENCES `users`(`id`)
);
