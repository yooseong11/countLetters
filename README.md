# countLetters

## “글자수 세기” 네이버 웨일 브라우저 사이드 앱

> #웨일브라우저확장프로그램 #manifest.json #사이드바 
> 

**2022.01, 2주일, 팀원: 2명 (프론트엔드 개발자 - 2명)**

![image](https://user-images.githubusercontent.com/82145837/160324504-d1a7c4c2-fb82-42a6-ba1c-4360fd8fa84e.png)

[웨일 스토어 글자수 세기 다운로드 경로](https://store.whale.naver.com/detail/lfhbnhpghablgmclfncpalmemlecalpg)


### ✨ 제작 회고록   
[네이버 웨일 스토어 사이드바 확장프로그램 제작 후기](https://www.notion.so/f971011b0aaf46b2931ffea5ad689d5a)

### 🔥 역할
- 기획: 확장프로그램 기획

- 디자인: Figma로 웨일 스토어 썸네일 이미지 디자인

- 개발: [입력창 텍스트 전체 복사하기](https://github.com/meteor-or/countLetters/blob/leeyuseong/md/%ED%85%8D%EC%8A%A4%ED%8A%B8%EB%B3%B5%EC%82%AC%ED%95%98%EA%B8%B0%EA%B8%B0%EB%8A%A5.md), 지우기

- 개발: [확장프로그램 전용 manifest.json](https://github.com/meteor-or/countLetters/blob/leeyuseong/md/manifest.md) 설정

- 개발: 웨일 스토어 배포

### 🎈 기획
웨일 브라우저 사용중 서점 사이트에 리뷰를 등록해야하는 일이 생겼다. 매번 사이트 찾아 들어가긴 귀찮아서 크롬 확장 프로그램을 등록했다. 근데 그것도 디자인이 별로라서 몇 번 쓰다 말았다.

웨일 스토어에 적당한 프로그램이 있나 검색해봤는데 딱 글자수세는 간단한 프로그램이 없더라. 그래서 프론트엔드하는 친구랑 같이 둘이서 제작해보기로 했다.


### 🎨 디자인
[기존에 존재하던 글자수세기 사이트 래퍼런스부터 찾아봤다.](https://github.com/meteor-or/countLetters/blob/leeyuseong/md/%EB%9E%98%ED%8D%BC%EB%9F%B0%EC%8A%A4.md) 이후 각자 디자인을 가져와서 비교해봤다. 우리는 사이드바로 제작할 예정이라 웹보다는 모바일 디자인에 더 가깝게 진행했다. [디자인 설정](https://github.com/meteor-or/countLetters/blob/leeyuseong/md/%EB%94%94%EC%9E%90%EC%9D%B8.md)하고 개발을 시작했다.

이후 웨일 스토어 썸네일도 디자인했다.


### 👀 프로젝트로 배운점
1. 확장프로그램 전용 manifest.json에 대한 이해
2. 확장프로그램 디버깅 배포 방법
3. Web API 중 하나인 Clipboard API 이해
4. 협업 과정에서 git, github 사용법.

     branch 관리 전략에 대해 처음 알게 되어 main과 develop으로 브랜치를 나눠 작업했다. 애매하던 git과 github의 관계 commit, push, branch 개념에 대해 완전하게 이해했다. 