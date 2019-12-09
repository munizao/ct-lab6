module.exports = rawRequest => {
  console.log(rawRequest);
  // const emptyLinePos = rawRequest.search('/(\r\n){2}/gm');
  // console.log(emptyLinePos);
  const [header, body] = rawRequest.split('\r\n\r\n');
  console.log(header);
  const headerLines = header.split('\n');
  const firstLine = headerLines[0].split(' ');
  console.log(firstLine);
  const requestObj = {
    method: firstLine[0],
    path: firstLine[1],
    httpVersion: firstLine[2],
  };
  if(body) {
    requestObj.body = body;
  }
  for(let i = 1; i < headerLines.length; i++) {
    const splitLine = headerLines[i].split(': ');
    requestObj[splitLine[0]] = splitLine[1];
  }
  return requestObj;
};
