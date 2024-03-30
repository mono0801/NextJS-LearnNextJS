// (home)처럼 ()로 묶은 폴더를 route group이라 하며 실제 url에는 적용되지 않는다
// react의 힘이 필요한 interactive html일 경우 ssr이 아닌 csr이여야 한다
"use client";
import { useState } from "react";
// Next.JS의 layout.tsx에서 app/page.tsx파일을 탐색하여 index로 불러온다
// 따라서 index로 사용할 파일의 이름은 무조건 page여야한다
// 함수명은 상관이 없다

export default function Tomato() {
    const [count, setcount] = useState(0);
    return (
        <div>
            <h1>Hello!</h1>
            <button
                onClick={() => {
                    setcount((c) => c + 1);
                }}
            >
                {count}
            </button>
        </div>
    );
}
