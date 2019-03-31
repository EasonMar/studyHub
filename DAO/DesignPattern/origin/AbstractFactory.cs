namespace 抽象工厂模式1
{
    class Program
    {
        static void Main(string[] args)
        {
            User user = new User();

            SqlserverUser su = new SqlserverUser();
            su.Insert(user);
            su.GetUser(1);

            Console.Read();
        }
    }

    class User
    {
        private int _id;
        public int ID
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _name;
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
    }

    class SqlserverUser
    {
        public void Insert(User user)
        {
            Console.WriteLine("在Sqlserver中给User表增加一条记录");
        }

        public User GetUser(int id)
        {
            Console.WriteLine("在Sqlserver中根据ID得到User表一条记录");
            return null;
        }
    }
}

namespace 抽象工厂模式2_工厂方法
{
    class Program
    {
        static void Main(string[] args)
        {
            User user = new User();
            //AbstractFactory factory = new SqlServerFactory();
            IFactory factory = new AccessFactory();

            IUser iu = factory.CreateUser();

            iu.Insert(user);
            iu.GetUser(1);

            Console.Read();
        }
    }

    class User
    {
        private int _id;
        public int ID
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _name;
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
    }

    interface IUser
    {
        void Insert(User user);

        User GetUser(int id);
    }

    class SqlserverUser : IUser
    {
        public void Insert(User user)
        {
            Console.WriteLine("在Sqlserver中给User表增加一条记录");
        }

        public User GetUser(int id)
        {
            Console.WriteLine("在Sqlserver中根据ID得到User表一条记录");
            return null;
        }
    }

    class AccessUser : IUser
    {
        public void Insert(User user)
        {
            Console.WriteLine("在Access中给User表增加一条记录");
        }

        public User GetUser(int id)
        {
            Console.WriteLine("在Access中根据ID得到User表一条记录");
            return null;
        }
    }

    interface IFactory
    {
        IUser CreateUser();
    }

    class SqlServerFactory : IFactory
    {
        public IUser CreateUser()
        {
            return new SqlserverUser();
        }
    }

    class AccessFactory : IFactory
    {
        public IUser CreateUser()
        {
            return new AccessUser();
        }
    }
}

namespace 抽象工厂模式3_工厂方法_多一个纬度.产品
{
    class Program
    {
        static void Main(string[] args)
        {
            User user = new User();
            Department dept = new Department();

            //AbstractFactory factory = new SqlServerFactory();
            IFactory factory = new AccessFactory();
            IUser iu = factory.CreateUser();

            iu.Insert(user);
            iu.GetUser(1);

            IDepartment id = factory.CreateDepartment();
            id.Insert(dept);
            id.GetDepartment(1);

            Console.Read();
        }
    }

    class User
    {
        private int _id;
        public int ID
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _name;
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
    }

    class Department
    {
        private int _id;
        public int ID
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _deptName;
        public string DeptName
        {
            get { return _deptName; }
            set { _deptName = value; }
        }
    }

    interface IUser
    {
        void Insert(User user);

        User GetUser(int id);
    }

    class SqlserverUser : IUser
    {
        public void Insert(User user)
        {
            Console.WriteLine("在Sqlserver中给User表增加一条记录");
        }

        public User GetUser(int id)
        {
            Console.WriteLine("在Sqlserver中根据ID得到User表一条记录");
            return null;
        }
    }

    class AccessUser : IUser
    {
        public void Insert(User user)
        {
            Console.WriteLine("在Access中给User表增加一条记录");
        }

        public User GetUser(int id)
        {
            Console.WriteLine("在Access中根据ID得到User表一条记录");
            return null;
        }
    }

    interface IDepartment
    {
        void Insert(Department department);

        Department GetDepartment(int id);
    }

    class SqlserverDepartment : IDepartment
    {
        public void Insert(Department department)
        {
            Console.WriteLine("在Sqlserver中给Department表增加一条记录");
        }

        public Department GetDepartment(int id)
        {
            Console.WriteLine("在Sqlserver中根据ID得到Department表一条记录");
            return null;
        }
    }

    class AccessDepartment : IDepartment
    {
        public void Insert(Department department)
        {
            Console.WriteLine("在Access中给Department表增加一条记录");
        }

        public Department GetDepartment(int id)
        {
            Console.WriteLine("在Access中根据ID得到Department表一条记录");
            return null;
        }
    }

