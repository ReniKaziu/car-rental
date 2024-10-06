import {MigrationInterface, QueryRunner} from "typeorm";

export class init1728229458821 implements MigrationInterface {
    name = 'init1728229458821'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`companies\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` bigint NOT NULL, \`updatedAt\` bigint NOT NULL, \`name\` varchar(255) NOT NULL, \`number\` varchar(255) NOT NULL, \`city\` varchar(255) NULL, \`latitude\` decimal(10,8) NOT NULL, \`longitude\` decimal(11,8) NOT NULL, \`status\` enum ('active', 'inactive') NOT NULL DEFAULT 'active', \`isShuttle\` tinyint NOT NULL DEFAULT 0, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`car-services\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` bigint NOT NULL, \`updatedAt\` bigint NOT NULL, \`note\` text NULL, \`mileage\` varchar(255) NULL, \`expense\` varchar(255) NULL, \`date\` bigint NOT NULL, \`carId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`users\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` bigint NOT NULL, \`updatedAt\` bigint NOT NULL, \`firstName\` varchar(255) NOT NULL, \`lastName\` varchar(255) NOT NULL, \`birthday\` bigint NULL, \`displayName\` varchar(255) NULL, \`email\` varchar(255) NULL, \`phone\` varchar(255) NOT NULL, \`password\` varchar(255) NOT NULL, \`city\` varchar(255) NULL, \`state\` varchar(255) NULL, \`confirmationCode\` int NOT NULL, \`confirmationCodeExpiration\` bigint NULL, \`resetPasswordCode\` int NULL, \`resetPasswordCodeExpiration\` bigint NULL, \`status\` enum ('active', 'inactive') NOT NULL DEFAULT 'inactive', \`role\` enum ('client', 'owner') NOT NULL DEFAULT 'client', \`settings\` json NULL, \`licenseNumber\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`reservations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` bigint NOT NULL, \`updatedAt\` bigint NOT NULL, \`from\` bigint NOT NULL, \`to\` bigint NOT NULL, \`price\` decimal(10,2) NOT NULL, \`driverFirstName\` varchar(255) NOT NULL, \`driverLastName\` varchar(255) NOT NULL, \`driverAge\` int NOT NULL, \`driverLicenseNumber\` varchar(255) NOT NULL, \`status\` enum ('PENDING', 'APPROVED', 'REJECTED', 'CANCELED') NOT NULL DEFAULT 'PENDING', \`notes\` text NULL, \`userId\` int NOT NULL, \`carId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`cars\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` bigint NOT NULL, \`updatedAt\` bigint NOT NULL, \`description\` varchar(255) NULL, \`make\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`engine\` varchar(255) NOT NULL, \`year\` int NOT NULL, \`fuelType\` enum ('petrol', 'diesel', 'electric', 'hybrid') NOT NULL, \`gearType\` enum ('automatic', 'manual', 'other') NOT NULL, \`type\` enum ('micro', 'sedan', 'suv', 'truck', 'coupe', 'hatchback', 'cabriolet', 'minivan', 'wagon', 'pickup', 'crossover', 'sports car', 'limo', 'off road') NOT NULL, \`color\` varchar(255) NOT NULL, \`mileage\` int NULL, \`licensePlate\` varchar(255) NOT NULL, \`seats\` int NOT NULL, \`doors\` int NOT NULL, \`price\` decimal(10,2) NOT NULL, \`weeklyPrice\` decimal(10,2) NOT NULL, \`monthlyPrice\` decimal(10,2) NOT NULL, \`relevantScore\` int NOT NULL, \`isAvailable\` tinyint NOT NULL DEFAULT 1, \`minimumDriverAge\` int NOT NULL DEFAULT '18', \`minimumRentDays\` int NOT NULL DEFAULT '1', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`timetables\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` bigint NOT NULL, \`updatedAt\` bigint NOT NULL, \`day\` enum ('0', '1', '2', '3', '4', '5', '6') NOT NULL, \`from\` bigint NOT NULL, \`to\` bigint NOT NULL, \`locationId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`dayOffs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` bigint NOT NULL, \`updatedAt\` bigint NOT NULL, \`from\` bigint NOT NULL, \`to\` bigint NOT NULL, \`locationId\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`locations\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` bigint NOT NULL, \`updatedAt\` bigint NOT NULL, \`name\` varchar(255) NULL, \`number\` varchar(255) NOT NULL, \`city\` varchar(255) NULL, \`latitude\` decimal(10,8) NOT NULL, \`longitude\` decimal(11,8) NOT NULL, \`status\` enum ('active', 'inactive') NOT NULL DEFAULT 'active', PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`filters\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` bigint NOT NULL, \`updatedAt\` bigint NOT NULL, \`hash\` varchar(255) NOT NULL, \`make\` varchar(255) NOT NULL, \`model\` varchar(255) NOT NULL, \`engine\` varchar(255) NOT NULL, \`year\` int NOT NULL, \`fuelType\` enum ('petrol', 'diesel', 'electric', 'hybrid') NOT NULL, \`gearType\` enum ('automatic', 'manual', 'other') NOT NULL, \`type\` enum ('micro', 'sedan', 'suv', 'truck', 'coupe', 'hatchback', 'cabriolet', 'minivan', 'wagon', 'pickup', 'crossover', 'sports car', 'limo', 'off road') NOT NULL, \`seats\` int NOT NULL, \`doors\` int NOT NULL, UNIQUE INDEX \`hash\` (\`hash\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`logs\` (\`id\` int NOT NULL AUTO_INCREMENT, \`createdAt\` bigint NOT NULL, \`updatedAt\` bigint NOT NULL, \`message\` text NOT NULL, \`level\` enum ('error', 'info') NULL, \`userId\` int NULL, \`ipAddress\` varchar(45) NULL, \`stackTrace\` text NULL, \`source\` varchar(255) NULL, \`additionalInfo\` text NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`car-services\` ADD CONSTRAINT \`FK_a09026ebb3c8012d55ef74cdb2a\` FOREIGN KEY (\`carId\`) REFERENCES \`cars\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reservations\` ADD CONSTRAINT \`FK_aa0e1cc2c4f54da32bf8282154c\` FOREIGN KEY (\`userId\`) REFERENCES \`users\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`reservations\` ADD CONSTRAINT \`FK_585ea7e0e4fa121d3c15a557475\` FOREIGN KEY (\`carId\`) REFERENCES \`cars\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`timetables\` ADD CONSTRAINT \`FK_757b8e50d30f5d14118866326fe\` FOREIGN KEY (\`locationId\`) REFERENCES \`locations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`dayOffs\` ADD CONSTRAINT \`FK_20c4dd215dfeccb5f8c09403c31\` FOREIGN KEY (\`locationId\`) REFERENCES \`locations\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`dayOffs\` DROP FOREIGN KEY \`FK_20c4dd215dfeccb5f8c09403c31\``);
        await queryRunner.query(`ALTER TABLE \`timetables\` DROP FOREIGN KEY \`FK_757b8e50d30f5d14118866326fe\``);
        await queryRunner.query(`ALTER TABLE \`reservations\` DROP FOREIGN KEY \`FK_585ea7e0e4fa121d3c15a557475\``);
        await queryRunner.query(`ALTER TABLE \`reservations\` DROP FOREIGN KEY \`FK_aa0e1cc2c4f54da32bf8282154c\``);
        await queryRunner.query(`ALTER TABLE \`car-services\` DROP FOREIGN KEY \`FK_a09026ebb3c8012d55ef74cdb2a\``);
        await queryRunner.query(`DROP TABLE \`logs\``);
        await queryRunner.query(`DROP INDEX \`hash\` ON \`filters\``);
        await queryRunner.query(`DROP TABLE \`filters\``);
        await queryRunner.query(`DROP TABLE \`locations\``);
        await queryRunner.query(`DROP TABLE \`dayOffs\``);
        await queryRunner.query(`DROP TABLE \`timetables\``);
        await queryRunner.query(`DROP TABLE \`cars\``);
        await queryRunner.query(`DROP TABLE \`reservations\``);
        await queryRunner.query(`DROP TABLE \`users\``);
        await queryRunner.query(`DROP TABLE \`car-services\``);
        await queryRunner.query(`DROP TABLE \`companies\``);
    }

}
