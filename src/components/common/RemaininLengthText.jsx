const RemainingLengthText = ({maxChar}) => {
    
//   const [maxChar, setMaxChar] = useState();
  const [remaining, setRemaining] = useState();
  const checktTextLength = (text) => {
    // remaining can't be negative
    text.length < maxChar ? setRemaining(maxChar - text.length) : setRemaining(0);
  };
  
  //set class when finish remaining
  const classColor = remaining > maxChar * 0.1 ? "" : "text-red";
    return ( <span className={classColor}>{remaining}</span>  );
}

export default RemainingLengthText;