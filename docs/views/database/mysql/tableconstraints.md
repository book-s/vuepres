# 表约束

## 非空约束
::: tip 非空约束 not null
* 有非空约束的字段，insert的时候，必须添加内容
* 注意：空字符不等于null
```sh
# 例子：
mysql> create table tb1(
    -> id int,
    -> name varchar(20) not null
    -> );
Query OK, 0 rows affected (0.03 sec)
```

### 查看表结构信息
```sh
desc tb1;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  |     | NULL    |       |
| name  | varchar(10) | NO   |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

### 手动，添加非空约束方法（必须这个字段，没有null值）
```sh
mysql> alter table tb1 
    -> modify id int not null;
Query OK, 0 rows affected (0.09 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc tb1;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   |     | NULL    |       |
| name  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

### 取消非空约束
```sh
mysql> alter table tb1
    -> modify name varchar(10);
Query OK, 0 rows affected (0.09 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc tb1;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  |     | NULL    |       |
| name  | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```
:::

## 唯一约束
::: tip 唯一约束 unique key

* 确保字段中的值的唯一
```sh
# 例：
mysql> create table tb2(
    -> id int unique key,
    -> name varchar(20)
    -> );
Query OK, 0 rows affected (0.04 sec)

mysql> desc tb2;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  | UNI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

### 添加唯一约束
```sh
mysql> alter table tb2
    -> add unique key(name);
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc tb2;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  |     | NULL    |       |
| name  | varchar(20) | YES  | UNI | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

### 删除唯一约束
```sh
mysql> alter table tb2
    -> drop key id;
Query OK, 0 rows affected (0.08 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc tb2;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  |     | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```
:::

## 主键约束
::: tip 主键约束 primary key
* 主键作用：可以唯一表示一条数据，每张表里面只有一个主键。
* 主键特性：非空且唯一，当表里没有主键的时，第一个出现的非空且为唯一的列，被当成主键。
* 注意：唯一标识一条数据
* 
```sh
# 例:
mysql> create table tb3(
    -> id int primary key,
    -> name varchar(20) not null
    -> );
Query OK, 0 rows affected (0.04 sec)

mysql> desc tb3;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   | PRI | NULL    |       |
| name  | varchar(20) | NO   |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

### 删除主键约束
```sh
mysql> alter table tb3
    -> drop primary key;
Query OK, 0 rows affected (0.10 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc tb3;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   |     | NULL    |       |
| name  | varchar(20) | NO   |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

### 添加主键约束
```sh
mysql> alter table tb3
    -> add primary key(id);
Query OK, 0 rows affected (0.11 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc tb3;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   | PRI | NULL    |       |
| name  | varchar(20) | NO   |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```
:::

## 自增长
::: tip 自增长 auto\_increment

* auto\_increment:自动编号，一般与主键组合使用。一个表里只有一个自增默认情况下，起始值为1，每次的增量为1.

```sh
# 例:
mysql> create table tb5(
    -> id int primary key auto_increment,
    -> name varchar(20)
    -> );
Query OK, 0 rows affected (0.11 sec)

mysql> desc tb5;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int(11)     | NO   | PRI | NULL    | auto_increment |
| name  | varchar(20) | YES  |     | NULL    |                |
+-------+-------------+------+-----+---------+----------------+
2 rows in set (0.00 sec)
```

### 删除自动增长
```sh
mysql> alter table tb5
    -> modify id int;
Query OK, 0 rows affected (0.04 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc tb5;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | NO   | PRI | NULL    |       |
| name  | varchar(20) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
2 rows in set (0.00 sec)
```

### 增加自动增长auto\_increment
```sh
mysql> alter table tb5
    -> modify id int auto_increment;
Query OK, 0 rows affected (0.07 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc tb5;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int(11)     | NO   | PRI | NULL    | auto_increment |
| name  | varchar(20) | YES  |     | NULL    |                |
+-------+-------------+------+-----+---------+----------------+
2 rows in set (0.00 sec)
```
:::

## 默认约束

::: tip 默认约束 default
* default： 初始值设置，插入记录时，如果没有明确为字段复制，则自动赋值默认值。

```sh
# 例:
mysql> create table tb6(
    ->    id int primary key auto_increment,
    ->    name varchar(20) not null,
    ->    age int not null default 18
    -> );
Query OK, 0 rows affected (0.04 sec)

mysql> desc tb6;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int(11)     | NO   | PRI | NULL    | auto_increment |
| name  | varchar(20) | NO   |     | NULL    |                |
| age   | int(11)     | NO   |     | 18      |                |
+-------+-------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)
```

### 删除default
```sh
mysql> alter table tb6
    -> modify age int;
Query OK, 0 rows affected (0.10 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc tb6;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int(11)     | NO   | PRI | NULL    | auto_increment |
| name  | varchar(20) | NO   |     | NULL    |                |
| age   | int(11)     | YES  |     | NULL    |                |
+-------+-------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)
```

### 添加默认值default
```sh
mysql> alter table tb6
    -> modify age int default 20;
Query OK, 0 rows affected (0.10 sec)
Records: 0  Duplicates: 0  Warnings: 0

mysql> desc tb6;
+-------+-------------+------+-----+---------+----------------+
| Field | Type        | Null | Key | Default | Extra          |
+-------+-------------+------+-----+---------+----------------+
| id    | int(11)     | NO   | PRI | NULL    | auto_increment |
| name  | varchar(20) | NO   |     | NULL    |                |
| age   | int(11)     | YES  |     | 20      |                |
+-------+-------------+------+-----+---------+----------------+
3 rows in set (0.00 sec)
```
:::

## 外键约束
::: tip 外键约束 foreign key
* 外键约束：保持数据一致性，完整性实现一对多关系。
* 外键必须关联到键上面去，一般情况，关联到另一张表的主键。
（因为一个表只存一类信息。用外键来做参照，保证数据的一致性，可以减少数据冗余）

```sh
# 表A （A表中a\_id被参照数据，不能被修改和删除）
mysql> create table a(
    -> a_id int primary key auto_increment,
    -> a_name varchar(20) not null
    -> );
Query OK, 0 rows affected (0.01 sec)

mysql> desc a;
+--------+-------------+------+-----+---------+----------------+
| Field  | Type        | Null | Key | Default | Extra          |
+--------+-------------+------+-----+---------+----------------+
| a_id   | int(11)     | NO   | PRI | NULL    | auto_increment |
| a_name | varchar(20) | NO   |     | NULL    |                |
+--------+-------------+------+-----+---------+----------------+
2 rows in set (0.00 sec)

# 表B （B表中的fy_id字段，只能添加a\_id中 已有的数据_
mysql> create table b(
    -> b_id int primary key,
    -> b_name varchar(20) not null,
    -> fy_id int not null,
    -> foreign key(fy_id) references a(a_id)
    -> );
Query OK, 0 rows affected (0.08 sec)

mysql> desc b;
+--------+-------------+------+-----+---------+-------+
| Field  | Type        | Null | Key | Default | Extra |
+--------+-------------+------+-----+---------+-------+
| b_id   | int(11)     | NO   | PRI | NULL    |       |
| b_name | varchar(20) | NO   |     | NULL    |       |
| fy_id  | int(11)     | NO   | MUL | NULL    |       |
+--------+-------------+------+-----+---------+-------+
3 rows in set (0.00 sec)
```

### 删除外键

```sh
# 删除外键指定别名方法：
    mysql> show create table b;
    +-------+-----------------------------------------------------------------+
    | Table | Create Table                                                     
    +-------+-----------------------------------------------------------------+
    | b     | CREATE TABLE `b` (
      `b_id` int(11) NOT NULL,
      `b_name` varchar(20) NOT NULL,
      `fy_id` int(11) NOT NULL,
      PRIMARY KEY (`b_id`),
      KEY `AB_id` (`fy_id`),
      CONSTRAINT `AB_id` FOREIGN KEY (`fy_id`) REFERENCES `a` (`a_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
    +-------+----------------------------------------------------------------+
    1 row in set (0.00 sec)

    mysql> alter table b drop foreign key AB_id;
    Query OK, 0 rows affected (0.11 sec)
    Records: 0  Duplicates: 0  Warnings: 0

# 删除随机外键别名方法：

    mysql> show create table b;
    +-------+----------------------------------------------------------------+
    | Table | Create Table                                                   |
    +-------+----------------------------------------------------------------+
    | b     | CREATE TABLE `b` (
      `b_id` int(11) NOT NULL,
      `b_name` varchar(20) NOT NULL,
      `fy_id` int(11) NOT NULL,
      PRIMARY KEY (`b_id`),
      KEY `fy_id` (`fy_id`),
      CONSTRAINT `b_ibfk_1` FOREIGN KEY (`fy_id`) REFERENCES `a` (`a_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
    +-------+----------------------------------------------------------------+
    1 row in set (0.00 sec)

    mysql> alter table b drop foreign key b_ibfk_1;
    Query OK, 0 rows affected (0.08 sec)
    Records: 0  Duplicates: 0  Warnings: 0
```
### 增加外键
```sh
# 指定外键别名方法一：
    mysql> alter table b
        -> add constraint AB_id foreign key (fy_id) references a(a_id);
    Query OK, 0 rows affected (0.04 sec)
    Records: 0  Duplicates: 0  Warnings: 0

    mysql> show create table b;
    +-------+----------------------------------------------------------------+
    | Table | Create Table                                                   |
    +-------+----------------------------------------------------------------+
    | b     | CREATE TABLE `b` (
      `b_id` int(11) NOT NULL,
      `b_name` varchar(20) NOT NULL,
      `fy_id` int(11) NOT NULL,
      PRIMARY KEY (`b_id`),
      KEY `AB_id` (`fy_id`),
      CONSTRAINT `AB_id` FOREIGN KEY (`fy_id`) REFERENCES `a` (`a_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
    +-------+----------------------------------------------------------------+
    1 row in set (0.00 sec)

# 随机外键别名方法二：

    mysql> alter table b
        -> add foreign key (fy_id) references a(a_id);
    Query OK, 0 rows affected (0.06 sec)
    Records: 0  Duplicates: 0  Warnings: 0

    mysql> show create table b;
    +-------+----------------------------------------------------------------+
    | Table | Create Table                                                   |
    +-------+----------------------------------------------------------------+
    | b     | CREATE TABLE `b` (
      `b_id` int(11) NOT NULL,
      `b_name` varchar(20) NOT NULL,
      `fy_id` int(11) NOT NULL,
      PRIMARY KEY (`b_id`),
      KEY `fy_id` (`fy_id`),
      CONSTRAINT `b_ibfk_1` FOREIGN KEY (`fy_id`) REFERENCES `a` (`a_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
    +-------+----------------------------------------------------------------+
    1 row in set (0.00 sec)

# 查看表使用那些命令

    mysql> show create table b;
    +-------+----------------------------------------------------------------+
    | Table | Create Table                                                   |
    +-------+----------------------------------------------------------------+
    | b     | CREATE TABLE `b` (
      `b_id` int(11) NOT NULL,
      `b_name` varchar(20) NOT NULL,
      `fy_id` int(11) NOT NULL,
      PRIMARY KEY (`b_id`),
      KEY `AB_id` (`fy_id`),
      CONSTRAINT `AB_id` FOREIGN KEY (`fy_id`) REFERENCES `a` (`a_id`)
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci |
    +-------+----------------------------------------------------------------+
    1 row in set (0.00 sec)
```
:::