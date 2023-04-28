## good.go
```go
package lsp

type Shape interface {
    GetArea() float64
}

type Rectangle struct {
    Width  float64
    Height float64
}

func (r *Rectangle) GetArea() float64 {
    return r.Width * r.Height
}

type Square struct {
    Side float64
}

func (s *Square) GetArea() float64 {
    return s.Side * s.Side
}
```
## good_test.go
```go
package lsp

import (
    "fmt"
    "testing"
)
```
### Test
```go
func TestRectangleGetArea(t *testing.T) {
    r := &Rectangle{Width: 3, Height: 4}
    area := r.GetArea()
    expectedArea := float64(12)

    if area != expectedArea {
        t.Errorf("got %f, expected %f", area, expectedArea)
    }
}

func TestSquareGetArea(t *testing.T) {
    s := &Square{Side: 5}
    area := s.GetArea()
    expectedArea := float64(25)

    if area != expectedArea {
        t.Errorf("got %f, expected %f", area, expectedArea)
    }
}

func TestGetTotalArea(t *testing.T) {
    shapes := []Shape{
        &Rectangle{Width: 3, Height: 4},
        &Square{Side: 5},
    }
    totalArea := GetTotalArea(shapes)
    expectedArea := float64(37)

    if totalArea != expectedArea {
        t.Errorf("got %f, expected %f", totalArea, expectedArea)
    }
}
```
### Example
```go
func ExampleSquareGetArea() {
    s := &Square{Side: 5}
    fmt.Println(s.GetArea())
    // Output: 25
}

func ExampleRectangleGetArea() {
    r := &Rectangle{Width: 3, Height: 4}
    fmt.Println(r.GetArea())
    // Output: 12
}

func ExampleGetTotalArea() {
    shapes := []Shape{
        &Rectangle{Width: 3, Height: 4},
        &Square{Side: 5},
    }
    totalArea := GetTotalArea(shapes)
    fmt.Println(totalArea)
    // Output: 37
}
```