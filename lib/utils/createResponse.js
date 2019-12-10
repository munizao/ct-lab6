module.exports = (responseObj) => {
  return `HTTP/1.1 ${responseObj.status}
Accept-Ranges: bytes
Content-Length: ${responseObj.body.length}
Content-Type: ${responseObj.contentType}

${responseObj.body}`;
};
