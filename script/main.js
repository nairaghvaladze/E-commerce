 
  const imageContainer = document.getElementById('imageContainer');


  const imageUrl = 'http://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_.jpg';

  
  axios.get(imageUrl, { responseType: 'blob' })
    .then(response => {
      
      const imageElement = document.createElement('img');
      imageElement.src = URL.createObjectURL(response.data);
      imageElement.style.width="400px";
      imageElement.style.height="180px";

     
      imageContainer.appendChild(imageElement);
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });
 
  const imageContainer1 = document.getElementById('imageContainer1');
  const imageUrl1 = ' http://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_.jpg';

  
  axios.get(imageUrl1, { responseType: 'blob' })
    .then(response => {
      
      const imageElement1 = document.createElement('img');
      imageElement1.src = URL.createObjectURL(response.data);
      imageElement1.style.width="400px";
      imageElement1.style.height="180px";

     
      imageContainer1.appendChild(imageElement1);
    })
    .catch(error => {
      console.error('Error fetching image:', error);
    });

    const imageContainer2 = document.getElementById('imageContainer2');
    const imageUrl2 = 'http://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_.jpg';
  
    
    axios.get(imageUrl2, { responseType: 'blob' })
      .then(response => {
        
        const imageElement2 = document.createElement('img');
        imageElement2.src = URL.createObjectURL(response.data);
        imageElement2.style.width="286px";
        imageElement2.style.height="387px";
  
       
        imageContainer2.appendChild(imageElement2);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });

      const imageContainer3 = document.getElementById('imageContainer3');
      const imageUrl3 = 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg';
    
      
      axios.get(imageUrl3, { responseType: 'blob' })
        .then(response => {
          
          const imageElement3 = document.createElement('img');
          imageElement3.src = URL.createObjectURL(response.data);
          imageElement3.style.width="361px";
          imageElement3.style.height="387px";
    
         
          imageContainer3.appendChild(imageElement3);
        })
        .catch(error => {
          console.error('Error fetching image:', error);
        });
  
        const imageContainer4 = document.getElementById('imageContainer4');
        const imageUrl4 = 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg';
        
        
        axios.get(imageUrl4, { responseType: 'blob' })
          .then(response => {
            
            const imageElement4 = document.createElement('img');
            imageElement4.src = URL.createObjectURL(response.data);
            
            imageElement4.style.width="280px";
          imageElement4.style.height="380px";
           
            imageContainer4.appendChild(imageElement4);
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });



    const imageContainer5 = document.getElementById('imageContainer5');
    var imageUrl5 = 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg';
  
    
    axios.get(imageUrl5, { responseType: 'blob' })
      .then(response => {
        
        var imageElement5 = document.createElement('img');
        imageElement5.src = URL.createObjectURL(response.data);
        imageElement5.style.width="286px";
        imageElement5.style.height="387px";
  
       
        imageContainer5.appendChild(imageElement5);
      })
      .catch(error => {
        console.error('Error fetching image:', error);
      });
    
      var imageContainer6 = document.getElementById('imageContainer6');
      var imageUrl6 = 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg';
    
      
      axios.get(imageUrl6, { responseType: 'blob' })
        .then(response => {
          
          var imageElement6 = document.createElement('img');
          imageElement6.src = URL.createObjectURL(response.data);
          imageElement6.style.width="286px";
          imageElement6.style.height="387px";
    
         
          imageContainer6.appendChild(imageElement6);
        })
        .catch(error => {
          console.error('Error fetching image:', error);
        });

        var imageContainer7 = document.getElementById('imageContainer7');
        var imageUrl7 = 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg';
      
        
        axios.get(imageUrl7, { responseType: 'blob' })
          .then(response => {
            
            var imageElement7 = document.createElement('img');
            imageElement7.src = URL.createObjectURL(response.data);
            imageElement7.style.width="286px";
            imageElement7.style.height="387px";
      
           
            imageContainer7.appendChild(imageElement7);
          })
          .catch(error => {
            console.error('Error fetching image:', error);
          });
  
