# manifes.json

> 매니페스트는 확장앱의 이름, 설명, 버전 및 개발자 정보 등의 메타 데이터, 확장앱이 동작하기 위해 필요한 각종 설정과 브라우저 API 사용을 위한 권한 정보를 포함하는 [JSON](https://ko.wikipedia.org/wiki/JSON) 형식의 파일입니다.
> 

### 기본 구조

웨일에서만 사용되는 것이 아니라 모든 확장 프로그램에서 필수적으로 필요한 파일이다. 웨일은 사이드앱이라는 보통 브라우저에 없는 독자적인 형태의 앱이 있어서, 그 부분은 따로 설정해줘야한다.

```jsx
{
    // 필수
    "manifest_version": 2 // 고정
    "name": "안녕 웨일",
    "version": "1.0.0",

    // 추천
    "description": "확장앱 설명",
    "icons": {...},
    "default_locale": "ko",

    // 선택: 이 중 하나만 설정할 수 있음
    "browser_action": {...},
    "page_action": {...},
    "sidebar_action": {...}, // 사이드바앱

    // 그 외: 필요한 것을 추가
    "background": {
        "scripts": [...],
        "page": "..."
    },
    "content_scripts": [...],
    "permissions": [...],
    ...
}
```

위는 웨일 스토어에서 권장하는 기본 manifest 구조이다. 

```jsx
{
  ...
  "sidebar_action": {
    "default_page": "sidebar.html",  // 필수
    "default_icon": {                // 필수
        "16": "images/icon16.png"
    },

    "default_title": "사이드바앱",      // 선택
    "use_navigation_bar": true       // 선택
  }
  ...
}
```

사이드바앱 경우에는 위와 같은 설정이 추가로 필요하다.

```jsx
{
  "manifest_version": 2,
  "name": "글자수 세기",
  "version": "1.0.1",
  "description": "글자수를 세주는 사이드 앱",
  "icons": { "32": "favicon-32x32.png" },
  "default_locale": "ko",
  "sidebar_action": {
    "default_page": "./index.html",
    "default_icon": {
      "32": "favicon-32x32.png"
    },
    "default_title": "글자수 세기",
    "use_navigation_bar": false
  }
}
```

아이콘을 여러 개 넣기 귀찮아서 하나만 넣었더니 아이콘에 hover했을 때 깨지는 현상이 발생했다. 정석대로 16, 32, 64 크기의 아이콘 모두 넣는 것을 추천한다.

### default_locale

**default_locale를 설정한 경우 반드시 파일 내에 _locales 폴더가 있어야한다!!!!** 

이것때문에 계속 프로그램이 실행되지 않는 오류가 생겼었다ㅠㅠ 혹시 몰라서 폴더 안에 의미 없는 설정 파일을 넣어두긴 했는데 폴더만 있어도 괜찮은 것 같다.

default_locale는 언어 설정값이다. 확장 프로그램 언어가 다국어로 설정된 경우 해당 폴더 안에 파일을 만든다. 이후 언어 변수값을 넣어서 처리하는 것 같다.

```jsx
@extension_description
모든 웹사이트에 다크 모드를 적용합니다. 밤이나 일상적인 웹 브라우징을 할 때 어두운 테마를 사용하여 눈을 보호하십시오.

@loading_please_wait
로딩 중... 잠시만 기다려 주십시오.
```

[darkreader/src/_locales at master · darkreader/darkreader](https://github.com/darkreader/darkreader/tree/master/src/_locales)

웹서핑하면서 발견한 설정은 위와 같은 식으로 사용했다.

---

참고 사이트

[웨일 개발자 센터 | 기본 구조와 용어](https://developers.whale.naver.com/getting_started/anatomy_1/#%EB%A7%A4%EB%8B%88%ED%8E%98%EC%8A%A4%ED%8A%B8)