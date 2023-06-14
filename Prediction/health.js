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
        language: "en",
      
        disease_details: ["cause",
                        "common_names",
                        "classification",
                        "description",
                        "treatment",
                        "url"],
      };
      
      fetch('https://api.plant.id/v2/health_assessment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      .then(response => response.json())
      .then(data => {
        result.innerHTML= `
        <div class="tt">
        <h1>Result</h1>
        <img src="${data.images[0].url}">
        </div>
        <div class="rs">
      
        <div class="similar m-3 d-flex">
        <div class="card  border border-success shadow rounded">
        <div class="card-body">
         <p class="card-title"> Disease name : ${data.health_assessment.diseases[0].name} </p>
         <p class="card-text">Description : ${data.health_assessment.diseases[0].disease_details.description} </p>
         <a href=" ${data.health_assessment.diseases[0].disease_details.url}" class="btn btn-secondary">Know More</a>
        </div>
        </div>
       </div>
       `
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    })
  
};
