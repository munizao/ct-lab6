module.exports = (responseObj) => {
  return 'HTTP/1.1 ' + responseObj.status + 
    '\n\n' + responseObj.body;
};
