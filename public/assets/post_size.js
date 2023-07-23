function isLink(str) {
  const dictionary = [
    '.ru',
    '.su',
    '.рф',
    '.com',
    '.net',
    '.name ',
    '.com.ru',
    '.net.ru',
    '.org',
    '.ru',
    '.com',
    '.cyou',
    '.net',
    '.biz',
    '.info',
    '.name',
    '.site',
  ];

  for (const i of dictionary) {
    if (str.endsWith(i)) {
      str = '';
    }
  }

  return str;
}

export default function postSize(post) {
  const arr = post.split(' ');
  const arrNoLinks = [];

  arr.forEach(function (item) {
    arrNoLinks.push(isLink(item));
  });
  post = arrNoLinks.join(' ');

  return post.length;
}
