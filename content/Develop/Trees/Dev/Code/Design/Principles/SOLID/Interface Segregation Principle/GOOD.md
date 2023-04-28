## good.go
```go
package isp

type Printer interface {
    Print(document string)
}

type Scanner interface {
    Scan(document string) string
}

type Faxer interface {
    Fax(document string) error
}

type Copier interface {
    Copy(document string) string
}
```
## good_test.go
```go
package isp_test
```
### Test
```go
func TestBasicPrinter_Print(t *testing.T) {
    printer := &BasicPrinter{}

    output := CaptureOutput(func() {
        printer.Print("test document")
    })

    if output != "Printing: test document\n" {
        t.Errorf("Unexpected output: %s", output)
    }
}
```
### Example
```go
func ExampleBasicPrinter_Print() {
    printer := &BasicPrinter{}
    printer.Print("test document")
    // Output: Printing: test document
}
```