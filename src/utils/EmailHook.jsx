const EmailLink = () => {
    const handleEmailClick = () => {
      const email = "allahabadjankalyansamiti852@gmail.com";
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
  
      if (isMobile) {
        window.location.href = `mailto:${email}`;
      } else {
        window.location.href = `mailto:${email}`;
      }
    };
  
    return <span onClick={handleEmailClick}>allahabadjankalyansamiti852@gmail.com</span>;
  };
  
  export default EmailLink;