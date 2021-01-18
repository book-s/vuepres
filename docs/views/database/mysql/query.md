# 增删改查

## 添加数据
::: tip 添加数据
### insert 方法一
* 添加单挑数据
* 添加多条数据
* insert [into] table__name [(column_name_)] {values|value}
```sh
# 插入单条数据
mysql> insert into test (id,name) value(1,'Rave');
Query OK, 1 row affected (0.03 sec)

# 插入多条数据
mysql> insert into test(id,name) value(2,'leva'),(3,'zlk');
Query OK, 2 rows affected (0.02 sec)
Records: 2  Duplicates: 0  Warnings: 0
```
### insert 方法二
* insert [into] table_name set col_name = {expr|default}
```sh
mysql> insert into test set id = 4,name = 'akai';
Query OK, 1 row affected (0.04 sec)
```
:::
## 查询数据
::: tip select查询数据
* *表示所有内容`select * from table_name [where];`
```sh
mysql> select * from test;
+------+------+
| id   | name |
+------+------+
|    1 | Rave |
|    2 | leva |
|    3 | zlk  |
|    4 | akai |
+------+------+
4 rows in set (0.00 sec)
```
### 查询指定字段信息
```sh
mysql> select name from test;
+------+
| name |
+------+
| Rave |
| leva |
| zlk  |
| akai |
+------+
4 rows in set (0.00 sec)
```
### 查询指定字段与条件信息
```sh
mysql> select name from test where id >2;
+------+
| name |
+------+
| zlk  |
| akai |
+------+
2 rows in set (0.00 sec)
```
:::
## 更新数据
::: tip 更新数据
* update table_name set col_name1={expr1|default} [where]
```sh
# 例子：将id = 3 的name 修改为‘不动’
mysql> update test set name = '不动' where id = 3;
Query OK, 1 row affected (0.06 sec)
Rows matched: 1  Changed: 1  Warnings: 0
```
:::

## 删除数据
::: tip 删除数据
* delete from table_name where where_conditon;
* 注意：一定要写where条件，不然会删除全部数据
```sh
# 例子：将id = 1 的数据删除
mysql> delete from test where id = 1;
Query OK, 1 row affected (0.04 sec)
```
:::
## 练习题


### 1. 建一张学生表包含（id、姓名、年龄、性别）

```
mysql> create table student(
    -> id int,
    -> name varchar(10),
    -> age int,
    -> sex varchar(10)
    -> );
Query OK, 0 rows affected (0.09 sec)
```

### 2. 查看表结构

```
mysql> desc student;
+-------+-------------+------+-----+---------+-------+
| Field | Type        | Null | Key | Default | Extra |
+-------+-------------+------+-----+---------+-------+
| id    | int(11)     | YES  |     | NULL    |       |
| name  | varchar(10) | YES  |     | NULL    |       |
| age   | int(11)     | YES  |     | NULL    |       |
| sex   | varchar(10) | YES  |     | NULL    |       |
+-------+-------------+------+-----+---------+-------+
4 rows in set (0.00 sec)
```

### 3. 增加四条数据

```
mysql> insert into student values(1,'zlk',25,'男'),(2,'rave',23,'女'),(3,'leva',29,'女'),(4,'one',25,'女');
Query OK, 4 rows affected (0.03 sec)
Records: 4  Duplicates: 0  Warnings: 0
```

### 4. 查询所有数据

```
mysql> select * from student;
+------+------+------+------+
| id   | name | age  | sex  |
+------+------+------+------+
|    1 | zlk  |   25 | 男   |
|    2 | rave |   23 | 女   |
|    3 | leva |   29 | 女   |
|    4 | one  |   25 | 女   |
+------+------+------+------+
4 rows in set (0.00 sec)
```

### 5. 删除id=3的数据

```
mysql> delete from student where id = 3;
Query OK, 1 row affected (0.09 sec)mysql> 

mysql>select * from student;
+------+------+------+------+
| id   | name | age  | sex  |
+------+------+------+------+
|    1 | zlk  |   25 | 男   |
|    2 | rave |   23 | 女   |
|    4 | one  |   25 | 女   |
+------+------+------+------+
3 rows in set (0.00 sec)
```

### 6. 将性别女的，修改为男

```
mysql> update student set sex = '男' where id = 2;
Query OK, 1 row affected (0.10 sec)
Rows matched: 1  Changed: 1  Warnings: 0

mysql> update student set sex = '男' where id = 4;
Query OK, 0 rows affected (0.00 sec)
Rows matched: 0  Changed: 0  Warnings: 0

mysql> select * from student;
+------+------+------+------+
| id   | name | age  | sex  |
+------+------+------+------+
|    1 | zlk  |   25 | 男   |
|    2 | rave |   23 | 男   |
|    4 | one  |   25 | 男   |
+------+------+------+------+
3 rows in set (0.01 sec)
```

### 7. 简单说明用户，数据库，表与数据的关系

```

```



