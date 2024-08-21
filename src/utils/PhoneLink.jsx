const PhoneLink = () => {
    const handlePhoneClick = () => {
      const phoneNumber = '+918896321211';
      window.location.href = `tel:${phoneNumber}`;
    };
  
    return (
      <span onClick={handlePhoneClick}>
        +91 889-632-1211
      </span>
    );
  };
  
  export default PhoneLink;