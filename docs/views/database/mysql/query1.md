# 表查询
## 单表查询
### 查询所有记录
```sh
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

### 查询选中列记录
```sh
mysql> select id from student;
+----+
| id |
+----+
|  1 |
|  2 |
|  3 |
+----+
3 rows in set (0.00 sec)
```

### 查询指定条件下的记录
```sh
mysql> select id from student where id>2;
+----+
| id |
+----+
|  3 |
+----+
1 row in set (0.00 sec)
```

### 查询后为列取别名
```sh
mysql> select name as 姓名 from student;
+--------+
| 姓名   |
+--------+
| rvae   |
| leva   |
| zlk    |
+--------+
3 rows in set (0.00 sec)
```

### 模糊查询
```sh
# z%  %表示所有所有数据
mysql> select * from student where name like 'z%';
+----+------+
| id | name |
+----+------+
|  3 | zlk  |
+----+------+
1 row in set (0.00 sec)

 # z _表示一个字符  _ _表示两个字符以此类推。
mysql> select * from student where name like 'z_ _'; 
+----+------+
| id | name |
+----+------+
|  3 | zlk  |
+----+------+
1 row in set (0.00 sec)
```

### 排序ordery by
```sh
# asc升序（默认）
mysql> select * from student order by id asc;
+----+------+
| id | name |
+----+------+
|  1 | rvae |
|  2 | leva |
|  3 | zlk  |
+----+------+
3 rows in set (0.00 sec)

# desc（降序）
mysql> select * from student order by id desc;;
+----+------+
| id | name |
+----+------+
|  3 | zlk  |
|  2 | leva |
|  1 | rvae |
+----+------+
3 rows in set (0.00 sec)
```

### 限制显示数据的数量limit
```sh
# 按学生学号升序输出的前2条数据
mysql> select * from student order by id limit 2; 
+----+------+
| id | name |
+----+------+
|  1 | rvae |
|  2 | leva |
+----+------+
2 rows in set (0.00 sec)

# 指定的返回的数据的位置和数量
mysql> select * from zj order by id_s limit 2,2;
+------+------+
| id_s | id_c |
+------+------+
|    2 |    1 |
|    2 |    2 |
+------+------+
2 rows in set (0.00 sec)hiding
```

### 常用聚合函数
```sh
# 求最大年龄 max
mysql> select * from sst;
+----+------+-----+
| id | name | age |
+----+------+-----+
|  1 | zlk  |  18 |
|  2 | rave |  20 |
|  3 | leva |  22 |
+----+------+-----+
3 rows in set (0.00 sec)

mysql> select max(age) from sst;
+----------+
| max(age) |
+----------+
|       22 |
+----------+
1 row in set (0.00 sec)

# 求最小年龄 min
mysql> select * from sst;
+----+------+-----+
| id | name | age |
+----+------+-----+
|  1 | zlk  |  18 |
|  2 | rave |  20 |
|  3 | leva |  22 |
+----+------+-----+
3 rows in set (0.00 sec)

mysql> select min(age) from sst;
+----------+
| min(age) |
+----------+
|       18 |
+----------+
1 row in set (0.00 sec)

# 求和 sum
mysql> select * from sst;
+----+------+-----+
| id | name | age |
+----+------+-----+
|  1 | zlk  |  18 |
|  2 | rave |  20 |
|  3 | leva |  22 |
+----+------+-----+
3 rows in set (0.00 sec)


mysql> select  sum(age) from sst;
+----------+
| sum(age) |
+----------+
|       60 |
+----------+
1 row in set (0.00 sec)

# 求平均数 avg
mysql> select * from sst;
+----+------+-----+
| id | name | age |
+----+------+-----+
|  1 | zlk  |  18 |
|  2 | rave |  20 |
|  3 | leva |  22 |
+----+------+-----+
3 rows in set (0.00 sec)

mysql> select avg(age) from sst;
+----------+
| avg(age) |
+----------+
|  20.0000 |
+----------+
1 row in set (0.00 sec)

# 四舍五入 found
mysql> select * from sst;
+----+------+-----+
| id | name | age |
+----+------+-----+
|  1 | zlk  |  18 |
|  2 | rave |  20 |
|  3 | leva |  22 |
+----+------+-----+
3 rows in set (0.00 sec)

mysql> select round(avg(age)) from sst;
+-----------------+
| round(avg(age)) |
+-----------------+
|              20 |
+-----------------+
1 row in set (0.01 sec)


# 统计 count
mysql> select * from sst;
+----+------+-----+
| id | name | age |
+----+------+-----+
|  1 | zlk  |  18 |
|  2 | rave |  20 |
|  3 | leva |  22 |
+----+------+-----+
3 rows in set (0.00 sec)

