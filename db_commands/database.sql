
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
    description INT NOT NULL,
    isCompleted BOOL NOT NULL,
    deadline DATE NOT NULL,
    comments VARCHAR(400) DEFAULT NULL,
    id_user INT,
    CONSTRAINT FK_TaskUser FOREIGN KEY(id_user) REFERENCES user(id) ON UPDATE CASCADE,
    tags ENUM('job', 'school', 'family', 'friends', 'couple') DEFAULT NULL
);