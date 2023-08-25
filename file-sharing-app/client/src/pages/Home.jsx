import { useState, useEffect, useRef } from 'react';
import '../App.css';
import { uploadFile, getSignedUrl } from '../service/api';

const Home = () => {
  const [url, setUrl] = useState('');
  const [file, setFile] = useState('');

  const fileInputRef = useRef();

  useEffect(() => {
    const getData = async () => {
      const response = await getSignedUrl();
      console.log(response.url);
      setUrl(response.url);
    }
    getData();
  }, [])

  useEffect(() => {
    const getImage = async () => {
      if (file) {
        await uploadFile(url, file);
        setUrl(url.split('?')[0]);
      }
    }
    getImage();
  }, [file])

  const onUploadClick = () => {
    fileInputRef.current.click();
  }

  return (
    <div className='container'>
      <h1>Filebin</h1>
      <p>Convenient file sharing in three steps without registration.</p>
      
      <p>
        <span>1</span>&nbsp;
        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={(e) => setFile(e.target.files[0])}
        />
        <button onClick={() => onUploadClick()}>Select files to upload</button>&nbsp;
        or drag-and-drop files into this browser window.
      </p>
      <p><span>2</span> Wait until the file uploads complete.</p>
      <p><span>3</span> The files will be available at <a href={url.split('?')[0]}>{url.split('?')[0]}</a> which is a link you can share.</p> 
      
      <p className="info">The files can be deleted manually at any time and will in any case be deleted automatically 6 days from now.</p> 
    
      { file && <img src={url} alt="image" /> }
    </div>
  );
}

export default Home;
