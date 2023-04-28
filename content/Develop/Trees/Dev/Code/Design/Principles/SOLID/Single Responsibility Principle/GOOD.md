## good.go
```go
package srp
// Calculator is a struct that represents a calculator.
type Calculator struct{}
// Add is a method of Calculator that adds two integers and returns the result.
func (calc *Calculator) Add(a, b int) int {
  return a + b
}
// Subtract is a method of Calculator that subtracts one integer from another and returns the result.
func (calc *Calculator) Subtract(a, b int) int {
  return a - b
}
// Multiply is a method of Calculator that multiplies two integers and returns the result.
func (calc *Calculator) Multiply(a, b int) int {
  return a * b
}
// Divide is a method of Calculator that divides one integer by another and returns the result.
func (calc *Calculator) Divide(a, b int) int {
  return a / b
}
```
## good_test.go
```go
package srp_test
import (
  "fmt"
  "testing"
  "github.com/mindulle/misc/principles/SOLID/srp"
)
```
### Test
```go
func TestCalculator(t *testing.T) {
  tests := []struct {
    name    string
    calc    *srp.Calculator
    input1  int
    input2  int
    want    int
    wantErr bool
  }{
    {"Addition test", &srp.Calculator{}, 2, 3, 5, false},
    {"Subtraction test", &srp.Calculator{}, 5, 3, 2, false},
    {"Multiplication test", &srp.Calculator{}, 2, 3, 6, false},
    {"Division test", &srp.Calculator{}, 6, 3, 2, false},
    {"Division by zero test", &srp.Calculator{}, 6, 0, 0, true},
  }
  for _, tt := range tests {
    t.Run(tt.name, func(t *testing.T) {
      got := tt.calc.Divide(tt.input1, tt.input2)
      if got != tt.want {
        t.Errorf("Calculator.Divide() = %v, want %v", got, tt.want)
      }
    })
  }
}
```
### Example
```go
// ExampleCalculator_Add demonstrates how to use the Calculator's Add method.
func ExampleCalculator_Add() {
  calc := srp.Calculator{}
  result := calc.Add(2, 3)
  fmt.Println(result)
  // Output: 5
}
// ExampleCalculator_Subtract demonstrates how to use the Calculator's Subtract method.
func ExampleCalculator_Subtract() {
  calc := srp.Calculator{}
  result := calc.Subtract(5, 3)
  fmt.Println(result)
  // Output: 2
}
// ExampleCalculator_Multiply demonstrates how to use the Calculator's Multiply method.
func ExampleCalculator_Multiply() {
  calc := srp.Calculator{}
  result := calc.Multiply(2, 3)
  fmt.Println(result)
  // Output: 6
}
// ExampleCalculator_Divide demonstrates how to use the Calculator's Divide method.
func ExampleCalculator_Divide() {
  calc := srp.Calculator{}
  result := calc.Divide(6, 3)
  fmt.Println(result)
  // Output: 2
}
```