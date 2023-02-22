# 개요
react-query를 스터디해보기 위한 레포입니다.

# 목표
- react-query의 기본적인 사용법을 익히기
- 서버사이드 데이터와 클라이언트사이드 데이터의 차이점을 이해하기
- pagination을 구현해보기
- infinite scroll을 구현해보기

# 설치방법
## 백엔드
백엔드는 sqlite를 사용하고 있으며 실행시 자동으로 데이터베이스가 생성됩니다.
```bash
cd backend
npm i

# 실행하기
npm run dev

# 자동으로 유저 데이터 생성하기
# API를 사용하기 때문에 반드시 서버가 켜져있어야 합니다.
node scripts/generateRandomUsers.js
```

## 프론트엔드
```bash
cd frontend
npm i

# 실행하기
npm start
```


