```go
package calculator_test

import (
    "fmt"
    "calculator"
)
```

# Example
```
func ExampleAdd() {
    sum := calculator.Add(2, 3)
    fmt.Println(sum)
    // Output: 5
}
```

# Test
```
func TestAdd(t *testing.T) {
    cases := []struct {
        x, y int
        want int
    }{
        {1, 2, 3},
        {-1, -2, -3},
        {0, 0, 0},
    }
    for _, c := range cases {
        got := calculator.Add(c.x, c.y)
        if got != c.want {
            t.Errorf("Add(%d, %d) == %d, want %d", c.x, c.y, got, c.want)
        }
    }
}
```