import i18nJson from '../i18n.json';

const i18n = i18nJson.data;

const transform = () => {
  const trans = ['transform', 'webkitTransform', 'msTransform', 'mozTransform', 'oTransform'];
  const body = document.body;
  return trans.filter((e) => body.style[e] !== undefined)[0];
}

const getParam = (param) => {
  const r = new RegExp(`\\?(?:.+&)?${param}=(.*?)(?:&.*)?$`);
  const m = window.location.toString().match(r);
  return m ? decodeURI(m[1]) : '';
}

const lan = (() => {
  let l = getParam('lan').toLocaleLowerCase();
  l = i18nJson.lan.indexOf(l) === -1 ? i18nJson.default : l;
  return l;
})()

document.title = i18n.title[lan];

export {
  transform,
  getParam,
  lan,
  i18n,
}
