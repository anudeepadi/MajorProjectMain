const result = document.querySelector('.result')

document.querySelector('button').onclick = function sendIdentification() {
    const files = [...document.querySelector('input[type=file]').files];
    const promises = files.map((file) => {
      return new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onload = (event) => {
            const res = event.target.result;
            console.log(res);
            resolve(res);
          }
          reader.readAsDataURL(file)
      })
    })
    
    Promise.all(promises).then((base64files) => {
      console.log(base64files)
            
      const data = {
        api_key: "qLcBPiOi748wHusOoqP4U7Mdv3Px5JgbqsNTZiRiAmVBcZMjPC",
        images: base64files,
        modifiers: ["crops_fast", "similar_images"],
        plant_language: "en",
        plant_details: ["common_names",
                        "url",
                        "name_authority",
                        "wiki_description",
                        "taxonomy",
                        "synonyms"],
      };
      
      fetch('https://api.plant.id/v2/identify', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
        result.innerHTML= `
        <img src=${data.images[0].url}>
        <p>Result</p>
        <div>
         <p> plant name : ${data.suggestions[0].plant_name} </p>
         <p> plant details : ${data.suggestions[0].plant_details} </p>
         <p> Probability : ${data.suggestions[0].probability} </p>
        </div>

        `
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    })
  
};
