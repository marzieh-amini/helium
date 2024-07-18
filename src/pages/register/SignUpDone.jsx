import registerDone from "../../assets/images/RegisterDone.png"
import {useNavigate} from "react-router-dom"
const SignUpDone = ()=>{
    const navigate = useNavigate()
    return (
        <div className="signupdone">
            <img src={registerDone} />
            <h2>ثبت نام شما با موفقیت انجام شد.</h2>
            <button className="btn btn__submit" onClick={()=>{navigate("/")}}>ورود به سایت</button>
        </div>
    )
}
export default SignUpDone;