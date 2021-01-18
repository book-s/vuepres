# 表关系

## 一对一关系
:::tip 一对一
* 举例:学生表中有学号、姓名、学院，但学生还有些比如电话，家庭地址等比较私密的信息，这些信息不会放在学生表当中，会新建立一个学生详细信息表来存放。
* 这时的学生表和学生详细信息表两者的关系就是一对一的关系，因为一个学生只能有一条详细信息。
* 用主键加主键的方式来实现这种关系。
### 建立学生表
```sh
mysql> create table student(
    -> id int primary key,
    -> name varchar(10) not null,
    -> college varchar(10) not null
    -> );
Query OK, 0 rows affected (0.07 sec)

mysql> desc student;
+---------+-------------+------+-----+---------+-------+
| Field   | Type        | Null | Key | Default | Extra |
+---------+-------------+------+-----+---------+-------+
| id      | int(11)     | NO   | PRI | NULL    |       |
| name    | varchar(10) | NO   |     | NULL    |       |
| college | varchar(10) | NO   |     | NULL    |       |
+---------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)
```
### 建立学生详情表
```sh
mysql> create table student_details(
    -> id int primary key,
    -> sex varchar(20),
    -> age int
    -> );
Query OK, 0 rows affected (0.11 sec)

mysql> desc student_details;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   | PRI | NULL    |       |
| sex   | varchar(20) | YES  |     | NULL    |       |
| age   | int(11)     | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)
```

### 为学生详情表添加一对一关系  （一对一：用外键的方式把两个表的主键关联）
```sh
    mysql> show create table student_details\G #查看student_details表是否有一对一关系如果没有就添加    
    *************************** 1. row ***************************
           Table: student_details
    Create Table: CREATE TABLE `student_details` (
      `id` int(11) NOT NULL,
      `sex` varchar(20) DEFAULT NULL,
      `age` int(11) DEFAULT NULL,
      PRIMARY KEY (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    1 row in set (0.00 sec)

    mysql> alter table student_details          ## 添加一对一关系方法
        -> add foreign key (id) references student(id);
    Query OK, 0 rows affected (0.09 sec)
    Records: 0  Duplicates: 0  Warnings: 0

    mysql> show create table student_details\G  ## 添加一对一关系后信息
    *************************** 1. row ***************************
           Table: student_details
    Create Table: CREATE TABLE `student_details` (
      `id` int(11) NOT NULL,
      `sex` varchar(20) DEFAULT NULL,
      `age` int(11) DEFAULT NULL,
      PRIMARY KEY (`id`),
      CONSTRAINT `student_details_ibfk_1` FOREIGN KEY (`id`) REFERENCES `student` (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    1 row in set (0.00 sec)
```
### 为学生表插入数据
```sh
mysql> insert into student value(1,'rave','python'),(2,'leva','英语'),(3,'zlk','语文');
Query OK, 3 rows affected (0.02 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from student;
+----+------+---------+
| id | name | college |
+----+------+---------+
|  1 | rave | python  |
|  2 | leva | 英语    |
|  3 | zlk  | 语文    |
+----+------+---------+
3 rows in set (0.00 sec)
```

### 为学生详情表插入数据
```sh
mysql> insert into student_details value(1,'男','18'),(2,'女','19'),(3,'男','20');
Query OK, 2 rows affected (0.05 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from student_details;
+----+------+------+
| id | sex  | age  |
+----+------+------+
|  1 | 男   |   18 |
|  2 | 女   |   19 |
|  3 | 男   |   20 |
+----+------+------+
3 rows in set (0.00 sec)
```
:::

## 一对多关系
:::tip 一对多
* 举例，通常情况下，学校中一个学院可以有很多的学生，而一个学生只属于某一个学院。
* 学院与学生之间的关系就是一对多的关系，通过外键联系来实现这种关系

### 创建学院表
```sh
mysql> create table department(
    -> id int primary key auto_increment,   ##学院ID
    -> name varchar(20)                     ##学院名
    -> );
Query OK, 0 rows affected (0.09 sec)

mysql> desc department;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int(11)     | NO   | PRI | NULL    | auto_increment |
| name  | varchar(20) | YES  |     | NULL    |                |
+-------+-------------+------+-----+---------+----------------+
2 rows in set (0.00 sec)
```

