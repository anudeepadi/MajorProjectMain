const form  = document.querySelector('#apiSubmit')
const result = document.querySelector('.result')

form.addEventListener('submit',async function(event) {
     event.preventDefault(); 
    const nameInput = form.elements['name'];
    const imageInput = form.elements['image'];
    
    const imageName = imageInput.files[0].name;
    console.log('Image Name:', imageName);
    
    result.innerHTML = 'Loading...';

    try {
      const response = await fetch(`http://127.0.0.1:8000/predict?image=${imageName}`, {
        method: 'POST',
        headers: {
          "Content-type": "application/json"
        }
      });
      const data = await response.json();
      console.log(data);

      result.innerHTML = `<p>Plant Name : ${JSON.stringify(data.name)}</p>
                           <p>Disease Name:${JSON.stringify(data.disease)}`
    } catch (error) {
      console.error('Error:', error);
      result.innerHTML = 'An error occurred.';
    }
    
  });

