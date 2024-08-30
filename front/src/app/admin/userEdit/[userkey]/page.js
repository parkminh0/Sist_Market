"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation"; // useRouter 훅을 사용하여 라우터 객체 가져오기

export default function UserEditPage() {
  const router = useRouter(); // useRouter 훅 호출하여 라우터 객체 생성
  const { userkey } = router.query; // URL의 쿼리 파라미터에서 userkey를 가져옴
  const [userData, setUserData] = useState(null); // 사용자 데이터를 저장할 상태 생성

  useEffect(() => {
    // userkey가 존재할 때만 데이터를 가져오기 위해 조건문 사용
    if (userkey) {
      fetchUserData(userkey); // userkey가 있을 때 데이터를 가져오는 함수 호출
    }
  }, [userkey]); // userkey가 변경될 때마다 useEffect 재실행

  const fetchUserData = async (userkey) => {
    try {
      const response = await axios.get(`/api/admin/userEdit?userkey=${userkey}`); // 서버로 API 요청 보내기
      setUserData(response.data.ar); // 요청 성공 시 데이터 상태 업데이트
    } catch (error) {
      console.error("데이터를 가져오는 중 오류가 발생했습니다.", error); // 오류 발생 시 콘솔에 출력
    }
  };

  if (!userData) {
    return <p>로딩 중...</p>; // 데이터 로딩 중 메시지 출력
  }

  return (
    <div>
      <h1>유저 정보</h1>
      <p>유저 키: {userData.userkey}</p>
      <p>이름: {userData.name}</p>
      <p>이메일: {userData.email}</p>
      {/* 필요에 따라 추가 정보를 표시 */}
    </div>
  );
}
