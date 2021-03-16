import React, { useState , useEffect} from 'react'
import {storage, db} from './firebase_config'
import Image_upload from './Image_upload'
import './app.css'

const App = () => {

  
    const [Url,setUrl] = useState([{}])


useEffect(() => {

db.collection("image").get().then((querySnapshot) => {
    let Url =[]
    querySnapshot.forEach((doc) => {
       Url.push({url:doc.data().imageId,id:doc.id});
    });
    setUrl(Url)
});

    
}, [])

const Upload = (e)=>{



const  storageRef = storage.ref();

 const ImageRef = storageRef.child(e.target.files[0].name)

//  console.log(ImageRef);

 ImageRef.put(e.target.files[0]).then(snap=>{
    console.log('Uploaded File successfully:');
    snap.ref.getDownloadURL().then(URL=>{
 db.collection('image').add({imageId:URL}).then(docsRef=>{console.log('Written to databse')}).catch(err=>{console.log('Something Gone wrong ');})   
        // console.log("URL",URL);
        // console.log("id",snap);
        setUrl([...Url,{url:URL,id:snap.metadata.generation}])
    })
})
    .catch(err=>{console.log('Error',err);})


}    

    return (
        <div className="photo_gallery">
         <h2> Photo Gallery  </h2>
           
           <input type="file"  onChange={Upload}/>

        <div className="album-grid">
           {Url &&  <Image_upload url={Url}/> }
        </div>           

        </div>
    )
}

export default App
