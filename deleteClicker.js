const removeCursor = () => {
    var element = document.getElementById('clickshare-cursor');
    if (element) {
      element.parentElement.removeChild(element);
    }
}
  
setInterval(removeCursor, 1500);