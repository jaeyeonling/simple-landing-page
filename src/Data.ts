interface Data {
  fullMarkdown: string
  fullStyle: string[]
}

const fullMarkdown: string = `
# 이력서

## 김재연

- +82 10-3336-1331

- <jaeyeonling@gmail.com>
 
- [Github](https://github.com/jaeyeonling)

## 목표

// TODO: 

---

## 학습

### 2019.11 ~ 2019.12 NEXTSTEP(우아한테크러닝) - DDD(Domain-Driven Design) 세레나데 1기

* 교육 특징
1. 레거시(Legacy)를 리팩터링
> 데이터 중심의 레거시 프로젝트에 DDD를 도입하여 설계부터 코드 구현까지 점진적으로 리팩터링을 한다.

2. GitHub 기반의 코드 리뷰 경험
> 코드의 한 줄 한 줄에 대해 전문가가 자세한 리뷰를 제공해 준다.

3. 트랜디한 개발 스킬
> 많은 회사에서 우대하는 DDD에 대한 지식과 이벤트 스토밍부터 이벤트 소싱, CQRS까지 다양한 개발 스킬을 익힌다.

### 2019.08 ~ 2019.09 NEXTSTEP - JWP - 라이브러리 & 프레임워크 구현 1기

* 교육 특징
1. HTTP 이해
> 웹 애플리케이션 개발자가 반드시 학습해야 할 주제 중의 하나가 HTTP에 대한 이해이다. 
> HTTP 프로토콜 스펙을 책으로 학습하는 것은 재미없고 지루한 작업이다. 
> 웹 서버를 직접 구현함으로써 HTTP에 대한 이해도 높이고, 웹 서버의 동작 원리를 파악할 수 있다.

2. 프레임워크 동작원리 이해
> 대부분의 개발자는 프레임워크 사용법을 익히는데 많은 시간을 투자한다. 
> 프레임워크를 직접 구현함으로써 프레임워크의 내부 동작 원리에 대한 이해도와 문제 해결 역량을 높이고, 프레임워크를 확장하는 역량을 쌓을 수 있다.

3. 나만의 라이브러리 만들기
> 애플리케이션을 개발하다 보면 수많은 중복 코드를 만나게 된다. 
> 중복 코드를 제거해 나만의 라이브러리를 만듦으로써 구현 생산성을 높일 수 있다. 
> 라이브러리를 만드는 경험은 프로덕션 코드뿐만 아니라 테스트 코드의 중복을 제거하는데도 반드시 필요한 역량이다.

### 2019.06 ~ 2019.07 NEXTSTEP - TDD, Refactoring, Clean Code 5기

* 교육 특징
1. 유지보수하기 좋은 코드 작성
> 프로그래머 작업 중 가장 많은 시간을 투자하는 일이 유지보수이다. 
> 유지보수하기 좋은 코드를 구현하는 것은 서비스의 성패를 좌우하는 중요한 요소이다. 
> 유지보수하기 좋은 코드를 구현하는 핵심은 클린 코드 구현에 있다.

2. 변화에 대응하는 핵심 능력
> 운영 중 필연적으로 발생하기 마련인 기능 추가, 버그 수정, 레거시 코드 리뷰 및 수정 작업과 같은 변화 자체에 확장성있게 대응하려면 클린 코드에 대한 이해와 작성 능력이 필수. 
> 변화를 피할 수 없으면 제대로 대응하자.
 
3. 프로젝트 협업 능력 향상
> 읽기 좋은 클린 코드를 작성함으로서 오는 장점은 개인에게만 있지 않다. 
> 특히 1인 개발이 아닌, 여러 개발자가 함께 참여하는 프로젝트일수록 확장성 있는 코드 작성 능력을 가진 개발자의 기여도는 높을 수 밖에 없다.

### 2016.07 ~ 2016.12 : 한국소프트웨어기술진흥협회 - 전자정부 Java Framework 개발자 과정 127기 

---

## 회사 경력 

### 2017.10 ~ 2019.04 / 2019.09 ~ : 수퍼브 (재직 중)
> 음악 게임과 캐주얼 게임, IP 게임을 개발하는 개발사이자 글로벌 퍼블리셔

#### 수퍼브에서의 역할: DevOps 개발자
- 기획자와 클라이언트팀과 커뮤니케이션하며 애플리케이션 레벨부터 인프라 레벨까지 구축 설계
- 언어와 환경에 종속되지 않고, 요구에 맞춰 유연한 설계와 선택
- AWS의 서비스를 이용하여 모니터링부터 운영까지 담당

#### 프로젝트: 유미의 세포들

##### 음악 게임 매출 1위인 게임 API 개발 (2018.02 ~ 2019.04)

###### 프로젝트 소개
- 네이버 웹툰 “유미의 세포들“ IP 기반의 캐주얼 리듬게임

###### 개발 환경
- Java12, Grizzly 2.x, Hibernate 5.3, Gradle 5.1, Aurora MySQL 2.x (MySQL 5.7), ElasticCache (Redis 4.x), AWS KDS(Kinesis Data Streams)

###### 프로젝트 내용
- API는 NIO 프레임워크인 Grizzly를 이용하여 만든 자체 프레임워크 베이스
- Hibernate JPQL를 이용한 ORM
    - Spring을 사용하지 않아 EntityManager를 직접 사용
- JWT Token과 조회가 많은 정보는 Redis에 캐싱
- Facebook, Naver 로그인
    - OAuth API 이용
- 유저 히스토리 로깅은 DB가 아닌 Kinesis Stream으로 수집 후 AWS Athena로 조회
    - Server  -> Kinesis Data Firehose -> Lambda -> Glue Data Catalog -> S3 -> Athena
- 게임 컨텐츠 개발
    - 세포 관리, 가챠, 육성, 합성
        - 세포는 게임의 모든 컨텐츠들과 연관되어 있음
    - 일일미션, 도전미션
    - 스토리 모드 / 랭킹 모드
        - 메인 컨텐츠로 음악 플레이에 해당
        - 부정 플레이 방지를 위해 플레이 시간, 점수 등의 검증 로직이 있음
    - 소모임
        - 길드와 비슷한 개념으로 채팅 기능이 있으며 Sendbird API 이용
    - 쇼핑 / 드레스룸
        - 옷 입히기 게임과 같은 요소
        - 의상에 따른 버프 적용과 미션 클리어 여부가 달라지기 때문에 로직에 영향을 줌
    - 많은 트래픽에 안전한 서비스를 만드는 것이 주요 포인트
        - 버그를 100% 방지할 수 없기 때문에 빠르게 감지하기 위해 모니터링 셋팅
        - AWS Cloud Watch에 커스텀 지표를 추가하여 다양한 알람 등록
        - 갑작스러운 사용자 증가 시 대처로 Auto Scaling 설정
    - *수퍼브에 입사하여 처음으로 출시한 프로젝트*
        - 게임을 출시하는 기쁨부터 초기에 발생하는 버그를 잡는 힘든 과정까지 겪음

##### Serverless Architecture 기반의 사전예약 페이지 API 개발 (2018.08 ~ 2018.09)

###### 프로젝트 소개
- 네이버 웹툰 “유미의 세포들“ IP 기반의 캐주얼 리듬게임 사전예약 페이지

###### 개발 환경
- Node.js 10.x, TypeScript, Serverless Framework, API Gateway, Lambda, Aurora MySQL 2.x (MySQL 5.7)

###### 프로젝트 내용
- 서버 비용을 최소화하고 관리 포인트를 줄이기 위해 Serverless Architecture를 구축
- *추후 다른 이벤트에서도 최소한의 수정으로 사용할 수 있게 구조를 설계*
    - Config 정보를 기준으로 Validation하고 DB에 Insert하게 개발

#### 프로젝트: Pianista

##### 글로벌 100만 다운로드 게임 API 컨텐츠 개발 및 유지보수 (2017.10 ~ 2019.04)

###### 프로젝트 소개
- 클래식 피아노 곡을 연주하는 건반형 리듬게임

###### 개발 환경
- Java12, Grizzly 2.x, Hibernate 5.3, Ant, Aurora MySQL 2.x (MySQL 5.7), ElasticCache (Redis 4.x), AWS KDS(Kinesis Data Streams)

###### 프로젝트 내용
- API는 NIO 프레임워크인 Grizzly를 이용하여 만든 자체 프레임워크 베이스
- Hibernate JPQL를 이용한 ORM
    - Spring을 사용하지 않아 EntityManager를 직접 사용
- JWT Token과 조회가 많은 정보는 Redis에 캐싱
- Facebook 로그인
    - OAuth API 이용
- 유저 히스토리 로깅은 DB가 아닌 Kinesis Stream으로 수집 후 AWS Athena로 조회
    - Server  -> Kinesis Data Firehose -> Lambda -> Glue Data Catalog -> S3 -> Athena
- 게임 컨텐츠 개발
    - 멤버십 추가
        - 멤버십 구독 시 게임 내 모든 곡 플레이 가능
    - 리그모드 추가
        - 리그 조 생성 후 10명 조원 편성 
        - 리그모드로 게임한 점수 기준으로 랭킹을 매김
        - 24시간 기준 점수로 1 ~ 3등까지 승급, 7 ~ 10등까지 강등

##### 서버 1대 당 2,000 TPS 성능을 내는 게임 API 서버 개발 (2019.02 ~ 2019.04)

###### 프로젝트 소개
- 클래식 피아노 곡을 연주하는 건반형 리듬게임의 중국 버전

###### 개발 환경
- Golang 1.12, Gorm (ORM Framework), GraphQL, MySQL 8.0

###### 프로젝트 내용
- On-Premise 환경에서 1개의 인스턴스로 2,000TPS 이상의 퍼포먼스 보장
- *퍼포먼스 향상을 위해 Golang과 GraphQL 도입을 어필하여 처음 도입*
    - Thread보다 가벼운 Goroutine을 이용하여 퍼포먼스 향상
    - Over-fetching, Under-fetching 방지
    
#### 프로젝트: GM Tool

##### 추가개발 없이 게임 관리를 할 수 있는 툴 API 개발 (2017.12 ~ 2018.02)

###### 프로젝트 소개
- 일반적으로 게임을 개발하면 해당 게임 툴도 같이 만들게 되는데 반복되는 작업을 설정으로 처리하여 추가 개발 없이 새로운 게임을 추가 가능
- 게임 운영자(GM)가 게임을 관리할 수 있도록 도와주는 게임 관리 툴 (게임 이벤트, 게임 설정 관리, 유저 관리, 데이터 관리, 데이터 조회, 로그 조회 등)

###### 개발 환경
- Java12, SpringBoot 2.0, Hibernate 5.3, Gradle 5.1, WebSocket, Aurora MySQL 2.x (MySQL 5.7), ElasticCache (Redis 4.x), Athena, SecretManager

###### 프로젝트 내용
- 2FA (2 Factor Auth)를 이용한 로그인
- 여러 프로젝트, 여러 업체, 여러 팀, 분할된 권한을 구현하기 위해 ACL(Access Control List) 도입
- 게임 추가 시 필요한 IAM, EC2 등 AWS 서비스를 AWS API를 이용하여 자동으로 생성
- Excel로 게임 설정 정보를 올리면 검증 후 변환하여 Config 형태로 업로드
    - 웹소켓을 이용하여 실시간 진행상황 모니터링 
- 가상의 테이블을 만들어 여러 DB와 Athena의 정보들을 묶어서 보여줄 수 있음

##### 서버 1대 당 2,000 TPS 성능을 내는 게임 API 서버 개발 (2019.02 ~ 2019.04)

###### 프로젝트 소개
- 클래식 피아노 곡을 연주하는 건반형 리듬게임의 중국 버전

###### 개발 환경
- Golang 1.12, Gorm (ORM Framework), GraphQL, MySQL 8.0

###### 프로젝트 내용
- On-Premise 환경에서 1개의 인스턴스로 2,000TPS 이상의 퍼포먼스 보장
- *퍼포먼스 향상을 위해 Golang과 GraphQL 도입을 어필하여 처음 도입*
    - Thread보다 가벼운 Goroutine을 이용하여 퍼포먼스 향상
    - Over-fetching, Under-fetching 방지

---

### 2016.12 ~ 2017.09 : 슈어엠 (10개월)
> 메시징 서비스와 카카오 비즈메시지(알림톡, 친구톡) 서비스

#### 수퍼브에서의 역할: 메시지 발송 에이전트 / 메시징 서버 개발자
- TCP / HTTP 환경 뿐 아니라 국제 메시징 프로토콜인 SMPP 등 여러 통신 환경 속에서 네트워크 프로그래밍 담당

##### TCP를 이용한 SGI 서울보증 메시지 발송 시스템 개발 (2017.06 ~ 2017.07)

###### 프로젝트 소개
- 메시지를 발송하는 자바 라이브러리, 자바 라이브러리 요청을 받는 서버 구현
- 클라이언트 기준 1,000 TPS를 목표

###### 개발 환경
- Java8, Node.js, TCP

###### 프로젝트 내용
- 1,000 TPS의 퍼포먼스를 달성하기 위해 TCP를 선택
    - 빠른 개발을 위해 *LineDelimitedJSON*이라는 개념을 도입
- 요구사항에 따라 발송 라이브러리는 자바로 개발
    - Net 패키지를 이용한 TCP 통신
    - javadoc을 이용한 API 문서 작성
    - Thread Pool과 Queue를 이용한 동시처리 향상
- TCP 서버는 언어 디자인 자체에서 Event Driven를 지원하는 Node.js로 개발
    - 모든 클라이언트 요청에 쓰레드를 생성한다면 퍼포먼스 문제가 생길 수 있다고 판단
        - 몇 개의 클라이언트가 연결될지 예측할 수 없었음
        - 천개일 수도 있고 만개일 수도 있는 상황
- *시스템 구조: TCP Client(User) -> TCP Server -> DB <-> Agent -> SureM API*

##### SK CNC 기프티콘 발송 시스템 개발 (2017.04)

###### 프로젝트 소개
- 기존 메시지 발송 에이전트를 이용한 기프티콘을 발송 시스템
- 기프티콘의 경우 SK 플래닛의 API를 사용
- 기프티콘 정보로 QR코드 생성 후 상품 이미지와 합성하여 메시지로 발송

###### 개발 환경
- Java1.5, Node.js 0.10, MyBatis, Gradle, OracleDB, SQL Server

###### 프로젝트 내용
- 기프티콘 발송 에이전트 개발
    - 기존 사내 에이전트에 기프티콘 발송 기능만 추가하여 커스터마이징
    - 일정한 주기로 Table Polling하여 API Call
- 기프티콘 전용 API 서버 개발
    - 메시지 당 금액이 크기 때문에 예외처리에 대한 중요도가 높음
    - 서비스 장애 시 복구할 수 있도록 모든 단계에 대한 상태를 DB에 남김
    - DB 장애 시 File로 저장
    - 서비스 정상화 시 수동으로 업데이트
- *시스템 구조: User -> DB <-> Agent -> API -> DB <-> Agent -> Vendor*

##### AWS 서비스를 이용한 Serverless 기반의 직방 메시지 시스템 개발 (2017.02 ~ 2017.03)

###### 프로젝트 소개
- AWS 서비스를 이용한 Serverless 기반의 메시징 시스템 구축

###### 개발 환경
- Java1.5, Spring 4.3.x, SpringBoot, MyBatis, Maven, jQuery
- Node.js 4.x, API Gateway, Lambda, SQS, Mocha, SQL Server

###### 프로젝트 내용
- 장애를 최소화하기 위해 클라우드 도입
- AWS에서 API Gateway, Lambda, SQS 등의 환경을 셋팅
- SQS에서 메시지를 가져오는 Consumer 개발
    - Consumer가 여러개로 늘어날 경우 API Call 횟수가 증가하는 문제 발생
    - Reverse proxy에서 요청을 제어하여 불필요한 API Call 횟수 해결
- API 테스트를 스케줄 등록 후 문제 발생 시 문자메시지 알림 시스템 개발
- 메시지 취소, 예약, 이미지 등록, 통계 등을 하는 유틸 API를 개발
- 메시지 관련된 정보 및 통계를 볼 수 있는 관리자 페이지를 개발
- 시스템 구조: User -> API Gateway -> Lambda (Producer) -> SQS <-> Consumer -> DB <-> Agent -> Vendor

---

## 이외 활동

### 2019.10 ~ 2019.11 NEXTSTEP - TDD, Refactoring, Clean Code 6기 리뷰어

### 2019.09 ~ 2020.02 디프만(디자이너와 프로그래머가 만났을 때) 7기 
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

  `
  ,
  `
  /**
   * 텍스트 에디터
   *
   * Markdown 형식
   * 간단한 오픈 소스 도구를 사용하여 HTML로 변환
   * /
   
  p, li {
    font-size: 0.8em;
  }

  @font-face {
    font-family: octicons-link;
  }
`]

export default {
  fullMarkdown,
  fullStyle,
} as Data
