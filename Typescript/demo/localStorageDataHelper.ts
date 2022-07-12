class LocalStorageDataHelper {
    // ======= 属性 =======

    // localStorage 名称
    storageName!: string // !: 非null和非undefined的类型断言

    // 主键名
    primaryKeyName: string

    // 构造函数
    constructor(sname: string, pkname: string) {
        this.storageName = sname
        this.primaryKeyName = pkname
    }

    // ======= 方法 =======
    // 获取localStorage数据  (视频中取名为 readData)
    // 疑问: Object vs object 有什么区别, Object是接口

    // getData(): Array<object> 会导致 item[this.primaryKeyName] 报错 ---> 这种怎么解决
    // No index signature with a parameter of type 'string' was found on type 'object'.

    // 视频中: 因为不确定 Array 中的 Object是什么类型的, 所以直接 定义返回 any ---> 感觉不太严谨
    getData(): any {
        // 获取 localStorage 值
        const storageValue = localStorage.getItem(this.storageName)

        // parse string
        let result = storageValue ? JSON.parse(storageValue) : []

        // 返回
        return result
    }

    // 保存localStorage数据 --- 返回是否保存成功
    saveData(data: Array<object>): void {
        // stringify 
        const result = JSON.stringify(data)

        // 存数据
        localStorage.setItem(this.storageName, result)
    }

    // 设置localStorage数据 --- 返回主键
    setData(data: object): string {
        // 获取 storage 数据
        const storage = this.getData()
        const dataLenth = storage.length
        const primaryKey = dataLenth > 0 ? storage[dataLenth - 1] + 1 : 1
        // 给新数据添加 主键
        // 视频中使用 data[this.primaryKeyName] = primaryKey 的方式添加主键
        const newData = {
            ...data,
            [this.primaryKeyName]: primaryKey
        }

        // 存入数据中
        storage.push(newData)

        // 写入localStorage
        this.saveData(storage)

        return primaryKey
    }

    // 删除localStorage数据 --- 返回是否删除成功
    delData(id: number): boolean {
        const storage = this.getData()
        const primaryKeyIndex = storage.findIndex((item: any) => item[this.primaryKeyName] = id)
        if (primaryKeyIndex > -1) {
            storage.splice(primaryKeyIndex, 1)
            this.setData(storage)
            return true
        }

        return false
    }
}