mysql> select count(id) from sst;
+-----------+
| count(id) |
+-----------+
|         3 |
+-----------+
1 row in set (0.00 sec)
```

### 分组查询 group by

```sh
分组表
mysql> select * from student;
+------+-----------+-------+
| s_id | s_name    | ts_id |
+------+-----------+-------+
|    1 | 三花      |     3 |
|    2 | 玲玲      |     2 |
|    3 | 林林      |     4 |
|    4 | 班长      |     1 |
|    5 | lucky    |     1 |
|    6 | 王为      |     4 |
|    7 | jiangeng |     1 |
|    8 | 三花花    |     3 |
|    9 | 张力凯    |     2 |
+------+-----------+-------+
9 rows in set (0.00 sec)

分组方法一
mysql> select count(ts_id) from student group by ts_id;
+--------------+
| count(ts_id) |
+--------------+
|            3 |
|            2 |
|            2 |
|            2 |
+--------------+
4 rows in set (0.00 sec)

# 分组方法二
mysql> select ts_id,  count(ts_id) from student group by ts_id;
+-------+--------------+
| ts_id | count(ts_id) |
+-------+--------------+
|     1 |            3 |
|     2 |            2 |
|     3 |            2 |
|     4 |            2 |
+-------+--------------+
4 rows in set (0.00 sec)

# 分组查询指定某一条件方法
mysql> select ts_id,  count(ts_id) from student group by ts_id having count(ts_id)=3;
+-------+--------------+
| ts_id | count(ts_id) |
+-------+--------------+
|     1 |            3 |
+-------+--------------+
1 row in set (0.00 sec)
```

## 子表查询
```sh
# 求出学生的平均年龄
mysql> select avg(age) from sst;
+----------+
| avg(age) |
+----------+
|  20.0000 |
+----------+
1 row in set (0.00 sec)

mysql> select * from sst;
+----+------+-----+
| id | name | age |
+----+------+-----+
|  1 | zlk  |  18 |
|  2 | rave |  20 |
|  3 | leva |  22 |
+----+------+-----+
3 rows in set (0.00 sec)

# 查找出大于平均年龄的数据
mysql> select * from sst;
+----+------+-----+
| id | name | age |
+----+------+-----+
|  1 | zlk  |  18 |
|  2 | rave |  20 |
|  3 | leva |  22 |
+----+------+-----+
3 rows in set (0.00 sec)

mysql> select * from sst where age > 18.25;
+----+------+-----+
| id | name | age |
+----+------+-----+
|  2 | rave |  20 |
|  3 | leva |  22 |
+----+------+-----+
2 rows in set (0.00 sec)

# 将平均数的sql语句作为子查询放入上一条语句中
mysql> select * from sst where age > (select avg(age) from sst);
+----+------+-----+
| id | name | age |
+----+------+-----+
|  3 | leva |  22 |
+----+------+-----+
1 row in set (0.00 sec)

mysql> select * from sst;
+----+------+-----+
| id | name | age |
+----+------+-----+
|  1 | zlk  |  18 |
|  2 | rave |  20 |
|  3 | leva |  22 |
+----+------+-----+
3 rows in set (0.00 sec)

# 需求：要查找，软件和语言 的学生人数
# in表示两条以上数据使用
mysql> select * from student where ts_id in(
    -> select tz_id from tanzhou where tz_name='软件' or tz_name='语言');
+------+-----------+-------+
| s_id | s_name    | ts_id |
+------+-----------+-------+
|    4 | 班长      |     1 |
|    5 | lucky     |     1 |
|    7 | jiangeng  |     1 |
|    2 | 玲玲      |     2 |
|    9 | 张力凯    |     2 |
+------+-----------+-------+
5 rows in set (0.00 sec)
```

## 关联查询

### 内连接【inner\|cross】join
```sh
# 无条件内连接：（又名交叉连接/笛卡尔连接，第一张表中的每一项会和另一张表的每一项一次组合）
mysql> select * from student,tanzhou;
+------+-----------+-------+-------+---------+
| s_id | s_name    | ts_id | tz_id | tz_name |
+------+-----------+-------+-------+---------+
|    1 | 三花      |     3 |     1 | 软件    |
|    1 | 三花      |     3 |     2 | 语言    |
|    1 | 三花      |     3 |     3 | 营销    |
|    1 | 三花      |     3 |     4 | 其他    |
|    2 | 玲玲      |     2 |     1 | 软件    |
|    2 | 玲玲      |     2 |     2 | 语言    |
|    2 | 玲玲      |     2 |     3 | 营销    |
|    2 | 玲玲      |     2 |     4 | 其他    |
+------+-----------+-------+-------+---------+
8 rows in set (0.00 sec)

