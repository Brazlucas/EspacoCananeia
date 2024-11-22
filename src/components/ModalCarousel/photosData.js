
export default function itemData() {
  const item = [
    { original: 'images/capela/espacoft (15).jpg', thumbnail: 'images/capela/espacoft (15).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (17).jpg', thumbnail: 'images/capela/espacoft (17).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (2).jpg', thumbnail: 'images/capela/espacoft (2).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (4).jpg', thumbnail: 'images/capela/espacoft (4).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (5).jpg', thumbnail: 'images/capela/espacoft (5).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (6).jpg', thumbnail: 'images/capela/espacoft (6).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (7).jpg', thumbnail: 'images/capela/espacoft (7).jpg', thumbnailHeight: '100px' },
    { original: "images/capela/espacoft (8).jpg", thumbnail: 'images/capela/espacoft (8).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (9).jpg', thumbnail: 'images/capela/espacoft (9).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (10).jpg', thumbnail: 'images/capela/espacoft (10).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (11).jpg', thumbnail: 'images/capela/espacoft (11).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (12).jpg', thumbnail: 'images/capela/espacoft (12).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (13).jpg', thumbnail: 'images/capela/espacoft (13).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (22).jpg', thumbnail: 'images/capela/espacoft (22).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (23).jpg', thumbnail: 'images/capela/espacoft (23).jpg', thumbnailHeight: '100px' },
    { original: 'images/capela/espacoft (24).jpg', thumbnail: 'images/capela/espacoft (24).jpg', thumbnailHeight: '100px' },
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