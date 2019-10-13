def basic():
    class Person:
        pass

    xiaoming = Person()
    xiaohong = Person()

    print(xiaoming)
    print(xiaohong)
    print(xiaoming == xiaohong)

    p1 = Person()
    p1.name = 'Bart'

    p2 = Person()
    p2.name = 'Adam'

    p3 = Person()
    p3.name = 'Lisa'

    L1 = [p1, p2, p3]
    L2 = sorted(L1, key = lambda l: l.name.lower())

    print(L2[0].name)
    print(L2[1].name)
    print(L2[2].name)
# basic()

def further():
    class Person:
        def __init__(self, name, gender, birth, **kw):
            self.name = name
            self.gender = gender
            self.birth = birth
            for i in kw:
                setattr(self, i, kw[i])

    xiaoming = Person('Xiao Ming', 'Male', '1990-1-1', job='Student')

    print(xiaoming.name)
    print(xiaoming.job)
# further()

def classPropertyAndMethod():
    class Person:
        count = 0

        @classmethod
        def how_many(cls):
            return cls.count

        def __init__(self, name, score):
            Person.count += 1
            self.__score = score
            self.name = name

        def get_grade(self):
            if self.__score < 60:
                return 'C'
            elif self.__score < 80:
                return 'B'
            else:
                return 'A'

    p1 = Person('Bob', 90)
    print(Person.count)

    p2 = Person('Alice', 65)
    print(Person.count)

    p3 = Person('Tim', 48)
    print(Person.how_many())

    print(p1.get_grade())
    print(p2.get_grade())
    print(p3.get_grade())
classPropertyAndMethod()