# Golang과 친해지기
## 의존성을 설치하는 방법
### 1. go 모듈 초기화하기
```shell
go mod init <module-name>
```

### 2. 모듈(dependency) 설치하기
```shell
go get github.com/user/package
```
- 설치 된 모듈은 `go.mod` 파일에 표시 됩니다.

### 3. 설치한 모듈을 사용하고자 하는 코드에 `import`하기
```go
import {
  "github/user/package"
}
```

### 4. `import`한 모듈을 원하는 코드 영역에서 사용하기
```go
func main() {
  // Your code here
}
```

### 5. go mod tidy 명령으로 `go.mod` 파일과 `go.sum` 파일을 저장하기.
```shell
go mod tidy
```

## 유용하고 강력한 기본 모듈
- os/exec 모듈을 임포트 한 뒤 `exec.Command(name string, arg ...string) \*cmd` [명령어](https://pkg.go.dev/os/exec#Command)로 각 운영체제에 맞는 command line command를 사용 할 수 있어요.
```go
// (...)
func main () {
  cmd := exec.Command("tr", "a-z", "A-Z")     // 소문자를 대문자로 바꾸기
}
// (...)
```

