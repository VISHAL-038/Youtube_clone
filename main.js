//company
//<base URL/functionality? &propert1 = value1 $ propert2=vlaue2>
//www.company.com/<functionaltiy name>
//google.com/search
//amazon.com/cart or amazon.com/pay

// baseUrl/functionality?p1=v1&p2=v2&p3=v3
// https://www.googleapis.com/youtube/v3/search?key=AIzaSyB3LkS1ru9KjWKLNC7RyrXZeHreSY3hs6M&part=snippet&q=Hello

document.getElementById("search-btn").addEventListener("click", () => {
  const text = document.getElementById("search-text").value;
  const url = `https://www.googleapis.com/youtube/v3/search?key=AIzaSyC_2CwII3K3NSMxEUzr-XizxknlEvr0N5s&part=snippet&q=${text}&maxResults=50`;
  const xhr = new XMLHttpRequest();
  xhr.open("GET", url);
  xhr.onreadystatechange = () => {
    if (xhr.readyState == 4 && xhr.status == 200) {
      const response = JSON.parse(xhr.responseText);
      let output = "";
      for (let i = 0; i < response.items.length; i++) {
        console.log(response);
        output += `
                <div style="width: 23%; margin: 10px; background-color: #f9f9f9; border-radius: 10px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);">
                <a href="https://www.youtube.com/watch?v=${response.items[i].id.videoId}" target="_blank" style="text-decoration: none;">
                    <img style="width:100%; border-top-left-radius: 10px; border-top-right-radius: 10px;" src="${response.items[i].snippet.thumbnails.high.url}" />
                    <h4 style="margin: 10px 0; font-size: 18px;">${response.items[i].snippet.title}</h4>
                    <p style="margin: 0 10px 10px; font-size: 14px;">${response.items[i].snippet.description}</p>
                </a>
            </div>
                `;
      }
      document.getElementById("my-div").innerHTML = output;
    }
  };
  xhr.send();
});
