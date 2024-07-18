
import boxUpload from "../../../assets/images/Group254.png";
import uploadImg from "../../../assets/images/gallery-add.svg";
import uploadremove from "../../../assets/images/maximize-circle.svg";
import { useRef, useState } from "react";
import Modal from "../../common/Modal";

const UploadImage = () => {
    const [loading,setLoading] = useState(false)
    const [modalOpen, setModalOpen] = useState(false);
    const [titleModal, setTitleModal] = useState("");
    const inputFile = useRef(null);
    const imgArticle = useRef(null);
    const imgBack = useRef(null);
    const [file, setFile] = useState();
  
    const inputClick = () => {
        inputFile.current.click();
      };
      const setFileUpload = (e) => {
        setLoading(true)
        let inputfile = e.target.files[0];
        let fileType = inputfile.type;
        // console.log(inputfile, fileType);
        let validType = ["image/jpeg", "image/jpg", "image/png"];
        if (validType.includes(fileType)) {
          setFile(URL.createObjectURL(inputfile));
    
          imgArticle.current.hidden = false;
          imgBack.current.hidden = true;
        } else {
          setTitleModal("فایل انتخابی عکس نیست");
          setModalOpen(true)
        }
        
        setLoading(false)
      };
   
    return ( <>
     {modalOpen && (
        <Modal
          onClose={() => setModalOpen(false)}
          title={titleModal}
          description=""
        />
      )}
     <div className="form__upload_box">
            <div className="form__upload_box-imgs">
              <img
                className="img-article"
                src={file}
                ref={imgArticle}
                alt=""
                hidden
              />
              <img
                className="img-back"
                src={boxUpload}
                ref={imgBack}
                alt="boxUpload"
              />
            </div>
            <div className="form__upload_box-button">
              {file ? (
                <span onClick={inputClick}>
                  <img src={uploadremove} alt="uploadremove" />
                </span>
              ) : (
                <span onClick={inputClick}>
                  <img src={uploadImg} alt="uploadImg" />
                </span>
              )}

              <input
                ref={inputFile}
                type="file"
                onChange={(e) => setFileUpload(e)}
                hidden
              />
            </div>
          </div>
    </> );
}

export default UploadImage;