    interface IFactory
    {
        IUser CreateUser();

        IDepartment CreateDepartment();
    }

    class SqlServerFactory : IFactory
    {
        public IUser CreateUser()
        {
            return new SqlserverUser();
        }

        public IDepartment CreateDepartment()
        {
            return new SqlserverDepartment();
        }
    }

    class AccessFactory : IFactory
    {
        public IUser CreateUser()
        {
            return new AccessUser();
        }

        public IDepartment CreateDepartment()
        {
            return new AccessDepartment();
        }
    }
}

namespace 抽象工厂模式4_DataAccess_switch
{
    class Program
    {
        static void Main(string[] args)
        {
            User user = new User();
            Department dept = new Department();

            IUser iu = DataAccess.CreateUser();

            iu.Insert(user);
            iu.GetUser(1);

            IDepartment id = DataAccess.CreateDepartment();
            id.Insert(dept);
            id.GetDepartment(1);

            Console.Read();
        }
    }

    class User
    {
        private int _id;
        public int ID
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _name;
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
    }

    class Department
    {
        private int _id;
        public int ID
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _deptName;
        public string DeptName
        {
            get { return _deptName; }
            set { _deptName = value; }
        }
    }

    interface IUser
    {
        void Insert(User user);

        User GetUser(int id);
    }

    class SqlserverUser : IUser
    {
        public void Insert(User user)
        {
            Console.WriteLine("在Sqlserver中给User表增加一条记录");
        }

        public User GetUser(int id)
        {
            Console.WriteLine("在Sqlserver中根据ID得到User表一条记录");
            return null;
        }
    }

    class AccessUser : IUser
    {
        public void Insert(User user)
        {
            Console.WriteLine("在Access中给User表增加一条记录");
        }

        public User GetUser(int id)
        {
            Console.WriteLine("在Access中根据ID得到User表一条记录");
            return null;
        }
    }

    interface IDepartment
    {
        void Insert(Department department);

        Department GetDepartment(int id);
    }

    class SqlserverDepartment : IDepartment
    {
        public void Insert(Department department)
        {
            Console.WriteLine("在Sqlserver中给Department表增加一条记录");
        }

        public Department GetDepartment(int id)
        {
            Console.WriteLine("在Sqlserver中根据ID得到Department表一条记录");
            return null;
        }
    }

    class AccessDepartment : IDepartment
    {
        public void Insert(Department department)
        {
            Console.WriteLine("在Access中给Department表增加一条记录");
        }

        public Department GetDepartment(int id)
        {
            Console.WriteLine("在Access中根据ID得到Department表一条记录");
            return null;
        }
    }

    class DataAccess
    {
        private static readonly string db = "Sqlserver";
        //private static readonly string db = "Access";

        public static IUser CreateUser()
        {
            IUser result = null;
            switch (db)
            {
                case "Sqlserver":
                    result = new SqlserverUser();
                    break;
                case "Access":
                    result = new AccessUser();
                    break;
            }
            return result;
        }

        public static IDepartment CreateDepartment()
        {
            IDepartment result = null;
            switch (db)
            {
                case "Sqlserver":
                    result = new SqlserverDepartment();
                    break;
                case "Access":
                    result = new AccessDepartment();
                    break;
            }
            return result;
        }
    }
}

namespace 抽象工厂模式5_反射_JS可没有这东西
{
    class Program
    {
        static void Main(string[] args)
        {
            User user = new User();
            Department dept = new Department();

            IUser iu = DataAccess.CreateUser();

            iu.Insert(user);
            iu.GetUser(1);

            IDepartment id = DataAccess.CreateDepartment();
            id.Insert(dept);
            id.GetDepartment(1);

            Console.Read();
        }
    }

    class User
    {
        private int _id;
        public int ID
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _name;
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
    }

    class Department
    {
        private int _id;
        public int ID
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _deptName;
        public string DeptName
        {
            get { return _deptName; }
            set { _deptName = value; }
        }
    }

    interface IUser
    {
        void Insert(User user);

        User GetUser(int id);
    }

    class SqlserverUser : IUser
    {
        public void Insert(User user)
        {
            Console.WriteLine("在Sqlserver中给User表增加一条记录");
        }

        public User GetUser(int id)
        {
            Console.WriteLine("在Sqlserver中根据ID得到User表一条记录");
            return null;
        }
    }

