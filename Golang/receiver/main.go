package receiver

type Rectangle struct {
	width, height float64
}

func (r Rectangle) Area() float64 {
	return r.width * r.height
}

func (r *Rectangle) AreaPointer() float64 {
	return r.width * r.height
}
