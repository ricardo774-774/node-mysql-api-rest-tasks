
# table for user
create table user (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL,
    creation_date DATE NOT NULL
);



# table for task
create table task (
	id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    title VARCHAR(100) NOT NULL,
    description VARCHAR(200) NOT NULL,
    isCompleted BOOL NOT NULL,
    deadline DATE NOT NULL,
    id_user INT NOT NULL,
    CONSTRAINT FK_TaskUser FOREIGN KEY(id_user) REFERENCES user(id) ON UPDATE CASCADE,
    comments VARCHAR(400) DEFAULT NULL,
    responsible VARCHAR(100) DEFAULT NULL,
    tags ENUM('job', 'school', 'family', 'friends', 'couple', 'home') DEFAULT NULL
);