import "./styles.scss";
import banner2 from "../../../assets/images/about.jpg";

export default function About() {
  return (
    <section>
      <div className="about-sec max-width content-heading" id="/about">
        <div className="img-box">
          <img src={banner2} alt="donation-banner" />
        </div>
        <div className="about-content">
          <h2>About JanKalyan Samiti</h2>
          <p>
            हमारा एनजीओ वंचितों के उत्थान, निराश्रितों का समर्थन करने, विकलांग
            लोगों को सशक्त बनाने, शिक्षा को बढ़ावा देने, पर्यावरण की रक्षा करने
            और राष्ट्रीय सेवा में योगदान देने के लिए समर्पित है। हम मिलकर सभी के
            लिए एक बेहतर समाज बनाने का प्रयास करते हैं!
          </p>
          {/* <button onClick={handlePayment}>Donate Now</button> */}
        </div>
      </div>
    </section>
  );
}
