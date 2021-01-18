# Mongo
## mongodb安装
安装
```sh
sudo apt-get update
sudo apt-get install -y mongodb
```

## mongodb操作
进入mongodb数据命令
```sh
mongo
```
## 创建库与集合
切换/创建数据库
```sh
use dbname
```
 显示所有数据库
```sh
show dbs
```
查看所在库
```sh
db
```
删除库
```sh
db.dropDatabase()
```
显示当前数据库的集合
```sh
show collections
```
创建集合
```sh
db.createCollection('name')
```
删除集合
```sh
db.name.drop()
```

## 增 删 改 查
增加数据方法
```sh
插入单条json格式数据
db.stu.insert({name: 'zlk',age: 35,})

插入多条数据
db.stu.insert([
   {name:'ubnt',age:182,sex:'M'},
   {name:'abc',age:32,sex:'M'},
   {name:'uu',age:33,sex:'F'}
])
```
自定义插入id和一条数据**id必须是唯一的**
```sh
db.stu.insert({"_id":1,name: 'uc',age: 35,})
```
查数据方法
```sh
查询集合中所有数据
db.stu.find()

指定单条件查询
db.stu.find({age:37})

指定多条件查询
db.stu.find({age:35,sex:'M'})

格式化显示
db.stu.find({age:37}).pretty()
```
 **逻辑运算查询**
- and条件
- or条件
- and和or混用
------------------------
- $ne  不等于
- $gt  大于
- $lt  小于
- $gte 大于等于
- $lte 小于等于
------------------------
gte查询
```sh
db.stu.find({age:{"$gte":35}})
```
and查询
```sh
db.stu.find({$and:[{sex:'M'},{age:35}]})
```
or查询
```sh
db.stu.find({$or:[{$and:[{sex:'M'},{age:37}]},{$and:[{sex:'F'},{age:37}]}]})
```
改数据方法

删数据方法

## 创建用户

## python操作mongodb
