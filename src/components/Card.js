import react from "react";
import { toast } from "react-toastify";
const Card = ({ id,name, info, image, price }) => {

    const bookingHandler =(id)=>{
        console.log("booked", id);
        toast.info("Booked!")
        toast.success("booked!")
        toast.error("booked")
        toast.warning("booked")

    }
  return (
    <div className="card">
      <img src={image} className="image" alt="error"></img>

      <div className="tour-details">
        <h2 className="tour-price">{price}</h2>
        <h2 className="tour-name">{name}</h2>
      </div>

      <div className="description">
        {info}
      </div>

      <button className="btn-red" onClick={()=>bookingHandler(id)}>
        Book Now
      </button>
    </div>
  );
};
<footer>

<div class="footer-container">
    <div class="footer-left-part">
        <h1>Created by PURAB SINGH</h1>
        <p> <b>Made with ❤ with Tech Tribe</b></p>
        <p>Note: this project is made for educational purposes only.</p>
    </div>
    <div class="footer-right-part">
        <a href="#"><i class="fa fa-linkedin"></i></a>
        <a href="https://www.instagram.com/mr_purabsingh__18/"><i class="fa fa-instagram"></i></a>
        <a href="#"><i class="fa fa-twitter"></i></a>
    </div>
</div>
</footer>

export default Card;