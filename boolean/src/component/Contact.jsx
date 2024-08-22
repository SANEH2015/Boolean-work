import React from 'react'

export default function Contact() {
  return (
    <>
     <div
    style={{
      backgroundImage: `url(${require("../assets/telephone.jpg")})`,
      width:"100%",
    height:"500px",
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      alignContent:"center",
      justifyContent:"center",
      display:"flex",
    
    }}>
      <h1 style={{
        color:"white"
      }}>Contact</h1>

    </div>
    <div style={{ width: '50%', padding: '20px',marginLeft:"400px" }}>
          <h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Contact Us</h2>
          <p style={{ textAlign: 'center', marginBottom: '20px' }}>Please fill this form in a decent manner</p>
          <div style={{ display: 'flex', marginBottom: '10px' }}>
            <input
              type="text"
              placeholder="First Name"
              style={{ width: '48%', padding: '10px', marginRight: '5%', border: '1px solid #ccc', borderRadius: '4px' }}
            />
            <input
              type="text"
              placeholder="Last Name"
              style={{ width: '48%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
            />
          </div>
          <input
            type="email"
            placeholder="E-mail"
            style={{ width: '100%', padding: '10px', marginBottom: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
          />
          <textarea
            placeholder="Message"
            style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', resize: 'vertical' }}
          />
          <button
            style={{
              width: '100%',
              padding: '10px',
              marginTop: '20px',
              backgroundColor: '#4CAF50',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            SUBMIT
          </button>
        </div>
    </>
   )
}
