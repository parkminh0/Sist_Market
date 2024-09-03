"use client"
import Link from "next/link";
import React, { useState } from "react";
import styles from "/public/css/Signup.module.css"; 
import axios from "axios";
import { useRouter } from "next/navigation"; 

export default function Page() {
  const reg_url = "/user/api/reg";
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  const [confirmPw, setConfirmPw] = useState("");
  const [pwMatch, setPwMatch] = useState(""); // 비밀번호 일치 여부 상태
  const [name, setName] = useState("");
  const [nickname, setNickname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [uvo,setUvo] = useState({});
  
  
  //sign up
  function signup(){
    axios({
      url: reg_url,
      method: "post",
      params: {
        pw: pw,
        id: id,
        name: name,
        email: email,
        nickname:nickname,
        phone: phone,
      },
    }).then((res) => {
      if (res.data.uvo != '') {
        alert("회원가입이 완료되었습니다.");
        const userConfirmed = window.confirm(
          "회원 가입이 완료되었습니다. 페이지를 이동하시겠습니까?"
        );
        if (userConfirmed) {
          router.push("/");
        }
      } else {
        alert("수정이 불가능 합니다.");
      }
    });

  }


  const pwChange = (e) => {
    const newPw = e.target.value;
    setPw(newPw);
    setPwMatch(newPw === confirmPw ? '[일치]' : confirmPw ? '[불일치]' : '');
  };

  const confirmPwChange = (e) => {
    const newConfirmPw = e.target.value;
    setConfirmPw(newConfirmPw);
    setPwMatch(pw === newConfirmPw ? '[일치]' : newConfirmPw ? '[불일치]' : '');
  };

  const getPwMatchStyle = () => {
    if (pwMatch === '[일치]') {
      return { color: 'green' };
    } else if (pwMatch === '[불일치]') {
      return { color: 'red' };
    }
    return {};
  };


  return (
    <div className={styles.signupContainer}>
      <h1 className={styles.title}>Join Us</h1>
      
      <form className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor="id" className={styles.label}>아이디</label>
          <input 
            type="text" 
            id="id" 
            name="id" 
            className={styles.input} 
            placeholder="Enter your ID" 
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="pw" className={styles.label}>비밀번호 
          {pw && confirmPw && (
            <span style={getPwMatchStyle()}> {pwMatch}</span> // 비밀번호 일치 여부 표시
          )}
          </label>
          <input 
            type="password" 
            id="pw" 
            name="pw" 
            className={styles.input} 
            placeholder="Enter your password" 
            value={pw}
            onChange={pwChange} // 이벤트 핸들러 연결
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="confirmPassword" className={styles.label}>비밀번호 확인</label>
          <input 
            type="password" 
            id="confirmPassword" 
            name="confirmPassword" 
            className={styles.input} 
            placeholder="Confirm your password" 
            value={confirmPw}
            onChange={confirmPwChange} // 이벤트 핸들러 연결
          />
          
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="name" className={styles.label}>이름</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            className={styles.input} 
            placeholder="Enter your name" 
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="nickname" className={styles.label}>닉네임</label>
          <input 
            type="text" 
            id="nickname" 
            name="nickname" 
            className={styles.input} 
            placeholder="Enter your nickname" 
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="phone" className={styles.label}>전화번호</label>
          <input 
            type="tel" 
            id="phone" 
            name="phone" 
            className={styles.input} 
            placeholder="Enter your phone number" 
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="email" className={styles.label}>이메일</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            className={styles.input} 
            placeholder="Enter your email" 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button type="button" onClick={signup} className={styles.signupButton}>Sign Up</button>
      </form>

      <p className={styles.footerText}>
        Already have an account? <Link href="/login" className={styles.link}>Log in</Link>
      </p>
    </div>
  );
}
