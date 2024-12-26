import "./search.css"
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Search(){
    const navigate = useNavigate();
    const [number, setNumber] = useState();
    const [info, setInfo] = useState({
        username : "",
        password : ""
    });

    return <div id="checkDiv">
        <h2>아이디/비밀번호 찾기</h2>
        <p>
            가입 이메일
            <p>
                <input type="button" className="checkBtn" value="전송" onClick={() => {
                    if(document.getElementById("emailCheck").value === "") return;
                    alert("전송되었습니다.")
                }}/>
                <input type="text" id="emailCheck"/>
            </p>
        </p>
        <p>
            인증 번호
            <p>
                <input type="button" className="checkBtn" value="확인" onClick={() => {
                    setInfo({
                        username : 'test',
                        password : 'new password'
                    })
                }}/>
                <input type="text" id="codeCheck"/>
            </p>
        </p>
        <p style={{"display" : info === null ? "none" : "block"}}>
            아이디 {info === null ? "" : info.username}
        </p>
        <p style={{"display" : info === null ? "none" : "block"}}>
            임시 비밀번호 {info === null ? "" : info.password}
        </p>
        <p>
            <input type="button" id="moveBtn" value="로그인" onClick={() => {
                navigate("/");
            }}/>
        </p>
    </div>
}