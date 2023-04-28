## bad.go
```go
package isp

type Machine interface {
    Print(document string)
    Scan(document string) string
    Fax(document string) error
    Copy(document string) string
}
```
## bad_test.go
### Test
```go
package isp_test

func TestMachine_Print(t *testing.T) {
    machine := &Printer{}

    output := CaptureOutput(func() {
        machine.Print("test document")
    })

    if output != "Printing: test document\n" {
        t.Errorf("Unexpected output: %s", output)
    }
}

```
### Example
```go
func TestMachine_Print(t *testing.T) {
    machine := &Printer{}

    output := CaptureOutput(func() {
        machine.Print("test document")
    })

    if output != "Printing: test document\n" {
        t.Errorf("Unexpected output: %s", output)
    }
}

```