### 创建学生表（学生表中，只能添加已有的学院ID）
```sh
mysql> create table student(
    -> id int primary key auto_increment,  ##学生ID
    -> name varchar(20) not null,          ##学生名字
    -> dept_id int not null                ##所属学院ID
    -> );
Query OK, 0 rows affected (0.11 sec)

mysql> desc student;
+---------+-------------+------+-----+---------+----------------+
| Field   | Type        | Null | Key | Default | Extra          |
+---------+-------------+------+-----+---------+----------------+
| id      | int(11)     | NO   | PRI | NULL    | auto_increment |
| name    | varchar(20) | NO   |     | NULL    |                |
| dept_id | int(11)     | NO   |     | NULL    |                |
+---------+-------------+------+-----+---------+----------------+
3 rows in set (0.01 sec)
```

### 建立一对多关系
```sh
    mysql> alter table student
        -> add foreign key (dept_id) references department(id);
    Query OK, 0 rows affected (0.03 sec)
    Records: 0  Duplicates: 0  Warnings: 0

    mysql> show create table student\G
    *************************** 1. row ***************************
           Table: student
    Create Table: CREATE TABLE `student` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `name` varchar(20) NOT NULL,
      `dept_id` int(11) NOT NULL,
      PRIMARY KEY (`id`),
      KEY `dept_id` (`dept_id`),
      CONSTRAINT `student_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    1 row in set (0.01 sec)
