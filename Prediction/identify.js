document.querySelector('button').onclick = function sendIdentification() {
  try {
    const files = [...document.querySelector('input[type=file]').files];
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = (event) => {
          const res = event.target.result;
          console.log(res);
          resolve(res);
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(promises)
      .then((base64files) => {
        console.log(base64files);

        const data = {
          api_key: "GInblqKcjdUzSFFOd5F1B7svQQmjx8m0XCaiuIkq95JE31pz4l",
          images: base64files,
          modifiers: ["crops_fast", "similar_images"],
          plant_language: "en",
          plant_details: [
            "common_names",
            "url",
            "name_authority",
            "wiki_description",
            "taxonomy",
            "synonyms",
          ],
        };

        fetch("https://api.plant.id/v2/identify", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((response) => response.json())
          .then((data) => {
            result.innerHTML = `
            <div class="tt">
              <h1>Result</h1>
              <img src="${data.images[0].url}">
            </div>
            <div class="rs">
              <h2>Similar plants are shown here</h2>
              <div class="similar mb-3 d-flex">
                <div class="card w-50 mx-4 border border-success shadow rounded">
                  <div class="card-body">
                    <p class="card-title"> plant name : ${data.suggestions[0].plant_name} </p>
                    <p class="card-text"> Scientific name : ${data.suggestions[0].plant_details.scientific_name} </p>
                    <p class="card-text">Description :  ${data.suggestions[0].plant_details.wiki_description.value} </p>
                    <a href="${data.suggestions[0].plant_details.url}" class="btn btn-secondary">Know More</a>
                  </div>
                </div>
                <div class="card w-50 mx-4 border border-success shadow rounded">
                  <div class="card-body">
                    <p class="card-title"> plant name : ${data.suggestions[1].plant_name} </p>
                    <p class="card-text"> Scientific name : ${data.suggestions[1].plant_details.scientific_name} </p>
                    <p class="card-text">Description :  ${data.suggestions[1].plant_details.wiki_description.value} </p>
                    <a href="${data.suggestions[1].plant_details.url}" class="btn btn-secondary">Know More</a>
                  </div>
                </div>
              </div>
            </div>`;
          })
          .catch((error) => {
            console.error("Error:", error);
          });
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  } catch (error) {
    console.error("Error:", error);
  }
};
