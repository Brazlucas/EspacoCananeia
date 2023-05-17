
export default function itemData() {
  const item = [
    { original: 'images/capela/espaçoft (15).jpg', thumbnail: 'images/capela/espaçoft (15).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (17).jpg', thumbnail: 'images/capela/espaçoft (17).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (2).jpg', thumbnail: 'images/capela/espaçoft (2).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (4).jpg', thumbnail: 'images/capela/espaçoft (4).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (5).jpg', thumbnail: 'images/capela/espaçoft (5).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (6).jpg', thumbnail: 'images/capela/espaçoft (6).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (7).jpg', thumbnail: 'images/capela/espaçoft (7).jpg', thumbnailHeight: '100px' },
    { original: "images/capela/espaçoft (8).jpg", thumbnail: 'images/capela/espaçoft (8).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (9).jpg', thumbnail: 'images/capela/espaçoft (9).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (10).jpg', thumbnail: 'images/capela/espaçoft (10).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (11).jpg', thumbnail: 'images/capela/espaçoft (11).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (12).jpg', thumbnail: 'images/capela/espaçoft (12).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (13).jpg', thumbnail: 'images/capela/espaçoft (13).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (22).jpg', thumbnail: 'images/capela/espaçoft (22).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (23).jpg', thumbnail: 'images/capela/espaçoft (23).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espaçoft (24).jpg', thumbnail: 'images/capela/espaçoft (24).jpg', thumbnailHeight: '100px' },
  ];

  const itemMobileHeight = item.map((item) => ({
    ...item,
    originalHeight: '200px',
  }));

  const itemDesktopHeight = item.map((item) => ({
    ...item,
    originalHeight: '850px',
  }));

  return { itemMobileHeight, itemDesktopHeight };
}