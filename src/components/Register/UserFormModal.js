import React,{useState} from "react";
import { useModal } from "./ModalContext";
import "./Modal.css"; // Ensure you have this CSS
import axios from "axios";

const UserFormModal = () => {
  const { isUserFormModalOpen, closeUserFormModal, registerUser } = useModal();

  if (!isUserFormModalOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="reg-modal-content ">
        <button className="modal-close" onClick={closeUserFormModal}>
          X
        </button>
        <UserForm onRegister={registerUser} />
      </div>
    </div>
  );
};

const UserForm = ({ onRegister }) => {
  const [isLoading,setIsLoading]=useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contactNo:'',
    course:'',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("val ",value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  
  const handleSubmit = async (e) => {
    console.log("formdata ",formData);
     e.preventDefault();
     setIsLoading(true);
    try {
      const url = "http://localhost:4040/send-email";
			const response = await axios.post(url, formData);
			console.log("data ",response);
      alert('Email sent successfully!!');
      setIsLoading(false);
      setFormData({name: '',
        email: '',
        contactNo:'',
        course:'',
        message: '',
      });
     
    } catch (error) {
      console.error(error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      {/* REGISTER FORM */}
      {/* <div className="col-md-5"> */}
      <div id="register-form">
        <form
          name="registerForm"
          className="row register-form"
          onSubmit={handleSubmit}>
          {/* Form Input */}
          <div id="input-name" className="col-md-12">
            <p>Your Name*</p>
            <input
                       type="text"
                       id="name"
                       name="name"
                       value={formData.name}
              // onChange={(e) => setName(e.target.value)}
              onChange={handleChange}
              className="form-control name"
              placeholder="Enter Your Name*"
              required
            />
          </div>
          {/* Form Input */}
          <div id="input-email" className="col-md-12">
            <p>Your Email*</p>
            <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
              // onChange={(e) => setEmail(e.target.value)}
              className="form-control email"
              placeholder="Enter Your Email*"
              required
            />
          </div>
          {/* Form Input */}
          <div id="input-contactNo" className="col-md-12">
            <p>Your Phone Number*</p>
            <input
              type="tel"
              name="contactNo"
              value={formData.contactNo}
              onChange={handleChange}
              className="form-control contactNo"
              placeholder="Enter Your Phone Number*"
              required
            />
          </div>
          <div>
            <p>Course*</p>
            <select
            name="course"
              value={formData.course}
              className="form-control form-select"
              onChange={handleChange}
              required
            >
              <option value="">Select a course</option>
              <option value="Basic Computers and Automation">
                Basic Computers and Automation
              </option>
              <option value="Banking and Accounting with GST">
                Banking and Accounting with GST
              </option>
              <option value="C Programming">C Programming</option>
              <option value="C++">C++</option>
              <option value="Java">Java</option>
              <option value="Python">Python</option>
              <option value="WebDesigning">Web Designing</option>
              <option value="FullStackDevelopment">
                Full Stack Development
              </option>
              <option value="Spoken English">Spoken English</option>
              <option value="SAP">SAP</option>
              <option value="AutoCAD">AutoCAD</option>
            </select>
          </div>
          <div>
          <p>Message*</p>
         
          <textarea
           className="form-control"
            id="message"
            name="message"
             placeholder="Add your message here*"
            value={formData.message}
            onChange={handleChange}
            rows="4"
            required
          />
          </div>
          {/* Form Button */}
          <div className="col-md-12 form-btn">
            <button disabled={isLoading}
              type="submit"
              className="btn btn-md btn-rose tra-black-hover submit"
            >
               {isLoading ? (
          <>
            <img
              src="/images/loading-loader.gif" // path to your loading image or spinner
              alt="Loading"
              style={{ width: '200px', height: '50px' }}
            />
          
          </>
        ) : (
          'Register Now'
        )}
              
            </button>
          </div>
          {/* Form Message */}
          <div className="col-md-12 register-form-msg text-center">
            <span className="loading" />
          </div>
        </form>
        {/* </div> */}
      </div>
      {/* END REGISTER FORM */}
    </div>
  );
};

export default UserFormModal;
