interface EmployeeType {
    id: number,
    fullname: string,
    role: string
}

let employees: Record<number, EmployeeType> = {
    0: { id: 1, fullname: 'John', role: 'Designer' }
}

// 如何理解 [P in number]: string
// type t = Record<number, string> // { [name: number]: string }
