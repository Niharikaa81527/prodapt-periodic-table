-- Database Schema for Periodic Table Tools Landscape
-- Run this script to create the required tables

-- Create database (if not exists)
CREATE DATABASE IF NOT EXISTS data_collection_qa;
USE data_collection_qa;

-- Create groups table
CREATE TABLE IF NOT EXISTS groups (
    id INT AUTO_INCREMENT PRIMARY KEY,
    `group` VARCHAR(50) NOT NULL UNIQUE,
    label VARCHAR(100) NOT NULL,
    color VARCHAR(7) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- Create elements table
CREATE TABLE IF NOT EXISTS elements (
    id INT AUTO_INCREMENT PRIMARY KEY,
    symbol VARCHAR(10) NOT NULL,
    subtitle VARCHAR(100) NOT NULL,
    `group` VARCHAR(50) NOT NULL,
    `desc` TEXT NOT NULL,
    link VARCHAR(500),
    position_index INT NOT NULL,
    costcodes TEXT,
    vendor VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    
    FOREIGN KEY (`group`) REFERENCES groups(`group`) ON UPDATE CASCADE,
    INDEX idx_group (`group`),
    INDEX idx_position (position_index)
);

-- Insert groups data
INSERT INTO groups (`group`, label, color) VALUES
('pmtools', 'PM Tools', '#ffe066'),
('codereview', 'Code Review', '#74c0fc'),
('unittesting', 'Unit Testing', '#ff8787'),
('testingtool', 'Testing Tools', '#63e6be'),
('cicdtools', 'CI/CD Tools', '#b197fc')
ON DUPLICATE KEY UPDATE 
    label = VALUES(label),
    color = VALUES(color);

-- Insert sample elements data (you can add more elements here)
INSERT INTO elements (symbol, subtitle, `group`, `desc`, link, position_index, costcodes, vendor) VALUES
('JI', 'JIRA', 'pmtools', 'Jira is a widely-used software tool developed by Atlassian, designed for project management, issue tracking, and bug tracking. It is particularly popular among agile teams for planning, tracking, and releasing software projects.', 'https://www.atlassian.com/software/jira', 0, 'TES Global B2C (B/TEM/001) | <a href="mailto:sriharicherur.k@prodapt.com" class="project-head-email">sriharicherur.k@prodapt.com</a>', 'Atlassian'),
('GH', 'GitHub', 'cicdtools', 'GitHub is the world''s leading web-based platform for version control and collaborative software development, built on top of Git.', 'https://github.com/', 17, 'Shentel- ServiceNow TSOM (B/STL/004) | <a href="mailto:sathiyanarayanan.m@prodapt.com" class="project-head-email">sathiyanarayanan.m@prodapt.com</a>', 'Microsoft'),
('SQ', 'SonarQube', 'codereview', 'SonarQube is an open-source platform for continuous code quality inspection that revolutionizes how development teams manage technical debt and maintain high code quality standards.', 'https://www.sonarqube.org/', 5, 'Path to Premier (B/CTL/069) | <a href="mailto:karthick.mohan@prodapt.com" class="project-head-email">karthick.mohan@prodapt.com</a>', 'SonarSource'),
('JU', 'JUnit', 'unittesting', 'JUnit is the de facto standard unit testing framework for Java applications, providing a comprehensive foundation for test-driven development.', 'https://junit.org/', 20, 'MVNx Onboarding Automation MVP 1 (B/ATT/054) | <a href="mailto:pradeshkumar.v@prodapt.com" class="project-head-email">pradeshkumar.v@prodapt.com</a>', NULL),
('SE', 'Selenium', 'testingtool', 'Selenium is the industry-standard open-source automation framework for web application testing.', 'https://www.selenium.dev/', 21, 'GCX IT Transformation - Phase 1 (B/GCX/003) | <a href="mailto:narayanan.k@prodapt.com" class="project-head-email">narayanan.k@prodapt.com</a>', NULL)
ON DUPLICATE KEY UPDATE 
    subtitle = VALUES(subtitle),
    `desc` = VALUES(`desc`),
    link = VALUES(link),
    costcodes = VALUES(costcodes),
    vendor = VALUES(vendor);
