'use client'

import React, { useState, useEffect } from 'react'
import { AlertTriangle, X } from 'lucide-react'

export default function Alarm() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // 컴포넌트가 마운트되면 알림을 표시합니다
    setIsVisible(true)

    // 5초 후에 알림을 숨깁니다
    const timer = setTimeout(() => {
      setIsVisible(false)
    }, 5000)

    // 컴포넌트가 언마운트되면 타이머를 정리합니다
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 right-4 max-w-sm z-50">
      <div className="bg-orange-50 border-l-4 border-orange-400 p-4 flex items-center shadow-lg rounded-lg">
        <AlertTriangle className="h-5 w-5 text-orange-400 mr-3" />
        <span className="text-orange-800 flex-grow">이것은 경고 알림입니다.</span>
        <button 
          onClick={() => setIsVisible(false)} 
          className="ml-2 text-orange-400 hover:text-orange-600 focus:outline-none"
          aria-label="알림 닫기"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  )
}