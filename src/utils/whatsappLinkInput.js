const whatsappLinkInput = (message) => {
    const phoneNumber = "918896321211";
    const encodedMessage = encodeURIComponent(message);
    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
    window.open(url, "_blank");
  };
  
  export default whatsappLinkInput;