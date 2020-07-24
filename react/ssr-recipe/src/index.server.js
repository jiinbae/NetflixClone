// 서버를 위한 엔트리 파일. (서버의 index.js 역할을 함.)

import React from 'react';
import ReactDOMServer from 'react-dom/server';

const html = ReactDOMServer.renderToString(
    <div>Hello Server Side Rendering!</div>
);

console.log(html);