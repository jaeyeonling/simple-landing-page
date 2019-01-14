interface Data {
  fullMarkdown: string
  fullStyle: string[]
}

const fullMarkdown: string = `
  ## Personal Info

  ###### Name: 김재연
  ###### Date of birth: 1993년 07월 20일

  ----
  ## About me

  ###### 구루를 꿈꾸는 새나라의 새싹 개발자 입니다.

  ----
  ## Work Experience

  #### SureM
  ###### Messaging Server, Messaging Agent, Admin Page
  
  
  #### Superb Corp.
  ###### Game Server, GM Tool, Event Page

  ----
  ## Skills
  #### Java
  ###### Spring Boot
  ###### Grizzly
  ###### ORM (MyBatis, Hibernate)


  #### Node.js
  ###### Typescript


  #### Golang

  #### Protocol (Architecture)
  ###### TCP
  ###### HTTP
  ###### SMPP
  ###### RESTFul
  ###### Graphql

  #### Database
  ###### MySQL
  ###### SQL Server
  ###### Redis

  ----
  ## Contact
  #### [Phone](tel:+821033361331)
  #### [Email](mailto:jaeyeonling@gmail.com)
  #### [Github](https://github.com/jaeyeonling)

  > https://github.com/jaeyeonling/simple-resume
  `

const fullStyle: string[] = [
  `
  /**
   * Inspired by http://strml.net/
   * 
   * Hello, Jaeyeonling!
   */

  /** 
   * 스타일 에디터
   * /

  /* 모든 요소 전환 효과 추가 */
  * {
    transition: all .3s;
  }

  /* 
   * HTML 색상 
   * 배경색은 IntelliJ 비슷하게
   */
  html {
    color: rgb(222,222,222); 
    background: rgb(43,43,43);
  }

  /* 텍스트 위치 변경 */
  .styleEditor {
    padding: .5em;
    border: 1px solid;
    margin: .5em;
    overflow: auto;
    width: 45vw; 
    height: 90vh;
  }

  /* 
   * 코드 강조 표시 
   * 이것 또한 IntelliJ 비슷하게
   */
  #style-container {
    color: #DEDEDE 
  }
  .token.comment {
    color: #857F6B; 
    font-style: italic; 
  }
  .token.selector {
    color: #D7BA7D; 
  }
  .token.keyword {
    color: #569CD6; 
  }
  .token.property {
    color: #569CD6; 
  }
  .token.function {
    color: #C366A3; 
  }
  .token.punctuation {
    color: #FFCF00;
  }

  /* 3D 효과 추가 */
  html {
    perspective: 1000px;
  }
  .styleEditor {
    position: fixed;
    left: 0;
    top: 0;
    -webkit-transition: none;
    transition: none;
    -webkit-transform: rotateY(10deg) translateZ(-100px);
    transform: rotateY(10deg) translateZ(-100px);
  }

  /* 텍스트 편집 설정 추가 */
  .resumeEditor {
    position: fixed;
    right: 0;
    top: 0;
    padding: .5em;
    margin: .5em;
    width: 48vw;
    height: 90vh;
    border: 1px solid;
    background: white;
    color: #222;
    overflow: auto;
  }

  /********** 스타일 에디터 끝 **********/


  `, `
  /**
   * 텍스트 에디터
   *
   * Markdown 형식
   * 간단한 오픈 소스 도구를 사용하여 HTML로 변환
   * /
  `
  , `
  /* HTML 스타일 추가 */
  .resumeEditor {
    padding: 1em;
    font-size: 1.4em;
  }
  .resumeEditor h2 {
    display: inline-block;
    margin: 1.0em 0 .5em;
    font-size 2.6em;
  }
  .resumeEditor h3, h4, h5 {
    margin: 1.0em 0 .2em;
  }
  .resumeEditor h6 {
    margin: .2em 0 .2em;
  }
  .resumeEditor a {
    text-decoration: none;
    font-weight: bold;
  }
  .resumeEditor ul, .resumeEditor ol {
    list-style: none;
  }
  .resumeEditor ol {
    counter-reset: section;
  }
  .resumeEditor blockquote {
    margin: 1em;
    padding: .5em;
    background: #ddd;
  }

  /********** 텍스트 에디터 끝 **********/
`]

export default {
  fullMarkdown,
  fullStyle,
} as Data