```

### 删除一对多关系
```sh
    mysql> show create table student\G
    *************************** 1. row ***************************
           Table: student
    Create Table: CREATE TABLE `student` (
      `id` int(11) NOT NULL AUTO_INCREMENT,
      `name` varchar(20) NOT NULL,
      `dept_id` int(11) NOT NULL,
      PRIMARY KEY (`id`),
      KEY `dept_id` (`dept_id`),
      CONSTRAINT `student_ibfk_1` FOREIGN KEY (`dept_id`) REFERENCES `department` (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    1 row in set (0.01 sec)

    mysql> alter table student drop foreign key student_ibfk_1;
    Query OK, 0 rows affected (0.08 sec)
    Records: 0  Duplicates: 0  Warnings: 0
```

### 学院表插入数据
```sh
mysql> insert into department values(1,'外语学院'),(2,'计算机学院');
Query OK, 2 rows affected (0.07 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from department;
+----+-----------------+
| id | name            |
+----+-----------------+
|  1 | 外语学院        |
|  2 | 计算机学院      |
+----+-----------------+
2 rows in set (0.00 sec)
```

### 学生表插入数据
```sh
mysql> insert into student values(1,'佳能',2),(2,'leva',1);
Query OK, 2 rows affected (0.01 sec)
Records: 2  Duplicates: 0  Warnings: 0

mysql> select * from student;
+----+--------+---------+
| id | name   | dept_id |
+----+--------+---------+
|  1 | 佳能   |       2 |
|  2 | leva   |       1 |
+----+--------+---------+
2 rows in set (0.00 sec)
```
:::



## 多对对关系
:::tip 多对多
* 举例：学生要报名选修课，一个学生可以报多门课程，一个课程有很多的学生报名，那么学生表与课程表两者就形成了多堆多关系。
* 对于多对多关系，需要创建中间表实现

### 建立课程表
```sh
mysql> create table cours(
    -> id int primary key auto_increment,  ##课程表ID
    -> name varchar(20) not null           ##课程表名称
    -> );
Query OK, 0 rows affected (0.05 sec)

mysql> desc cours;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int(11)     | NO   | PRI | NULL    | auto_increment |
| name  | varchar(20) | NO   |     | NULL    |                |
+-------+-------------+------+-----+---------+----------------+
2 rows in set (0.00 sec)
```

### 为课程表插入数据
```sh
mysql> insert into cours values(1,'python'),(2,'englise'),(3,'java');
Query OK, 3 rows affected (0.07 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from cours;
+----+---------+
| id | name    |
+----+---------+
|  1 | python  |
|  2 | englise |
|  3 | java    |
+----+---------+
3 rows in set (0.00 sec)
```

### 建立选课表（中间表）
```sh
    mysql> create table zj(
        -> id_s int,                                  ##学生ID
        -> id_c int,                                  ##课程ID
        -> primary key(id_s,id_c),                    ##联合主键，防止重复出现，唯一的
        -> foreign key(id_s) references student(id),  ##关联学生表
        -> foreign key(id_c) references cours(id)     ##关联课程表
        -> );
    Query OK, 0 rows affected (0.07 sec)

    mysql> desc zj;
    +-------+---------+------+-----+---------+-------+
    | Field | Type    | Null | Key | Default | Extra |
    +-------+---------+------+-----+---------+-------+
    | id_s  | int(11) | NO   | PRI | NULL    |       |
    | id_c  | int(11) | NO   | PRI | NULL    |       |
    +-------+---------+------+-----+---------+-------+
    2 rows in set (0.01 sec)

    mysql> show create table zj\G
    *************************** 1. row ***************************
           Table: zj
    Create Table: CREATE TABLE `zj` (
      `id_s` int(11) NOT NULL,
      `id_c` int(11) NOT NULL,
      PRIMARY KEY (`id_s`,`id_c`),
      KEY `id_c` (`id_c`),
      CONSTRAINT `zj_ibfk_1` FOREIGN KEY (`id_s`) REFERENCES `student` (`id`),
      CONSTRAINT `zj_ibfk_2` FOREIGN KEY (`id_c`) REFERENCES `cours` (`id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci
    1 row in set (0.00 sec)
```

### 中间表选课方法
```sh
mysql> insert into zj value(2,3);
Query OK, 1 row affected (0.05 sec)

mysql> select * from zj;
+------+------+
| id_s | id_c |
+------+------+
|    2 |    3 |
+------+------+
1 row in set (0.00 sec)
```

### 建立学生表
```sh
mysql> create table student(
    -> id int primary key auto_increment,  ##学生ID
    -> name varchar(10)                    ##学生名字
    -> );
Query OK, 0 rows affected (0.06 sec)

mysql> desc student;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int(11)     | NO   | PRI | NULL    | auto_increment |
| name  | varchar(10) | YES  |     | NULL    |                |
+-------+-------------+------+-----+---------+----------------+
2 rows in set (0.00 sec)
```

### 为学生表插入数据
```sh
mysql> insert into student values(1,'rvae',2),(2,'leva',1),(3,'zlk');
Query OK, 3 rows affected (0.07 sec)
Records: 3  Duplicates: 0  Warnings: 0

mysql> select * from student;
+----+------+
| id | name |
+----+------+
|  1 | rvae |
|  2 | leva |
|  3 | zlk  |
+----+------+
3 rows in set (0.00 sec)
```
:::

## 练习题
建立选课系统中的5张表：（学院表，学生表，学生详情表，课程表，选课表），并每张表插入4条数据。
```sh
# 创建学院college 字段有 id 分类
mysql> create table college(
    -> id int primary key,
    -> f_name varchar(20)
    -> );
Query OK, 0 rows affected (0.06 sec)

# 创建课程表course创建字段有id 课程分类
mysql> create table course(
    -> id int primary key,
    -> c_name varchar(20)
    -> );
Query OK, 0 rows affected (0.11 sec)

# 创建学生表student创建字段有id、课程名字
mysql> create table student(
    -> id int primary key auto_increment,
    -> s_name varchar(20)
    -> );
Query OK, 0 rows affected (0.06 sec)

# 创建逻辑表logic创建字段有id、课程id 联合主键 关系
mysql> create table logice(
    -> l_id int not null,
    -> c_id int not null,
    -> primary key (l_id,c_id),
    -> foreign key (l_id) references student(id),
    -> foreign key (c_id) references course(id)
    -> );
Query OK, 0 rows affected (0.12 sec)

# 创建学生详情表details 创建字段id、出生年月、性别、地址、电话、email
mysql> create table details(
    -> id int not null,
    -> age int not null,
    -> sex char(4),
    -> adder varchar(20),
    -> tel int not null,
    -> email varchar(20)
    -> );
Query OK, 0 rows affected (0.10 sec)
```

用文字描述：这5张表之间，对应的关系，并说明如何实现这个对应关系。



