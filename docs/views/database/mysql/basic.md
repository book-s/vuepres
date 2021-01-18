
# 基础操作

## 创建用户与授权用户
::: tip 创建新用户
```sh
# 登陆数据库
sudo mysql -uroot -p 回车登录数据库

#创建用户%表示任意IP可以访问本数据库，可以指定IP或localhost访问数据库
create user 'username'@'%' identified by 'userpassword';
```
* 查看用户是否创建成功
```sh
mysql> select user();
```
* 用户授权
```sh
grant all privileges on *.* to 'username'@'%' WITH GRANT OPTION;
```
* 立即生效
```sh
flush privileges;
```
:::

## 创建与删除 数据库
:::tip 数据库
### 创建新数据库
* create database [in not exists] 重复创建会报错，所以可以加上if not exists
* 注意：SQL语句必须以分号结尾。
```sh
mysql> create database mydb;
# 出现如下代码标识数据库创建成功
Query OK, 1 row affected (0.06 sec)
```
### 查询数据库
```sh
mysql> show databases;
出现如下代码表示现有数据库
+--------------------+
| Database           |
+--------------------+
| information_schema |
| mydb               |
| mysql              |
| performance_schema |
| sys                |
+--------------------+
6 rows in set (0.00 sec)
```

### 删除数据库
* drop database [in exists] dbname;
* 如果不知道数据库，是否存在记得加if exists。
```sh
mysql> drop database mydb;
# 出现如下代码表示删除数据库成功
Query OK, 0 rows affected (0.11 sec)
```
:::

## 创建表与删除表
:::tip 创建数据库表
```sh
# 查看数据库
mysql> show databases;

# 进入数据库
mysql> use mydb

# 查看当前数据库
mysql> select database();
```
### 创建表
* create table [if not exists] table_name(column_name data_type,);
```sh
mysql> create table if not exists vue(
   -> id int,
   -> name varchar(10)
   -> );

# 出现如下代码表示创建表成功 
Query OK, 0 rows affected (0.06 sec)
```
### 查看表结构
* describe tb_name
```sh
mysql> desc vue;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.01 sec)
```
### 查看数据库表
```sh
mysql> show tables;
+----------------+
| Tables_in_mydb |
+----------------+
| vue            |
+----------------+
1 row in set (0.01 sec)
```
### 删除表
* mysql> drop table tablename;
```sh
mysql> drop table vue;
# 出现如下代码表示删除表成功
Query OK, 0 rows affected (0.17 sec)
```
:::

## 表结构_增_删_改_查
:::tip 表结构
### 表结构增
* 在表结构内第一行增加一个字段
* 在表结构内插入到指定位置指定字段
```sh

mysql> create table tb1(
   -> id int,
   -> name char(4)
   -> );
Query OK, 0 rows affected (0.08 sec)

# 插入列内第一行数据
mysql> alter table tb1
   -> add age int first;
Query OK, 0 rows affected (0.07 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 在表结构内插入到指定位置指定字段
mysql> alter table tb1
   -> add age int after id;     #after表示插入到指定字段后面
Query OK, 0 rows affected (0.02 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc tb1;
+-------+---------+------+-----+---------+-------+
| Field | Type    | Null | Key | Default | Extra |
+-------+---------+------+-----+---------+-------+
| id    | int(11) | YES  |     | NULL    |       |
| age   | int(11) | YES  |     | NULL    |       |
| name  | char(4) | YES  |     | NULL    |       |
+-------+---------+------+-----+---------+-------+
3 rows in set (0.00 sec)
```
### 表结构删
* 删除表结构内指定字符串
```sh
# 未删指定字符串表结构如下
+-------+---------+------+-----+---------+-------+
| Field | Type    | Null | Key | Default | Extra |
+-------+---------+------+-----+---------+-------+
| id    | int(11) | YES  |     | NULL    |       |
| age   | int(11) | YES  |     | NULL    |       |
| name  | char(4) | YES  |     | NULL    |       |
+-------+---------+------+-----+---------+-------+
3 rows in set (0.00 sec)
# 删除表结构内指定字符串
mysql> alter table tb1
   -> drop age;
Query OK, 0 rows affected (0.07 sec)
Records: 0  Duplicates: 0  Warnings: 0
# 删除指定字符串age后表结构如下
mysql> desc tb1;
+-------+---------+------+-----+---------+-------+
| Field | Type    | Null | Key | Default | Extra |
+-------+---------+------+-----+---------+-------+
| id    | int(11) | YES  |     | NULL    |       |
| name  | char(4) | YES  |     | NULL    |       |
+-------+---------+------+-----+---------+-------+
2 rows in set (0.01 sec)

```
### 表结构改
* 表结构内数据类型修改`modify`方法
* 表结构字段与数据类型修改方法`change`
* 表名称修改`rename`方法
```sh
# 表结构内数据类型修改方法
mysql> alter table tb1
   -> modify name varchar(10);
Query OK, 0 rows affected (0.03 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 查询修改数据类型查询结果
mysql> desc tb1;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  |     | NULL    |       |
| name  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)

# 表结构字段与数据类型修改方法
mysql> alter table tb1
   -> change name sex char(4);
Query OK, 0 rows affected (0.06 sec)
Records: 0  Duplicates: 0  Warnings: 0

# 查询表字段和数据类型
mysql> desc tb1;
+-------+---------+------+-----+---------+-------+
| Field | Type    | Null | Key | Default | Extra |
+-------+---------+------+-----+---------+-------+
| id    | int(11) | YES  |     | NULL    |       |
| sex   | char(4) | YES  |     | NULL    |       |
+-------+---------+------+-----+---------+-------+
2 rows in set (0.00 sec)

# 表名称修改方法
mysql> alter table tb2
   -> rename tb1;
Query OK, 0 rows affected (0.06 sec)

# 查看修改表名字结果查询
mysql> show tables;
+----------------+
| Tables_in_mydb |
+----------------+
| tb1            |
+----------------+
6 rows in set (0.00 sec)
```
### 表结构查
* show create table tablename 
* desc tablename 
```sh
# 查询表、使用什么命令创建的
mysql> show create table vue3;
+-------+-----------------------------------------------------------------------------------------------------------------------+
| Table | Create Table                                                                                                          |
+-------+-----------------------------------------------------------------------------------------------------------------------+
| vue3  | CREATE TABLE `vue3` (
  `id` int DEFAULT NULL,
  `name` varchar(10) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 |
+-------+-----------------------------------------------------------------------------------------------------------------------+
1 row in set (0.00 sec)

# 查询表、结构
mysql> desc vue3;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int         | YES  |     | NULL    |       |
| name  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```
### 编码设置
```sh
# 数据库编码设置为`utf8`
alter database mydb character set utf8;

# 出现如下代码表示设置编码成功
Query OK, 1 row affected, 1 warning (0.05 sec)

# 查看数据库编码
mysql> show create database mydb \G
*************************** 1. row ***************************
       Database: mydb
Create Database: CREATE DATABASE `mydb` /*!40100 DEFAULT CHARACTER SET utf8 */ /*!80016 DEFAULT ENCRYPTION='N' */
1 row in set (0.00 sec)
```
### 退出MYSQL
```sh
mysql> quit
```
:::