    class AccessUser : IUser
    {
        public void Insert(User user)
        {
            Console.WriteLine("在Access中给User表增加一条记录");
        }

        public User GetUser(int id)
        {
            Console.WriteLine("在Access中根据ID得到User表一条记录");
            return null;
        }
    }

    interface IDepartment
    {
        void Insert(Department department);

        Department GetDepartment(int id);
    }

    class SqlserverDepartment : IDepartment
    {
        public void Insert(Department department)
        {
            Console.WriteLine("在Sqlserver中给Department表增加一条记录");
        }

        public Department GetDepartment(int id)
        {
            Console.WriteLine("在Sqlserver中根据ID得到Department表一条记录");
            return null;
        }
    }

    class AccessDepartment : IDepartment
    {
        public void Insert(Department department)
        {
            Console.WriteLine("在Access中给Department表增加一条记录");
        }

        public Department GetDepartment(int id)
        {
            Console.WriteLine("在Access中根据ID得到Department表一条记录");
            return null;
        }
    }

    class DataAccess
    {
        private static readonly string AssemblyName = "抽象工厂模式";
        private static readonly string db = "Sqlserver";
        //private static readonly string db = "Access";

        public static IUser CreateUser()
        {
            string className = AssemblyName + "." + db + "User";
            return (IUser)Assembly.Load(AssemblyName).CreateInstance(className);
        }

        public static IDepartment CreateDepartment()
        {
            string className = AssemblyName + "." + db + "Department";
            return (IDepartment)Assembly.Load(AssemblyName).CreateInstance(className);
        }
    }
}


namespace 抽象工厂模式6_反射plus配置文件
{
    class Program
    {
        static void Main(string[] args)
        {
            User user = new User();
            Department dept = new Department();

            IUser iu = DataAccess.CreateUser();

            iu.Insert(user);
            iu.GetUser(1);

            IDepartment id = DataAccess.CreateDepartment();
            id.Insert(dept);
            id.GetDepartment(1);

            Console.Read();
        }
    }

    class User
    {
        private int _id;
        public int ID
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _name;
        public string Name
        {
            get { return _name; }
            set { _name = value; }
        }
    }

    class Department
    {
        private int _id;
        public int ID
        {
            get { return _id; }
            set { _id = value; }
        }

        private string _deptName;
        public string DeptName
        {
            get { return _deptName; }
            set { _deptName = value; }
        }
    }

    interface IUser
    {
        void Insert(User user);

        User GetUser(int id);
    }

    class SqlserverUser : IUser
    {
        public void Insert(User user)
        {
            Console.WriteLine("在Sqlserver中给User表增加一条记录");
        }

        public User GetUser(int id)
        {
            Console.WriteLine("在Sqlserver中根据ID得到User表一条记录");
            return null;
        }
    }

    class AccessUser : IUser
    {
        public void Insert(User user)
        {
            Console.WriteLine("在Access中给User表增加一条记录");
        }

        public User GetUser(int id)
        {
            Console.WriteLine("在Access中根据ID得到User表一条记录");
            return null;
        }
    }

    interface IDepartment
    {
        void Insert(Department department);

        Department GetDepartment(int id);
    }

    class SqlserverDepartment : IDepartment
    {
        public void Insert(Department department)
        {
            Console.WriteLine("在Sqlserver中给Department表增加一条记录");
        }

        public Department GetDepartment(int id)
        {
            Console.WriteLine("在Sqlserver中根据ID得到Department表一条记录");
            return null;
        }
    }

    class AccessDepartment : IDepartment
    {
        public void Insert(Department department)
        {
            Console.WriteLine("在Access中给Department表增加一条记录");
        }

        public Department GetDepartment(int id)
        {
            Console.WriteLine("在Access中根据ID得到Department表一条记录");
            return null;
        }
    }

    class DataAccess
    {
        private static readonly string AssemblyName = "抽象工厂模式";
        private static readonly string db = ConfigurationManager.AppSettings["DB"];
        
        public static IUser CreateUser()
        {
            string className = AssemblyName + "." + db + "User";
            return (IUser)Assembly.Load(AssemblyName).CreateInstance(className);
        }

        public static IDepartment CreateDepartment()
        {
            string className = AssemblyName + "." + db + "Department";
            return (IDepartment)Assembly.Load(AssemblyName).CreateInstance(className);
        }
    }
}