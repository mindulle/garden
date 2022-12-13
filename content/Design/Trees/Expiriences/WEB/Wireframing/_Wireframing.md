---
# configs for document itself.
title: "_Wireframing"
lastModified: "2022-12-11"

# field for querying only entry point notes.
isEntryPoint: true

# add some tags for specifying particular subjects.
tags:
  - "entrypoint"
  - "wireframing"
---
```toc
style: bullet
```

# Layout grid
# BreakPoints
## Mobile
- 가로 360이 최소 사이즈임(2022-10 기준)
## Tablet
- 태블릿의 대다수는 768이지만
- 구형 태블릿의 경우 600도 있긴있음
- 신형 앱이면 768
- 구형 앱이면 600

## Desktop
- 컨텐츠 영역은 1280
- 대다수의 스크린 영역은 1920
- 마진값은 640/2 = 320
- 거터값은 시각적으로 맞추되 대충 4픽셀 그리드로.

## Mobile

### Columns
- 4 columns : 작은 디바이스 용(legacy)
- 6 columns : 최근 대부분 디바이스. 가로 375 이상

### Margin
| value (@1x) | apps                                       |
| ----------- | ------------------------------------------ |
| 10, 12      | Facebook, vevo, daum                       |
| 15, 16      | naver, instagram, youtube, pintereset, ... |
| 20          | appstore, brunch, naver blog, ...          |
| 25, 26      | airbnb, kakaobank, ...                                           |
![[Design/Trees/Expiriences/WEB/Wireframing/_assets/Pasted image 20221022183726.png]]
### Gutter
- 8px grid

## Tablet
## Desktop