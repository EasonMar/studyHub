### 继承
class Person:  # 在python2中, 这里必须传一个object: class Person(object)
    def __init__(self, name, gender):
        self.name = name
        self.gender = gender
    def identify(self):
        return 'My ID is Person'

class Student(Person):
    def __init__(self, name, gender):
        super(Student, self).__init__(name, gender)
    def identify(self):
        return 'My ID is Student'

class Teacher(Person):

    def __init__(self, name, gender, course):
        super(Teacher, self).__init__(name, gender)
        self.course = course
    def identify(self):
        return 'My ID is Teacher'

t = Teacher('Alice', 'Female', 'English')
print(t.name)
print(t.course)

### 判断类型
print(isinstance(t, Person))
print(isinstance(t, Teacher))
print(isinstance(t, object))
print(isinstance(t, Student))

### 多态
def showID(target):
    print(target.identify())

showID(t)
showID(Person('1','女'))
showID(Student('2','男'))

### 多重继承
class PartTimeTeacher(Student, Teacher):
    def __init__(self, name, gender, course, time):
        # super(PartTimeTeacher, self).__init__(name, gender, course) ## 这样不行, 怎么搞
        self.time = time

        # 首先应该避免多重继承、多级继承，不然代码质量大打折扣了。不妨了解一下 组件化编程 与 接口编程 相关知识。

    def identify(self):
        return 'My ID is part-time teacher, served for %f' % self.time


ptt = PartTimeTeacher('Alice', 'male', 'English', '1 year')
showID(ptt)
