function showImage(img) {
    const enlargedDiv = document.getElementById('enlargedImage');
    enlargedDiv.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
  }
  