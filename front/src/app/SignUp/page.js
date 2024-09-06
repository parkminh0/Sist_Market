"use client";
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
  const router = useRouter();
  
  const phoneRegex = /^01[016789]-\d{3,4}-\d{4}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validatePhone = (phone) => {
    return phoneRegex.test(phone);
  };

  const validateEmail = (email) => {
    return emailRegex.test(email);
  };

  // 전화번호 입력 필드에 접근하기 위한 참조
  const phoneInputRef = React.useRef(null);
  const emailInputRef = React.useRef(null);

  const handlePhoneChange = (e) => {
    const inputPhone = e.target.value;
    setPhone(inputPhone);
  };

  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };

  // 전화번호 확인 버튼 클릭 시
  const verifyPhone = () => {
    if (!validatePhone(phone)) {
      alert("올바른 전화번호 형식이 아닙니다. (예: 010-1234-5678)");
      setPhone(""); // 입력 필드를 비워줌
      phoneInputRef.current.focus(); // 커서를 다시 맞춰줌
      return;
    }
    
    axios({
      url: "/user/api/chkPhone",
      method: "post",
      params: { phone },
    }).then((res) => {
      if (res.data.cnt === 1) {
        alert("이미 동일한 번호로 가입된 유저가 있습니다. 다른 번호를 사용해주세요.");
        setIsPhoneVerified(false);
      } else {
        alert("전화번호 확인완료");
        setIsPhoneVerified(true);
      }
    });
  };

  // 이메일 확인 버튼 클릭 시
  const verifyEmail = () => {
    if (!validateEmail(email)) {
      alert("올바른 이메일 형식이 아닙니다.");
      setEmail(""); // 입력 필드를 비워줌
      emailInputRef.current.focus(); // 커서를 다시 맞춰줌
      return;
    }

    axios({
      url: "/user/api/chkEmail",
      method: "post",
      params: { email },
    }).then((res) => {
      if (res.data.cnt === 1) {
        alert("이미 동일한 이메일로 가입된 유저가 있습니다. 다른 이메일을 사용해주세요.");
        setIsEmailVerified(false);
      } else {
        alert("이메일 확인완료");
        setIsEmailVerified(true);
      }
    });
  };

  // 회원가입 로직
  const signup = () => {
    if (pw !== confirmPw) {
      alert("비밀번호가 일치하지 않습니다.");
      return; 
    }
    if (!isPhoneVerified) {
      alert("전화번호 인증을 완료해주세요.");
      return; 
    }
  
    if (!isEmailVerified) {
      alert("이메일 인증을 완료해주세요.");
      return; 
    }
    
    axios({
      url: reg_url,
      method: "post",
      params: {
        pw: pw,
        id: id,
        name: name,
        email: email,
        nickname: nickname,
        phone: phone,
      },
    }).then((res) => {
      if (res.data.uvo !== '') {
        alert("회원가입이 완료되었습니다.");
        const userConfirmed = window.confirm(
          "회원 가입이 완료되었습니다. 페이지를 이동하시겠습니까?"
        );
        if (userConfirmed) {
          router.push("/");
        }
      } 
    });
  };

  const pwChange = (e) => {
    const newPw = e.target.value;
    setPw(newPw);
    setPwMatch(newPw === confirmPw ? "[일치]" : confirmPw ? "[불일치]" : "");
  };

  const confirmPwChange = (e) => {
    const newConfirmPw = e.target.value;
    setConfirmPw(newConfirmPw);
    setPwMatch(pw === newConfirmPw ? "[일치]" : newConfirmPw ? "[불일치]" : "");
  };

  const getPwMatchStyle = () => {
    if (pwMatch === "[일치]") {
      return { color: "green" };
    } else if (pwMatch === "[불일치]") {
      return { color: "red" };
    }
    return {};
  };

  const [isPhoneVerified, setIsPhoneVerified] = useState(false);
  const [isEmailVerified, setIsEmailVerified] = useState(false);

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
            <span style={getPwMatchStyle()}> {pwMatch}</span> 
          )}
          </label>
          <input 
            type="password" 
            id="pw" 
            name="pw" 
            className={styles.input} 
            placeholder="Enter your password" 
            value={pw}
            onChange={pwChange} 
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
            onChange={confirmPwChange} 
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
            onChange={handlePhoneChange}
            ref={phoneInputRef}
          />
          <button type="button" onClick={verifyPhone} className={styles.verifyButton}>
            전화번호 확인
          </button> 
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
            onChange={handleEmailChange}
            ref={emailInputRef}
          />
          <button type="button" onClick={verifyEmail} className={styles.verifyButton}>
            이메일 확인
          </button> 
        </div>

        <button type="button" onClick={signup} className={styles.signupButton}>Sign Up</button>
      </form>

      <p className={styles.footerText}>
        Already have an account? <Link href="/login" className={styles.link}>Log in</Link>
      </p>
    </div>
  );
}
