# NomadCoder - Next JS Tutorial

## Learn Next JS

### Next JS init

npm init -y\
package.json에서 "license" : "ISC" -> "MIT"로 변경\
npm install react@latest next@latest react-dom@latest\
npm i -D @types/react@18.2.8 : Suspense Async Server Component TypeScript Error 오류 해결하기 위해 typescript 5.1.3 버전 이상, @types/react 18.2.8 버전 이상 설치 필요\
package.json에서 "scripts" : {"test": "echo \"Error: no test specified\" && exit 1"} ->
{"dev": "next dev"}로 변경\
app 폴더 생성 후 app 폴더 안에 page.tsx 파일 생성\
page.tsx안에 : export default function Tomato() { return h1 Hello Next! /h1;} 입력\
npm run dev 입력\
typescript에 필요한 파일 자동 설치 및 layout.tsx 생성 확인\