# 有条件内连接：（在无条件的内连接基础上，加上一个**ON**句子当连接的时候，筛选出那些有实际意义的记录行来进行拼接
mysql> select * from student ineer join tanzhou 
    -> on ts_id=tz_id;
+------+-----------+-------+-------+---------+
| s_id | s_name    | ts_id | tz_id | tz_name |
+------+-----------+-------+-------+---------+
|    4 | 班长      |     1 |     1 | 软件    |
|    5 | lucky     |     1 |     1 | 软件    |
|    7 | jiangeng  |     1 |     1 | 软件    |
|    2 | 玲玲      |     2 |     2 | 语言    |
|    9 | 张力凯    |     2 |     2 | 语言    |
|    1 | 三花      |     3 |     3 | 营销    |
|    8 | 三花花    |     3 |     3 | 营销    |
|    3 | 林林      |     4 |     4 | 其他    |
|    6 | 王为      |     4 |     4 | 其他    |
+------+-----------+-------+-------+---------+

# 筛选方法
mysql> select s_name 姓名,tz_name 学院 from student inner join tanzhou on ts_id=tz_id;
+-----------+--------+
| 姓名      | 学院   |
+-----------+--------+
| 班长      | 软件   |
| lucky     | 软件   |
| jiangeng  | 软件   |
| 玲玲      | 语言   |
| 张力凯    | 语言   |
| 三花      | 营销   |
| 三花花    | 营销   |
| 林林      | 其他   |
| 王为      | 其他   |
+-----------+--------+
9 rows in set (0.00 sec)
```

### 外连接{left\|rigth}join

* 左外连接 left join
* 左外连接：（以左表为基准）
```sh
# 两张表做连接的时候，在连接条件不匹配的时候留下左表中的数据，而右表的数据以null填充
# 例:使用左连接把学生的数据全取出，该学生没有学院信息的用null填充
mysql> select * from student left join tanzhou on ts_id=tz_id;
+------+-----------+-------+-------+---------+
| s_id | s_name    | ts_id | tz_id | tz_name |
+------+-----------+-------+-------+---------+
|    1 | 三花      |     3 |     3 | 营销    |
|    2 | 玲玲      |     2 |     2 | 语言    |
|    3 | 林林      |     4 |     4 | 其他    |
|    4 | 班长      |     1 |     1 | 软件    |
|    5 | lucky     |     1 |     1 | 软件    |
|    6 | 王为      |     4 |     4 | 其他    |
|    7 | jiangeng  |     1 |     1 | 软件    |
|    8 | 三花花    |     3 |     3 | 营销    |
|    9 | 张力凯    |     2 |     2 | 语言    |
+------+-----------+-------+-------+---------+
9 rows in set (0.00 sec)

mysql> select * from student right join tanzhou on ts_id=tz_id;
+------+-----------+-------+-------+---------+
| s_id | s_name    | ts_id | tz_id | tz_name |
+------+-----------+-------+-------+---------+
|    4 | 班长       |     1 |     1 | 软件    |
|    5 | lucky     |     1 |     1 | 软件    |
|    7 | jiangeng  |     1 |     1 | 软件    |
|    2 | 玲玲      |     2 |     2 | 语言    |
|    9 | 张力凯    |     2 |     2 | 语言    |
|    1 | 三花      |     3 |     3 | 营销    |
|    8 | 三花花    |     3 |     3 | 营销    |
|    3 | 林林      |     4 |     4 | 其他    |
|    6 | 王为      |     4 |     4 | 其他    |
| NULL | NULL      |  NULL |     5 | 设计    |
+------+-----------+-------+-------+---------+
10 rows in set (0.00 sec)
```

* 右外连接 right join
* 右外连接:（以右表为基准）
```sh
# 对两张表做连接的时候，在连接条件不匹配的时候留下右表中的数据，而左表中的数据以null填充。
# 例:使用右表外连接，把没有的学院的数据也显示出来。
mysql> select * from student right join tanzhou on ts_id=tz_id;
+------+-----------+-------+-------+---------+
| s_id | s_name    | ts_id | tz_id | tz_name |
+------+-----------+-------+-------+---------+
|    4 | 班长      |     1 |     1 | 软件    |
|    5 | lucky     |     1 |     1 | 软件    |
|    7 | jiangeng  |     1 |     1 | 软件    |
|    2 | 玲玲      |     2 |     2 | 语言    |
|    9 | 张力凯    |     2 |     2 | 语言    |
|    1 | 三花      |     3 |     3 | 营销    |
|    8 | 三花花    |     3 |     3 | 营销    |
|    3 | 林林      |     4 |     4 | 其他    |
|    6 | 王为      |     4 |     4 | 其他    |
| NULL | NULL      |  NULL |     5 | 设计    |
+------+-----------+-------+-------+---------+
10 rows in set (0.00 sec)
```

### 多表查询
```sh
# 例：查学生的ID 姓名 学院名 报学科名
mysql> select * from student 
    ->left join tanzhou on ts_id=tz_id 
    ->left join course on tz_id=tzc_id 
    ->left join choose on cc_id=c_id;
