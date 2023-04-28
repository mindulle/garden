## bad.go
```go
package lsp

type Rectangle struct {
    Width  float64
    Height float64
}

func (r *Rectangle) SetWidth(width float64) {
    r.Width = width
}

func (r *Rectangle) SetHeight(height float64) {
    r.Height = height
}

func (r *Rectangle) GetArea() float64 {
    return r.Width * r.Height
}

type Square struct {
    Rectangle
}

func (s *Square) SetWidth(width float64) {
    s.Width = width
    s.Height = width
}

func (s *Square) SetHeight(height float64) {
    s.Height = height
    s.Width = height
}

```
## bad_test.go
```go
package lsp

import "testing"
```
### Test
```go
func TestRectangleGetArea(t *testing.T) {
    r := &Rectangle{Width: 3, Height: 2}
    area := r.GetArea()

    if area != 6 {
        t.Errorf("Unexpected area for rectangle. Got %v, expected %v", area, 6)
    }
}

func TestSquareGetArea(t *testing.T) {
    s := &Square{Rectangle{Width: 5, Height: 5}}
    area := s.GetArea()

    if area != 25 {
        t.Errorf("Unexpected area for square. Got %v, expected %v", area, 25)
    }
}

func TestSquareSetWidth(t *testing.T) {
    s := &Square{Rectangle{Width: 5, Height: 5}}
    s.SetWidth(7)

    if s.Width != 7 {
        t.Errorf("Unexpected width for square. Got %v, expected %v", s.Width, 7)
    }

    if s.Height != 5 {
        t.Errorf("Unexpected height for square. Got %v, expected %v", s.Height, 5)
    }
}

func TestSquareSetHeight(t *testing.T) {
    s := &Square{Rectangle{Width: 5, Height: 5}}
    s.SetHeight(10)

    if s.Width != 10 {
        t.Errorf("Unexpected width for square. Got %v, expected %v", s.Width, 10)
    }

    if s.Height != 10 {
        t.Errorf("Unexpected height for square. Got %v, expected %v", s.Height, 10)
    }
}
```
### Example
```go
package lsp

import (
    "fmt"
)

func ExampleRectangleGetArea() {
    r := Rectangle{Width: 3, Height: 4}
    fmt.Println(r.GetArea())
    // Output: 12
}

func ExampleSquareSetWidth() {
    s := Square{Rectangle{Width: 5, Height: 5}}
    s.SetWidth(10)
    fmt.Println(s.Width, s.Height)
    // Output: 10 5
}

func ExampleSquareSetHeight() {
    s := Square{Rectangle{Width: 5, Height: 5}}
    s.SetHeight(10)
    fmt.Println(s.Width, s.Height)
    // Output: 5 10
}
```