In Go, a method receiver is a parameter associated with a method that determines which data type can call that method. It is similar to the concept of "this" or "self" in other programming languages.

In Go, the receiver can be of two types: value receiver and pointer receiver. A value receiver passes a copy of the data to the method, while a pointer receiver passes a reference to the data.

Here is an example of a method with a value receiver:

```go
type Rectangle struct {
    width, height float64
}

func (r Rectangle) Area() float64 {
    return r.width * r.height
}
```

And here is an example of a method with a pointer receiver:

```go
type Rectangle struct {
    width, height float64
}

func (r *Rectangle) Area() float64 {
    return r.width * r.height
}
```

In the first example, `r` is a value receiver, so when calling the `Area()` method on a `Rectangle` instance, a copy of the `Rectangle` struct will be made.

In the second example, `r` is a pointer receiver, so the `Area()` method is called on a reference to the `Rectangle` instance(意思是共用这个实例, 但是这个实例哪里来呢?), allowing modifications to the original data.

Both value and pointer receivers have their use cases, and the choice depends on the specific requirements of your code.