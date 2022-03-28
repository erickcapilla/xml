let mainBlog = document.getElementById('main');

document.getElementById("ver").addEventListener('click',
CargarDatos);

function CargarDatos() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "blog.xml", true);
  xhr.onreadystatechange = () => {
    if(xhr.readyState === xhr.DONE && xhr.status === 200) {
      cargar(xhr);
    }
  }
  xhr.send();

  mainBlog.classList.remove('main-btn');
  mainBlog.classList.add('main-normal');
}

let cargar = (xml) => {
  console.log(xml.responseXML);
  let docX = xml.response;
  mainBlog.innerHTML = docX;
} 