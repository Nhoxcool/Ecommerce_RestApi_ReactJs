
export const uploadToCloudinary = async (pics: any) => {
    const cloud_name = process.env.REACT_APP_CLOUD_NAME;
    const upload_preset = process.env.REACT_APP_UPLOAD_PRESET;
    if (!upload_preset || !cloud_name) {
        console.error("Something is missing");
        return;
    }
    if (pics) {
      
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", upload_preset);
      data.append("cloud_name", cloud_name);
  
      const res = await 
      fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
        method: "post",
        body: data,
      })
        
        const fileData=await res.json();
        console.log("url : ", fileData);
        return fileData.url 
  
    } else {
      console.log("error");
    }
}