+------+--------+-------+-------+---------+------+---------+--------+-------+-------+
| s_id | s_name | ts_id | tz_id | tz_name | c_id | c_name  | tzc_id | sc_id | cc_id |
+------+--------+-------+-------+---------+------+---------+--------+-------+-------+
|    1 | zlk    |     1 |     1 | 软件    |    1 | python  |      1 |     1 |     1 |
|    1 | zlk    |     1 |     1 | 软件    |    2 | java    |      1 |     1 |     2 |
|    2 | lezlk  |     2 |     2 | 语言    |    3 | english |      2 |     2 |     3 |
|    3 | rave   |     3 |     3 | 营销    |    4 | seo     |      3 |     3 |     4 |
|    4 | rac    |     5 |     5 | 其他    |    5 | 其他    |      5 |  NULL |  NULL |
|    5 | hzip   |     4 |     4 | 设计    | NULL | NULL    |   NULL |  NULL |  NULL |
+------+--------+-------+-------+---------+------+---------+--------+-------+-------+
6 rows in set (0.00 sec)

筛选出最终结果
mysql> select s_name as 姓名,tz_name as 学院,c_name as 课程 from student 
    ->left join tanzhou on ts_id=tz_id 
    ->left join course on tz_id=tzc_id 
    ->left join choose on cc_id=c_id;
+--------+--------+---------+
| 姓名   | 学院   | 课程    |
+--------+--------+---------+
| zlk    | 软件   | python  |
| zlk    | 软件   | java    |
| lezlk  | 语言   | english |
| rave   | 营销   | seo     |
| rac    | 其他   | 其他    |
| hzip   | 设计   | NULL    |
+--------+--------+---------+
6 rows in set (0.00 sec)
```

## 练习题
### 查出学生详情表性别为男,并同时年龄大于18的
```sh
mysql> select * from details where sex='男' and age >18;
+----+------+------+-----------------+
| id | age  | sex  | adders          |
+----+------+------+-----------------+
|  3 |   20 | 男   | 测试地址三      |
|  5 |   22 | 男   | 测试地址五      |
+----+------+------+-----------------+
```

### 根据上述的结果,查出学生表对应的 姓名， 年龄，家庭住址
```sh
mysql> select s_name,age,sex,adders from student 
    ->left join details on s_id = id ;
+--------+------+------+-----------------+
| s_name | age  | sex  | adders          |
+--------+------+------+-----------------+
| zlk    |   18 | 男   | 测试地址一      |
| lezlk  |   19 | 女   | 测试地址二      |
| rave   |   20 | 男   | 测试地址三      |
| rac    |   21 | 女   | 测试地址四      |
| hzip   |   22 | 男   | 测试地址五      |
+--------+------+------+-----------------+
```

### 查出学生的（姓名，年龄，性别，所属学院）
```sh
mysql> select * from student 
    ->left join tanzhou on ts_id = tz_id 
    ->left join details on s_id=id;
+------+--------+-------+-------+---------+------+------+------+-----------------+
| s_id | s_name | ts_id | tz_id | tz_name | id   | age  | sex  | adders          |
+------+--------+-------+-------+---------+------+------+------+-----------------+
|    1 | zlk    |     1 |     1 | 软件    |    1 |   18 | 男   | 测试地址一      |
|    2 | lezlk  |     2 |     2 | 语言    |    2 |   19 | 女   | 测试地址二      |
|    3 | rave   |     3 |     3 | 营销    |    3 |   20 | 男   | 测试地址三      |
|    4 | rac    |     5 |     5 | 其他    |    4 |   21 | 女   | 测试地址四      |
|    5 | hzip   |     4 |     4 | 设计    |    5 |   22 | 男   | 测试地址五      |
+------+--------+-------+-------+---------+------+------+------+-----------------+
5 rows in set (0.00 sec)

mysql> select s_name,tz_name,age,sex,adders from student 
    ->left join tanzhou on ts_id = tz_id 
    ->left join details on s_id=id;
+--------+---------+------+------+-----------------+
| s_name | tz_name | age  | sex  | adders          |
+--------+---------+------+------+-----------------+
| zlk    | 软件    |   18 | 男   | 测试地址一      |
| lezlk  | 语言    |   19 | 女   | 测试地址二      |
| rave   | 营销    |   20 | 男   | 测试地址三      |
| rac    | 其他    |   21 | 女   | 测试地址四      |
| hzip   | 设计    |   22 | 男   | 测试地址五      |
+--------+---------+------+------+-----------------+
5 rows in set (0.00 sec)
```