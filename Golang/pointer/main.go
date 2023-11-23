package main

import "fmt"

// 在Go语言中，可以使用点操作符来访问指向结构体的指针的属性。只要你有一个指向结构体的指针变量，你就可以使用点操作符来访问该结构体的属性。

type Person struct {
	Name string
	Age  int
}

func main() {
	// 创建一个指向Person结构体的指针 ---- 指针与 js 里面的 "引用" 相对应...是一个共享对象
	p := &Person{
		Name: "Alice",
		Age:  25,
	}

	// 使用点操作符访问结构体的属性
	fmt.Println(p.Name)
	fmt.Println(p.Age)
}
