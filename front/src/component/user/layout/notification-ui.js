"use client";
import React, { useEffect, useState } from 'react'
import { Settings, MoreVertical } from 'lucide-react'
import { useRouter } from 'next/router';

function NotificationUI({notifications}) {
  const [activeTab, setActiveTab] = useState('알림');
  const [activeFilter, setActiveFilter] = useState('전체');
  const router = useRouter(); // useRouter 훅 사용

  return (
    <div style={{ maxWidth: '28rem', margin: '0 auto', backgroundColor: 'white', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)', borderRadius: '0.5rem', overflow: 'hidden',}}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1rem', borderBottom: '1px solid #FED7AA'}}>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button
            style={{ fontWeight: '600', color: activeTab === '알림' ? '#EA580C' : '#FB923C', background: 'none', border: 'none', cursor: 'pointer'}}
            onClick={() => setActiveTab('알림')}>
            알림
          </button>
          {/* <button
            style={{ fontWeight: '600', color: activeTab === '혜택' ? '#EA580C' : '#FB923C', background: 'none', border: 'none', cursor: 'pointer'}}
            onClick={() => setActiveTab('혜택')}
          >
            혜택
          </button> */}
        </div>
        {/* <button style={{ color: '#EA580C', background: 'none', border: 'none', cursor: 'pointer' }}>
          <Settings size={20} />
        </button> */}
      </div>

      <div style={{ padding: '1rem',}}>
        {/* <h2 style={{ fontWeight: '600', marginBottom: '0.5rem', color: '#9A3412' }}>오늘 받은 알림</h2> */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', }}>
          {notifications.map((notification) => (
            <div key={notification.alarmkey}  style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div style={{ width: '2rem', height: '2rem',backgroundColor: '#FB923C', borderRadius: '9999px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', }}>
                {notification.icon}
              </div>
              <div style={{ flex: '1' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontWeight: '600', color: '#C2410C' }}>{notification.category}</span>
                  <span style={{ fontSize: '0.75rem', color: '#F97316' }}>{notification.create_dtm}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#EA580C' }}>{notification.message}</p>
              </div>
              <button style={{ color: '#FB923C', background: 'none', border: 'none', cursor: 'pointer' }}>
                <MoreVertical size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* <h2 style={{ fontWeight: '600', marginTop: '1.5rem', marginBottom: '0.5rem', color: '#9A3412' }}>이전 알림</h2> */}
        {/* <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          {notifications.slice(1).map((notification) => (
            <div key={notification.id} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
              <div style={{
                width: '2rem',
                height: '2rem',
                backgroundColor: '#FDBA74',
                borderRadius: '9999px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                {notification.icon}
              </div>
              <div style={{ flex: '1' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <span style={{ fontWeight: '600', color: '#C2410C' }}>{notification.title}</span>
                  <span style={{ fontSize: '0.75rem', color: '#F97316' }}>{notification.time}</span>
                </div>
                <p style={{ fontSize: '0.875rem', color: '#EA580C' }}>{notification.content}</p>
              </div>
              <button style={{ color: '#FB923C', background: 'none', border: 'none', cursor: 'pointer' }}>
                <MoreVertical size={16} />
              </button>
            </div>
          ))}
        </div> */}
      </div>

      {/* <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        padding: '1rem',
        borderTop: '1px solid #FED7AA'
      }}>
        {['전체', '회원/인증', '예약/주문', '결제/배송'].map((filter) => (
          <button
            key={filter}
            style={{
              fontSize: '0.875rem',
              color: activeFilter === filter ? '#EA580C' : '#FB923C',
              fontWeight: activeFilter === filter ? '600' : 'normal',
              background: 'none',
              border: 'none',
              cursor: 'pointer'
            }}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div> */}
    </div>
  )
}

export default NotificationUI